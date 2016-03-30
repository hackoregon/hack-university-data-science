import scrapy
from snow_report.items import SnowReportItem

class SnowSpider(scrapy.Spider):
    name = 'snow_spider2'
    allowed_domains = ['onthesnow.com']
    start_urls = ["http://www.onthesnow.com/oregon/mt-hood-meadows/historical-snowfall.html?&y=2009&q=snow&v=list"]

    def parse(self, response):

        for index, sel in enumerate(response.xpath('//td')):

            item = SnowReportItem()
            item['day'] = sel.xpath('//td[1]/text()').extract()[index]
            item['new_snow'] = sel.xpath('//td[2]/text()').extract()[index]
            item['year_total'] = sel.xpath('//td[3]/text()').extract()[index]
            item['base_depth'] = sel.xpath('//td[4]/text()').extract()[index]
            yield item
