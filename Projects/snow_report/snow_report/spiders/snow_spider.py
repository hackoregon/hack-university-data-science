import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from snow_report.items import SnowReportItem



mountain_names = ['timberline-lodge','mt-bachelor', 'mt-hood-meadows','mount-ashland', 'scout-springs', 'cooper-spur', 'mt-hood-ski-bowl', 'hoodoo-ski-area', 'anthony-lakes-mountain-resort', 'willamette-pass']
mountains = []
for item in mountain_names:
    url = "http://www.onthesnow.com/oregon/{}/historical-snowfall.html?&y=2009&q=snow&v=list".format(item)
    mountains.append(url)

class SnowSpider(CrawlSpider):
    name = 'snow_spider'
    allowed_domains = ['onthesnow.com']
    start_urls = mountains

    rules =(Rule(LinkExtractor(allow=(), restrict_xpaths=
                            ('//*[contains(concat(" ", normalize-space(@class), " "), " main_tabs ")]',)),
                             callback = 'parse_item'),)


    def parse_item(self, response):

        for index, sel in enumerate(response.xpath('//td')):

            item = SnowReportItem()
            item['day'] = sel.xpath('//td[1]/text()').extract()[index]
            item['new_snow'] = sel.xpath('//td[2]/text()').extract()[index]
            item['year_total'] = sel.xpath('//td[3]/text()').extract()[index]
            item['base_depth'] = sel.xpath('//td[4]/text()').extract()[index]
            item['mountain'] = sel.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " resort_name ")]/text()').extract()
            item['region'] = sel.xpath('//p[contains(concat(" ", normalize-space(@class), " "), " rel_regions ")]/a[1]/text()').extract()
            yield item
