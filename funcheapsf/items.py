# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field


class FuncheapsfItem(Item):
    event = Field()
    venue = Field()
    address = Field()
    day = Field()
    start_time = Field()
    end_time = Field()
    cost = Field()
