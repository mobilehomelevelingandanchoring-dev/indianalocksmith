# RSS FEED SUBMISSION — FORCE INDEXING OF WEB 2.0 BACKLINKS
## Purpose: RSS aggregators crawl blog/Web 2.0 platforms constantly — submitting your feed URL forces bot visits
## Works Best For: Medium, WordPress.com, Blogger, HubPages, Tumblr backlinks

---

## HOW RSS INDEXING WORKS

When you publish content on Web 2.0 platforms, those posts have RSS feeds. Submitting those feeds to RSS aggregators causes:
1. The aggregator fetches your feed (HTTP request to the Web 2.0 URL)
2. The aggregator stores and re-publishes your content with your link
3. Google crawls the aggregator → follows the link → crawls your Web 2.0 page
4. Your Web 2.0 page (and the backlink on it) is now indexed

**This creates a chain of links pointing to your Web 2.0 pages**, accelerating their indexing dramatically.

---

## YOUR WEB 2.0 RSS FEED URLS

Find and record your RSS feed URL for each platform:

| Platform | Your Profile/Blog URL | RSS Feed URL Format |
|---|---|---|
| Medium | medium.com/@yourusername | `medium.com/feed/@yourusername` |
| WordPress.com | yoursite.wordpress.com | `yoursite.wordpress.com/feed/` |
| Blogger | yourblog.blogspot.com | `yourblog.blogspot.com/feeds/posts/default` |
| Tumblr | yourblog.tumblr.com | `yourblog.tumblr.com/rss` |
| HubPages | hubpages.com/@yourprofile | `hubpages.com/@yourprofile/hub/rss.xml` |

**Record your actual feed URLs here:**
```
Medium RSS:     [ADD YOUR MEDIUM RSS URL]
WordPress RSS:  [ADD YOUR WORDPRESS RSS URL]
Blogger RSS:    [ADD YOUR BLOGGER RSS URL]
Tumblr RSS:     [ADD YOUR TUMBLR RSS URL]
HubPages RSS:   [ADD YOUR HUBPAGES RSS URL]
```

---

## RSS AGGREGATOR SUBMISSION SITES

Submit each RSS feed URL to all of these:

| # | Site | URL | DA | Notes |
|---|---|---|---|---|
| 1 | **Feedly** | feedly.com | 91 | Largest RSS aggregator |
| 2 | **Inoreader** | inoreader.com | 77 | Very active, crawled frequently |
| 3 | **Feedspot** | feedspot.com | 68 | Lists top blogs by niche |
| 4 | **AllTop** | alltop.com | 70 | Curated topic feeds |
| 5 | **Blogarama** | blogarama.com | 60 | Blog directory with RSS |
| 6 | **Blog Catalog** | blogcatalog.com | 58 | RSS submission + directory |
| 7 | **BlogFlux** | blogflux.com | 52 | RSS + blog directory |
| 8 | **Feed Informer** | feed.informer.com | 54 | RSS aggregation |
| 9 | **RSS.app** | rss.app | 60 | RSS tool + submission |
| 10 | **Feedburner** (Google) | feedburner.com | 86 | Still crawled by Google |
| 11 | **Feedblitz** | feedblitz.com | 55 | Email + RSS |
| 12 | **NewsBlur** | newsblur.com | 72 | RSS reader + crawled |
| 13 | **The Old Reader** | theoldreader.com | 64 | Google Reader alternative |
| 14 | **Bloglines** | bloglines.com | 67 | Classic RSS reader |
| 15 | **NetVibes** | netvibes.com | 79 | RSS dashboard |
| 16 | **Feed43** | feed43.com | 55 | RSS tools |
| 17 | **CommaFeed** | commafeed.com | 56 | RSS reader |
| 18 | **Selfoss** | selfoss.aditu.de | 48 | Open source RSS |
| 19 | **Tiny Tiny RSS** | tt-rss.org | 51 | Self-hosted RSS |
| 20 | **Feedreader** | feedreader.com | 55 | RSS reader + crawled |

---

