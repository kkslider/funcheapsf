from scrapy.spider import Spider
from scrapy.selector import Selector
from scrapy.http.request import Request
from funcheapsf.items import FuncheapsfItem
import time

class FunCheapSFSpider(Spider):
    name = "funcheapsf"
    allowed_domains = ["funcheap.com"]
    year = time.strftime('%Y')
    month = time.strftime('%m')
    day = time.strftime('%d')

    # scrapy.Request object created for each URL
    start_urls = [
        "http://sf.funcheap.com/" + year + "/" + month + "/" + day + "/"
    ]

    def parse(self, response):
        sel = Selector(response)
        link_elements = sel.css('div#content > div.clearfloat:not(.recurring) div.tanbox.left span a').xpath('.//@href').extract()
        count = 1
        items = []

        for link in link_elements:
            # item is a Request object
            item = Request(link, callback=self.parseEvent)
            items.append(item)
            count += 1
        return items


    def parseEvent(self, response):
        sel = Selector(response)
        item = FuncheapsfItem()
        item['event'] = sel.css('.title').xpath('.//text()').extract()[0].split(' | ')[0]

        venue = sel.xpath('//b[.="Venue"]/../a/text()').extract()[0]
        item['venue'] = venue
        address = sel.xpath('//b[.="Address"]/../text()').extract()[0].split(': ')[1]

        item['address'] = address

        day = sel.css('#stats span.left > a').xpath('.//text()').extract()[0]
        item['day'] = day

        start_time = sel.css('#stats span.cost').xpath('.//../text()')
        if len(start_time.re(r'All Day')) > 0:
            start_time = 'All Day'
        else:
            start_time = start_time.extract()[0].split(' ')
            start_time = start_time[2] + ' ' + start_time[3]
        item['start_time'] = start_time

        if start_time != 'All Day':
            end_time = sel.css('#stats span.cost').xpath('.//../text()').extract()[0].split(' ')
            end_time = end_time[-2] + ' ' + end_time[-1]
            item['end_time'] = end_time

        cost = sel.xpath('//b[.="Cost:"]/../text()')[0].extract().strip()
        item['cost'] = cost

        return item
