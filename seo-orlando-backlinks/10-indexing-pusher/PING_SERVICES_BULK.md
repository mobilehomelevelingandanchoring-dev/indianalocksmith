# PING SERVICES — BULK SUBMISSION LIST
## Purpose: Notify search engines and crawlers that new content exists
## Use: Submit every new backlink URL to these services immediately after it goes live
## Method: Manual (open each URL), Semi-Auto (use Pingler/PingMyLinks), or Automated (see INDEXING_AUTOMATION.md)

---

## WHAT PINGING DOES

Ping services notify search engine bots (Googlebot, Bingbot, and 50+ others) that a URL has new content. The bots add it to their crawl queue — dramatically faster than waiting for natural discovery.

**Fastest for indexing:** Google + Bing direct submission (GSC/Webmaster Tools)
**Broadest coverage:** Bulk ping services hit 50–80 crawlers at once

---

## METHOD 1 — ONE-CLICK BULK PING TOOLS (Start Here)

Submit your backlink URL to these tools first — they ping dozens of services simultaneously:

| Tool | URL | Pings Sent | Free? |
|---|---|---|---|
| **Pingler** | pingler.com | 60+ services | Yes (5/day free) |
| **Ping-O-Matic** | pingomatic.com | 20+ services | Yes (unlimited) |
| **PingMyLinks** | pingmylinks.com | 50+ services | Yes |
| **BulkPing** | bulkping.com | 40+ services | Yes |
| **GotPing** | gotping.com | 30+ services | Yes |
| **PingFarm** | pingfarm.com | 50+ services | Yes |
| **Feedshark** | feedshark.brainbliss.com | 25+ services | Yes |
| **TotalPing** | totalping.com | 20+ services | Yes |
| **1-hour-indexing** | 1hourindexing.com | Google focused | Paid ($) |
| **Omega Indexer** | omegaindexer.com | GSC API | Paid ($) |

**Recommended daily workflow:**
1. New backlink goes live → copy URL
2. Submit to Pingler (covers 60+ in one shot)
3. Submit to Ping-O-Matic (different service list)
4. Submit to PingMyLinks
5. Done — bots will crawl within hours

---

## METHOD 2 — INDIVIDUAL PING SERVICES (Manual — For Maximum Coverage)

Submit to each of these directly for maximum bot coverage:

### Search Engine Direct Pings
```
http://www.google.com/webmasters/tools/ping?sitemap=[YOUR_URL]
http://www.bing.com/webmaster/ping.aspx?siteMap=[YOUR_URL]
http://search.yahooapis.com/SiteExplorerService/V1/updateNotification?appid=YahooDemo&url=[YOUR_URL]
```

### WordPress / Blog Ping Services
```
http://rpc.pingomatic.com/
http://rpc.technorati.com/rpc/ping
http://ping.feedburner.com/
http://blogsearch.google.com/ping/RPC2
http://www.bloglines.com/ping
http://www.feedster.com/api/ping/RPC2
http://ping.blogs.yandex.ru/RPC2
http://pinger.blogflux.com/rpc/
http://rss.feedsportal.com/r/of/13002/pingback
http://xmlrpc.blogg.de/
http://www.a2b.cc/setloc/bp.a2b
http://www.bitacoras.net/ping
http://api.feedster.com/ping
http://api.moreover.com/RPC2
http://api.moreover.com/ping
http://www.blogdigger.com/RPC2
http://www.blogshares.com/rpc.php
http://www.blogsnow.com/ping
http://www.blogstreet.com/xrbin.cgi
http://bulkfeeds.net/rpc
http://www.changemysoftware.net/ping
http://ping.cocolog-nifty.com/xmlrpc
http://ping.exblog.jp/xmlrpc
http://www.feedsubmitter.com
http://flo.entry.com/textpattern/rpc
http://fr.blogs.yandex.ru/RPC2
http://geo.schnoggo.com/ping
http://geourl.org/ping
http://www.icerocket.com/c?p=ping
http://ping.feedburner.com
http://ping.rootblog.com/rpc.php
http://www.pingerati.net
http://www.pingmyblog.com
http://pingoat.com
http://blogping.com/ping.php
http://ping.aentrada.com/
http://ping.bitacoras.com
http://ping.blo.gs/
http://ping.bloggers.jp/rpc/
http://ping.cocolog-nifty.com/xmlrpc
http://ping.de.szene1.at/
http://ping.exblog.jp/xmlrpc
http://ping.feedburner.com/
http://ping.myblog.jp
http://ping.rootblog.com/rpc.php
http://ping.syndic8.com/xmlrpc.php
http://ping.weblogalot.com/rpc.php
http://ping.weblogs.se/
http://www.pingalink.com/
http://pingates.com/ping
http://pingmylink.com
http://pingomatic.com
http://rpc.blogger.com/
http://rpc.blogsearchengine.com/ping
http://rpc.icerocket.com:10080/
http://rpc.pingomatic.com/
http://rpc.technorati.com/rpc/ping
http://rpc.weblogs.com/RPC2
http://www.snipsnap.org/RPC2
http://submissions.ask.com/ping
http://topicexchange.com/RPC2
http://trackback.bakedalaska.com/bakedalaska
http://www.twingly.com/ping
http://ping.twingly.com
http://www.updatescentral.com/
http://weblogues.com/RPC/
http://xmlrpc.blogg.de/
http://xping.pubsub.com/ping/
```

