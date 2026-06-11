# INDEXING AUTOMATION — TOOLS, SCRIPTS & WORKFLOWS
## Purpose: Automate the repetitive parts of link indexing so you can focus on building more links
## Languages: Python (runs on any machine) | Tools: Free + Paid options

---

## TOOL STACK RECOMMENDATION

| Tool | Purpose | Cost | Priority |
|---|---|---|---|
| **Google Search Console** | Index your own pages | Free | Critical |
| **Bing Webmaster Tools** | Bing indexing | Free | High |
| **Pingler.com** | Bulk ping 60+ services | Free (5/day) | High |
| **Ping-O-Matic** | Ping blog services | Free | High |
| **IndexMeNow** | Paid fast indexing | $20/month | Optional |
| **OneHourIndexing** | Fast GSC-level indexing | $10/month | Optional |
| **Omega Indexer** | API-based indexing | $15/month | Optional |
| **OnlyWire** | Social bookmark automation | $25/month | High-ROI |

**Free stack covers 80% of the results. Paid stack accelerates results by 40-50%.**

---

## SCRIPT 1 — SITEMAP PING AUTOMATION (Python)

Run this whenever you publish new content. Pings Google and Bing with your sitemap update.

```python
#!/usr/bin/env python3
"""
sitemap_ping.py
Pings Google and Bing that your sitemap has been updated.
Run: python sitemap_ping.py
"""

import requests
import urllib.parse

SITEMAP_URL = "https://affordablelocksmithorlando.com/sitemap.xml"
encoded = urllib.parse.quote(SITEMAP_URL, safe='')

ping_endpoints = [
    f"https://www.google.com/ping?sitemap={encoded}",
    f"https://www.bing.com/webmaster/ping.aspx?siteMap={encoded}",
    f"http://ping.feedburner.com/?url={encoded}",
]

print(f"Pinging sitemap: {SITEMAP_URL}\n")

for endpoint in ping_endpoints:
    try:
        response = requests.get(endpoint, timeout=15)
        status = "OK" if response.status_code in [200, 201, 204] else f"Status {response.status_code}"
        print(f"[{status}] {endpoint[:60]}...")
    except requests.exceptions.RequestException as e:
        print(f"[ERROR] {endpoint[:60]}... → {e}")

print("\nDone. Check Google Search Console in 24-72 hours.")
```

---

## SCRIPT 2 — BULK BACKLINK PING (Python)

Add every backlink URL to the list and run this to ping all of them at once.

