from scrapy.spider import Spider
from scrapy.selector import Selector

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
                f.write(link)

    # sel.css('div#content > div.clearfloat:not(.recurring) div.tanbox.left:first-child')