---

## METHOD 3 — GOOGLE INDEXING API (FASTEST — For Your Own Site Pages)

The Google Indexing API allows instant "request indexing" calls programmatically. While officially for job posting / livestream pages, many SEOs use it for any page.

**Setup (one-time):**
1. Go to Google Cloud Console (console.cloud.google.com)
2. Create a project → Enable "Indexing API"
3. Create a Service Account → Download JSON key
4. Add the service account email as an Owner in Google Search Console

**API Call (Python):**
```python
from oauth2client.service_account import ServiceAccountCredentials
import httplib2
import json

SCOPES = ["https://www.googleapis.com/auth/indexing"]
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

credentials = ServiceAccountCredentials.from_json_keyfile_name(
    "service_account.json", scopes=SCOPES
)
http = credentials.authorize(httplib2.Http())

# List of URLs to index
urls = [
    "https://affordablelocksmithorlando.com/",
    "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
    "https://affordablelocksmithorlando.com/orlando-home-security-guide/",
    "https://affordablelocksmithorlando.com/orlando-security-statistics/",
    "https://affordablelocksmithorlando.com/scholarship/",
]

for url in urls:
    content = json.dumps({
        "url": url,
        "type": "URL_UPDATED"
    })
    response, content = http.request(ENDPOINT, method="POST", body=content)
    print(f"Submitted: {url} | Status: {response.status}")
```

**Limit:** 200 URL submissions per day. Use for your own pages only.

---

## METHOD 4 — BING CONTENT SUBMISSION API

```
POST https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch
Content-Type: application/json
{
    "siteUrl": "https://affordablelocksmithorlando.com/",
    "urlList": [
        "https://affordablelocksmithorlando.com/",
        "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
        "https://affordablelocksmithorlando.com/orlando-home-security-guide/"
    ]
}
```

Or use Bing Webmaster Tools → URL Submission → paste URLs manually (100/day free).

---

## BATCH PING SCRIPT (Python — Run After Each New Backlink)

```python
import requests
import urllib.parse

# Add every new backlink URL here as it goes live
backlink_urls = [
    # YOUR SITE PAGES
    "https://affordablelocksmithorlando.com/",
    "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
    "https://affordablelocksmithorlando.com/orlando-home-security-guide/",
    
    # WEB 2.0 BACKLINKS (add as they go live)
    # "https://your-medium-article-url",
    # "https://your-wordpress-article-url",
    
    # DIRECTORY PROFILES (add as they go live)
    # "https://www.yelp.com/biz/affordable-locksmith-orlando",
    
    # GUEST POST LIVE URLS (add as they go live)
    # "https://guestsite.com/your-article-url",
]

# Free ping services that accept GET requests
ping_urls = [
    "https://pingomatic.com/ping/?title=Affordable+Locksmith+Orlando&blogurl={url}&rssurl={url}&chk_weblogscom=on&chk_blogs=on&chk_technorati=on&chk_feedburner=on&chk_syndic8=on&chk_newsgator=on&chk_myyahoo=on&chk_pubsubcom=on&chk_blogdigger=on&chk_feedster=on&chk_blogrolling=on&chk_blogstreet=on&chk_moreover=on&chk_weblogalot=on&chk_icerocket=on&chk_newsisfree=on&chk_topicexchange=on",
    "https://www.pingmylinks.com/ping/?url={url}",
]

for backlink in backlink_urls:
    encoded = urllib.parse.quote(backlink, safe='')
    for ping_template in ping_urls:
        ping_url = ping_template.format(url=encoded)
        try:
            r = requests.get(ping_url, timeout=10)
            print(f"Pinged: {backlink[:50]} → {r.status_code}")
        except Exception as e:
            print(f"Failed: {backlink[:50]} → {e}")
```

**Run:** `python ping_backlinks.py` — Run this every time a new backlink goes live.

---

## PING FREQUENCY RULES

- **New page:** Ping immediately on publish
- **Updated page:** Ping again when significant content is added
- **Max frequency:** Don't ping the same URL more than once every 24 hours
- **Old links that aren't indexed after 14 days:** Run second ping campaign + add Tier 2 links

---

## VERIFYING INDEXING SUCCESS

After 72 hours, check index status:
```
site:https://your-backlink-page-url.com/specific-page
```

Or bulk check with Python:
```python
import requests

urls_to_check = [
    "https://medium.com/your-article",
    "https://your-wordpress.wordpress.com/article",
    # etc.
]

for url in urls_to_check:
    search_url = f"https://www.google.com/search?q=site:{url}"
    print(f"Check: {search_url}")
# Open these in browser — if Google shows the page, it's indexed
```
