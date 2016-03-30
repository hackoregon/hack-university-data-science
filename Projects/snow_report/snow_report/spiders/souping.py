from bs4 import BeautifulSoup
import urllib2

url= 'http://www.onthesnow.com/northern-america/ski-resorts.html'
page = urllib2.urlopen(url)
soup = BeautifulSoup(page.read())

def get_mountains(content):

    resorts = []

    for div in soup.find_all("div", {"class": "name"}):
        hill = div.find('a').contents
        hilly = str(hill)
        hillz = hilly.replace(' ', '-')
        if hill:
            resorts.append(hillz)
    return resorts