```python
#!/usr/bin/env python3
"""
ping_backlinks.py
Pings all your backlink URLs through multiple ping services.
Update the BACKLINK_URLS list as new backlinks go live.
Run: python ping_backlinks.py
"""

import requests
import urllib.parse
import time

# =============================================
# UPDATE THIS LIST AS EACH BACKLINK GOES LIVE
# =============================================
BACKLINK_URLS = [
    # YOUR SITE PAGES
    "https://affordablelocksmithorlando.com/",
    "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
    "https://affordablelocksmithorlando.com/orlando-security-statistics/",
    "https://affordablelocksmithorlando.com/orlando-home-security-guide/",
    "https://affordablelocksmithorlando.com/scholarship/",

    # WEB 2.0 BACKLINKS (add as they go live)
    # "https://yourusername.medium.com/article-slug",
    # "https://yoursite.wordpress.com/post-slug/",
    # "https://yourblog.blogspot.com/post-slug.html",
    # "https://yourblog.tumblr.com/post/number/slug",

    # DIRECTORY PROFILES (add as they go live)
    # "https://www.yelp.com/biz/affordable-locksmith-orlando",
    # "https://www.bbb.org/us/fl/orlando/profile/locksmith/affordable-locksmith-orlando",
    # "https://www.manta.com/c/your-listing-id/affordable-locksmith-orlando",

    # PRESS RELEASE URLS (add after submission)
    # "https://prlog.org/your-press-release-url",
    # "https://openpr.com/news/your-press-release.html",

    # GUEST POST LIVE URLS (add as posts go live)
    # "https://guestsite.com/your-article-url",
]

SITE_NAME = "Affordable Locksmith Orlando"
SITE_URL = "https://affordablelocksmithorlando.com/"

def ping_pingomatic(url):
    """Ping via Ping-O-Matic RPC"""
    try:
        params = {
            "title": SITE_NAME,
            "blogurl": url,
            "rssurl": url,
            "chk_weblogscom": "on",
            "chk_blogs": "on",
            "chk_technorati": "on",
            "chk_feedburner": "on",
            "chk_syndic8": "on",
            "chk_newsgator": "on",
            "chk_myyahoo": "on",
        }
        r = requests.get("https://pingomatic.com/ping/", params=params, timeout=15)
        return r.status_code
    except Exception as e:
        return f"Error: {e}"

def ping_twingly(url):
    """Ping Twingly blog search"""
    try:
        params = {"url": url, "apikey": ""}
        r = requests.get("https://www.twingly.com/ping", params=params, timeout=15)
        return r.status_code
    except Exception as e:
        return f"Error: {e}"

def ping_direct(ping_url, target_url):
    """Generic GET ping"""
    try:
        encoded = urllib.parse.quote(target_url, safe='')
        full_url = ping_url.format(url=encoded)
        r = requests.get(full_url, timeout=15)
        return r.status_code
    except Exception as e:
        return f"Error: {e}"

DIRECT_PINGS = [
    "https://rpc.pingomatic.com/",
    "https://ping.blo.gs/?name={url}&url={url}",
]

print(f"{'='*60}")
print(f"BACKLINK PING CAMPAIGN")
print(f"Target Site: {SITE_URL}")
print(f"Total URLs to ping: {len(BACKLINK_URLS)}")
print(f"{'='*60}\n")

for i, url in enumerate(BACKLINK_URLS, 1):
    print(f"[{i}/{len(BACKLINK_URLS)}] Pinging: {url}")

    status1 = ping_pingomatic(url)
    print(f"  Ping-O-Matic: {status1}")

    status2 = ping_twingly(url)
    print(f"  Twingly:      {status2}")

    # Be respectful — don't hammer services
    time.sleep(2)

print(f"\n{'='*60}")
print("Ping campaign complete!")
print("Check index status in 24-72 hours:")
for url in BACKLINK_URLS[:5]:
    print(f"  Google: site:{url}")
print(f"{'='*60}")
```

---

## SCRIPT 3 — INDEX STATUS CHECKER (Python)

Check which of your backlinks are indexed vs. not indexed yet.

```python
#!/usr/bin/env python3
"""
check_indexing.py
Generates Google search URLs to check if each backlink is indexed.
Run: python check_indexing.py
Opens check URLs in your browser or prints them for manual checking.
"""

import webbrowser

BACKLINK_URLS = [
    "https://affordablelocksmithorlando.com/",
    "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
    # Add more URLs here
]

print("INDEX STATUS CHECK")
print("="*60)
print("Opening Google search pages to check index status...")
print("If Google shows the page = INDEXED ✓")
print("If no results = NOT YET INDEXED ✗")
print("="*60)

for url in BACKLINK_URLS:
    search_url = f"https://www.google.com/search?q=site:{url}"
    print(f"\nChecking: {url}")
    print(f"Search:   {search_url}")
    # Uncomment to auto-open in browser:
    # webbrowser.open(search_url)

print("\nManually check each search URL above.")
print("Not indexed after 7 days = run ping campaign again + add Tier 2 links.")
```

---

## SCRIPT 4 — SOCIAL SIGNAL AUTOMATION (Zapier / Make.com Workflow)

For automating social signals without writing code:

### Zapier Workflow Setup

**Trigger:** RSS feed has new item (your Web 2.0 feed URL)
**Action 1:** Post to Twitter/X with URL + description
**Action 2:** Post to LinkedIn with URL + description
**Action 3:** Save URL to Buffer queue for Facebook posting

**Setup:**
1. Go to zapier.com → Create Zap
2. Trigger: RSS by Zapier → Feed URL: your Medium/WordPress RSS feed
3. Action 1: Twitter → Create Tweet → message template:
   ```
   New: {{title}} - {{link}} #OrlandoFL #HomeSecurity #Locksmith
   ```
4. Action 2: LinkedIn → Share Update → same template
5. Test and activate

**Cost:** Free tier (100 tasks/month) covers most use cases.

---

## SCRIPT 5 — GOOGLE INDEXING API BULK SUBMITTER (Advanced)