## HOW TO SUBMIT RSS FEEDS

### Feedly (Most Important)
1. Go to feedly.com → Sign in (or create free account)
2. Click "+" → Add Content → paste your RSS feed URL
3. Follow your own feed — Feedly now regularly fetches it

### Feedspot
1. Go to feedspot.com
2. "Submit Your Blog" → enter your RSS feed URL
3. Choose category: "Home & Garden" or "Security" or "Florida Local"
4. This gets your blog listed in their directory (additional citation)

### AllTop
1. Go to alltop.com/suggest
2. Submit your RSS feed URL
3. Suggest the category: home security / locksmith / Florida

### Blogarama
1. Go to blogarama.com/add-blog
2. Enter your blog/Web 2.0 URL + RSS feed URL
3. Select category

---

## FEEDBURNER SETUP (Google Owns It — Maximum Indexing Signal)

Feedburner is owned by Google. A Feedburner-managed RSS feed gets crawled by Googlebot very aggressively.

1. Go to feedburner.google.com
2. Enter your RSS feed URL
3. Create a Feedburner feed
4. Your Feedburner URL: `feeds.feedburner.com/your-feed-name`
5. Add this Feedburner URL to your Web 2.0 profile bio
6. Submit the Feedburner URL to all RSS aggregators above

---

## PING YOUR RSS FEEDS (Force Feed Refresh)

After publishing any new Web 2.0 post, ping your RSS feeds:

```
# Ping these URLs to notify feed readers of new content
# Replace YOUR_FEED_URL with your actual RSS URL (URL-encoded)

https://pingomatic.com/ping/?title=Affordable+Locksmith+Orlando&blogurl=YOUR_BLOG_URL&rssurl=YOUR_FEED_URL&chk_feedburner=on&chk_syndic8=on&chk_newsgator=on&chk_myyahoo=on&chk_pubsubcom=on

http://ping.feedburner.com/?url=YOUR_FEED_URL

http://www.feedmyinbox.com/ping/?feed=YOUR_FEED_URL

https://www.twingly.com/ping?url=YOUR_BLOG_URL
```

---

## CONTENT SYNDICATION PLATFORMS (RSS-Based)

Beyond RSS readers, these platforms syndicate your Web 2.0 content and create additional indexed pages pointing back:

| Platform | URL | DA | How to Use |
|---|---|---|---|
| **Medium Partner** | medium.com | 95 | Publish original + distribute |
| **Business2Community** | business2community.com | 82 | Submit articles for syndication |
| **Alltop** | alltop.com | 70 | RSS feed submission |
| **Synnd** | synnd.com | 48 | Content syndication |
| **ContentMX** | contentmx.com | 52 | Syndicate to social |
| **Zemanta** | zemanta.com | 62 | Content distribution |
| **BlogEngage** | blogengage.com | 50 | Blog syndication community |
| **Blokube** | blokube.com | 46 | Blog content sharing |
| **Blog Interlink** | bloginterlink.com | 44 | Blog community RSS |
| **Growth Hackers** | growthhackers.com | 76 | Share content for upvotes |

---

## COMPLETE RSS INDEXING WORKFLOW

```
NEW WEB 2.0 POST PUBLISHED →

1. Ping RSS feed:
   → pingomatic.com (covers 20+ services)
   → ping.feedburner.com (direct Google ping)
   → twingly.com/ping

2. Submit/refresh in:
   → Feedly (re-fetch trigger)
   → Inoreader (re-fetch trigger)
   → Feedspot (if not already listed)

3. Share the post URL on:
   → Twitter/X (Googlebot follows within hours)
   → LinkedIn
   → Facebook groups

4. Add post URL to:
   → Flipboard magazine
   → Mix bookmark
   → Diigo bookmark

5. After 48 hours — check indexing:
   → Google: site:https://your-web2-post-url
   → If not indexed: submit post URL directly to Pingler
```

Total time per post: **10–15 minutes.**
Expected indexing time: **24–72 hours** for 95%+ of Web 2.0 backlinks.
