from scrapy.spider import Spider
from scrapy.spider import Selector

class FunCheapSFSpider(Spider):
    name = "funcheapsf"
    allowed_domains = ["funcheap.com"]
    # scrapy.Request object created for each URL
    start_urls = [
        "http://sf.funcheap.com/2014/10/12/"
    ]

    def parse(self, response):
        sel = Selector(response)
        sites = sel.css('')
        sel.css('div.clearfloat:not(.recurring)').css('a[href="http://sf.funcheap.com/world-championship-heavyweight-pumpkin-weighoff/"]')
