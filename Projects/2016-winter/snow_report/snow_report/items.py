# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class SnowReportItem(scrapy.Item):
    mountain = scrapy.Field()
    region = scrapy.Field()
    day = scrapy.Field()
    new_snow = scrapy.Field()
    year_total = scrapy.Field()
    base_depth = scrapy.Field()
