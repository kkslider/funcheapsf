# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class FuncheapsfItem(scrapy.Item):
    event = scrapy.Field()
    venue = scrapy.Field()
    address = scrapy.Field()
    day = scrapy.Field()
    start_time = scrapy.Field()
    end_time = scrapy.Field()
    cost = scrapy.Field()
