from scrapy.spider import Spider
from scrapy.selector import Selector
from scrapy.http.request import Request

from funcheapsf.items import FuncheapsfItem

class FunCheapSFSpider(Spider):
    name = "funcheapsf"
    allowed_domains = ["funcheap.com"]
    # scrapy.Request object created for each URL
    start_urls = [
        "http://sf.funcheap.com/2014/10/12/"
    ]

    def parse(self, response):
        sel = Selector(response)
        link_elements = sel.css('div#content > div.clearfloat:not(.recurring) div.tanbox.left span a').xpath('.//@href').extract()
        filename = 'crawled_info'
        with open(filename, 'wb') as f:
            for link in link_elements:
                item = Request(link, parse2)
                f.write(item)


    def parse2(self, response):
        sel = Selector(response)
        item = FuncheapsfItem()
        item['event'] = Field(sel.css('.title').extract())

        venue = sel.xpath('//b[.="Venue"]/../a/@href').extract()
        item['venue'] = Field(venue)

        address = sel.xpath('//b[.="Address"]/../text()').extract().split(': ')[1]
        item['address'] = Field(address) # $x("//b[.='Address']/..")

        day = sel.css('#stats span.left > a').xpath('.//text()').extract()
        item['day'] = Field(day)

        start_time = sel.css('#stats span.cost').xpath('.//../text()')
        if start_time.re('All day'):
            start_time = 'All day'
        else:
            start_time = start_time.extract().split(' ')
            start_time = start_time[2] + ' ' + start_time[3]
        item['start_time'] = Field(start_time)

        if start_time != 'All day':
            end_time = sel.css('#stats span.cost').xpath('.//../text()').extract().split(' ')
            end_time = end_time[-2] + ' ' + end_time[-1]
            item['end_time'] = Field(end_time)

        cost = sel.xpath('//b[.="Cost:"]/../text()')[0].strip()
        item['cost'] = Field(cost)

        return item


    # TODO: learn why this didn't work
    # sel.css('div#content > div.clearfloat:not(.recurring) div.tanbox.left:first-child')
