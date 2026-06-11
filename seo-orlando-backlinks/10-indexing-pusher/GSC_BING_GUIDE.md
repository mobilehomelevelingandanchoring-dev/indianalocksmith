# GOOGLE SEARCH CONSOLE + BING WEBMASTER TOOLS
## Purpose: Direct URL submission to Google and Bing — fastest indexing method for YOUR pages
## Use: Submit every new page on affordablelocksmithorlando.com immediately after publishing

---

## GOOGLE SEARCH CONSOLE (GSC)

### Step 1 — Verify Your Site (if not already done)

1. Go to: search.google.com/search-console
2. Click "Add Property"
3. Enter: `https://affordablelocksmithorlando.com/`
4. Choose verification method: HTML tag (paste in site header) OR Google Analytics (if GA already installed)
5. Click Verify

### Step 2 — Submit Your XML Sitemap

1. In GSC left menu → Sitemaps
2. Enter: `sitemap.xml`
3. Full URL: `https://affordablelocksmithorlando.com/sitemap.xml`
4. Click Submit

**If your site doesn't have a sitemap:** Use the XML sitemap template in `sitemaps/SITEMAP_TEMPLATE.xml` and upload to your server root.

### Step 3 — URL Inspection (Request Indexing — Use This For Every New Page)

1. In GSC, top bar → paste the URL of your new page
2. Press Enter → GSC checks if it's indexed
3. If not indexed: Click "Request Indexing"
4. Google adds it to the crawl queue — typically indexed within 24–72 hours

**DO THIS FOR EVERY NEW PAGE IN THIS LIST:**
```
https://affordablelocksmithorlando.com/locksmith-scams-florida/
https://affordablelocksmithorlando.com/orlando-security-statistics/
https://affordablelocksmithorlando.com/orlando-home-security-guide/
https://affordablelocksmithorlando.com/scholarship/
```

**Daily limit:** 10 URL inspection requests per day. Prioritize new pages.

### Step 4 — Monitor Coverage Report

GSC → Pages → Coverage Report
- **Valid:** Indexed ✓
- **Error:** Has an issue preventing indexing → fix immediately
- **Excluded:** Either noindex tag, canonicalized to different URL, or blocked by robots.txt

Check weekly.

---

## BING WEBMASTER TOOLS

Bing powers Yahoo search and Microsoft Cortana. A Bing-indexed page gets crawled faster by multiple engines.

### Setup
1. Go to: bing.com/webmasters
2. Sign in with Microsoft account
3. Add site: `https://affordablelocksmithorlando.com/`
4. Verify via XML file upload OR meta tag (same as GSC)
5. Submit sitemap: `https://affordablelocksmithorlando.com/sitemap.xml`

### URL Submission (100 URLs per day — free)
1. Bing Webmaster → URL Submission (left menu)
2. Paste each new URL, one per line
3. Click Submit
4. Bing indexes within 24–48 hours

### Batch URL Submission via API
```python
import requests
import json

API_KEY = "YOUR_BING_WEBMASTER_API_KEY"  # Get from Bing Webmaster → Settings → API Access
SITE_URL = "https://affordablelocksmithorlando.com/"

urls_to_submit = [
    "https://affordablelocksmithorlando.com/locksmith-scams-florida/",
    "https://affordablelocksmithorlando.com/orlando-security-statistics/",
    "https://affordablelocksmithorlando.com/orlando-home-security-guide/",
    "https://affordablelocksmithorlando.com/scholarship/",
]

headers = {"Content-Type": "application/json; charset=utf-8"}

for url in urls_to_submit:
    payload = {
        "siteUrl": SITE_URL,
        "urlList": [url]
    }
    response = requests.post(
        f"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey={API_KEY}",
        headers=headers,
        data=json.dumps(payload)
    )
    print(f"Submitted to Bing: {url} | Status: {response.status_code}")
```

---

## XML SITEMAP — GENERATE AND SUBMIT

Your sitemap tells Google about every page on your site. Submit it to both GSC and Bing.

### Dynamic Sitemap Checklist
If your site runs on WordPress: install Yoast SEO or Rank Math — they auto-generate and update the sitemap.

If static HTML: see `sitemaps/SITEMAP_TEMPLATE.xml`

### After Adding New Pages
Every time you publish a new page (`/locksmith-scams-florida/`, `/scholarship/`, etc.):
1. Make sure it's in your sitemap
2. "Ping" Google with the sitemap URL:
```
https://www.google.com/ping?sitemap=https://affordablelocksmithorlando.com/sitemap.xml
```
3. Ping Bing:
```
https://www.bing.com/webmaster/ping.aspx?siteMap=https://affordablelocksmithorlando.com/sitemap.xml
```

---

## ROBOTS.TXT — MAKE SURE NOTHING IS BLOCKED

Check your robots.txt:
```
https://affordablelocksmithorlando.com/robots.txt
```

It should look like this (or similar):
```
User-agent: *
Allow: /

Sitemap: https://affordablelocksmithorlando.com/sitemap.xml
```

**Red flags in robots.txt:**
- `Disallow: /` — blocks everything (major problem)
- `Disallow: /locksmith-scams-florida/` — blocks specific pages
- Missing `Sitemap:` directive

If you see any Disallow rules for important pages — fix immediately.

---

## GSC PERFORMANCE MONITORING — WHAT TO WATCH

### Weekly Check (15 minutes)
1. **Performance → Queries:** Are you ranking for "locksmith Orlando"? What position?
2. **Performance → Pages:** Which pages get the most clicks/impressions?
3. **Coverage → Errors:** Any new 404s or crawl errors?
4. **Links:** External links discovered → are your new backlinks showing up?

### Monthly Check
1. Total indexed pages — growing?
2. Core Web Vitals — any new issues?
3. Mobile Usability — all pages mobile-friendly?
4. Security Issues — any manual actions?

---

## CRAWL RATE SETTINGS (Advanced)

If your site loads slowly and you want Google to crawl more frequently:

1. GSC → Settings → Crawl Rate
2. Set to "Faster" if your server can handle it
3. This causes Googlebot to visit more frequently, discovering new content faster

---

## GOOGLE SEARCH CONSOLE QUICK REFERENCE CARD

| Task | GSC Location | Frequency |
|---|---|---|
| Submit new URL | URL Inspection → Request Indexing | Every new page |
| Check indexing status | URL Inspection | After 72 hours |
| Submit sitemap | Sitemaps | Once + after major changes |
| Check rankings | Performance → Queries | Weekly |
| Fix coverage errors | Coverage → Errors | Weekly |
| View new backlinks | Links → External Links | Monthly |
| Check Core Web Vitals | Experience | Monthly |