For submitting YOUR site pages directly to Google's indexing queue.

```python
#!/usr/bin/env python3
"""
google_indexing_api.py
Submits URLs directly to Google Indexing API.
Requires: Google Cloud service account with Indexing API enabled.
Setup: See GSC_BING_GUIDE.md for service account creation steps.
"""

import json
import time

try:
    from oauth2client.service_account import ServiceAccountCredentials
    import httplib2
except ImportError:
    print("Install required packages: pip install oauth2client httplib2")
    exit(1)

# Your service account JSON key file (downloaded from Google Cloud Console)
SERVICE_ACCOUNT_FILE = "service_account.json"
SCOPES = ["https://www.googleapis.com/auth/indexing"]
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

# YOUR SITE PAGES TO SUBMIT
YOUR_SITE_URLS = [
    "https://affordablelocksmithorlando.com/",
    "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
    "https://affordablelocksmithorlando.com/orlando-security-statistics/",
    "https://affordablelocksmithorlando.com/orlando-home-security-guide/",
    "https://affordablelocksmithorlando.com/scholarship/",
    "https://affordablelocksmithorlando.com/emergency-locksmith/",
    "https://affordablelocksmithorlando.com/residential-locksmith/",
    "https://affordablelocksmithorlando.com/automotive-locksmith/",
    "https://affordablelocksmithorlando.com/commercial-locksmith/",
]

try:
    credentials = ServiceAccountCredentials.from_json_keyfile_name(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES
    )
    http = credentials.authorize(httplib2.Http())
except Exception as e:
    print(f"Auth error: {e}")
    print("Make sure service_account.json exists and has correct permissions.")
    exit(1)

print(f"Submitting {len(YOUR_SITE_URLS)} URLs to Google Indexing API...\n")
success_count = 0

for url in YOUR_SITE_URLS:
    body = json.dumps({"url": url, "type": "URL_UPDATED"})
    try:
        response, content = http.request(ENDPOINT, method="POST", body=body)
        status = response.status
        if status in [200, 201]:
            print(f"  [✓] Submitted: {url}")
            success_count += 1
        else:
            print(f"  [✗] Failed ({status}): {url}")
        time.sleep(1)  # Rate limiting
    except Exception as e:
        print(f"  [!] Error: {url} → {e}")

print(f"\nSubmitted {success_count}/{len(YOUR_SITE_URLS)} URLs successfully.")
print("Google will crawl these within 24-72 hours.")
```

---

## DAILY AUTOMATION CHECKLIST (15 Minutes Per Day)

```
EVERY DAY A NEW BACKLINK GOES LIVE:

□ Run: python ping_backlinks.py  (update URL list first)
□ Submit URL to GSC URL Inspection → Request Indexing
□ Submit URL to Bing Webmaster → URL Submission
□ Post social signal on Twitter/X (use template from SOCIAL_SIGNALS_TEMPLATES.md)
□ Bookmark URL on Diigo + Mix (takes 5 min)
□ Add URL to Flipboard magazine

EVERY MONDAY:

□ Run: python check_indexing.py  (see what's indexed)
□ For any URL not indexed after 7 days: submit to 5 more ping services
□ Check GSC Coverage report for errors
□ Post LinkedIn content update linking to newest live resource

EVERY MONTH:

□ Run: python sitemap_ping.py  (keep sitemap fresh in Google's index)
□ Update BACKLINK_URLS list with all new live links
□ Run full ping campaign on all accumulated backlinks
□ Review GSC Performance → are rankings improving?
```

---

## PAID INDEXING SERVICES (Use If Manual Methods Are Slow)

| Service | URL | Cost | Speed |
|---|---|---|---|
| **One Hour Indexing** | 1hourindexing.com | $10/month | 1–4 hours |
| **Omega Indexer** | omegaindexer.com | $15/month | 2–12 hours |
| **Linklicious** | linklicious.me | $25/month | 24–48 hours |
| **Indexification** | indexification.com | $19/month | 24–72 hours |
| **Nuclear Link Indexer** | nuclearlinkindexer.com | $19/month | 24–72 hours |

**When to use paid indexing:**
- Guest post page not indexed after 14 days
- Press release URL not indexed after 7 days
- Directory profile page not indexed after 21 days

**How to use:** Create account → paste URL → submit. The service handles the rest.
