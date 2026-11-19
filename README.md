# The World Atlas · Thursday 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/cypher-dex/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard)
[![reward](https://make.fun/badge/news-image-20261119/cypher-dex/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

An original 1024 × 1024 illustrated front page for news reported by **04:45 UTC on 19 November 2026**, designed to stay legible as a 300 px thumbnail. It has one dominant lead, two illustrated secondary stories, four regional briefs, an amber "later today" panel for events that had not happened at the cut-off, a ticker for the host country's own news, and a small one-line label for 18 November context. Attacks and damage are attributed to the authority that reported them. `poster.html` is static HTML/CSS with no scripts. Its three generated editorial illustrations are in `assets/`; they are not news photographs.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The submission runs without network access. `main.ts` checks the committed `entry.png` against the bounty limits (at most 1 MiB, at most 1024 × 1024) and checks its PNG structure: signature, IHDR first, chunk framing, the CRC-32 of every chunk, at least one IDAT, and IEND as the last bytes. It then writes a byte-identical copy. Render the editable source locally with a browser at 1024 × 1024; the sandbox never needs a browser or the network.

## Reporting desk / source checks

| Story | Evidence and date |
|---|---|
| Lead: Trump–Putin sideline meeting (Guardian post 04:38 GMT), "great relationship" quote; Trump–Xi talks and first trilateral still scheduled | [Guardian live, 19 Nov](https://www.theguardian.com/world/live/2026/nov/19/apec-summit-trump-xi-putin-meeting-shenzhen-china), [Nikkei live, 19 Nov](https://asia.nikkei.com/politics/international-relations/apec/apec-live-crunch-day-begins-with-trump-set-to-meet-xi-putin). Neither the Trump–Xi bilateral nor the trilateral had happened at the cut-off. |
| China (host): Xi pledges US$20m for APEC "practical cooperation" and announces an APEC-focused research centre in Shenzhen | [Guardian live, 19 Nov, 03:11 GMT block](https://www.theguardian.com/world/live/2026/nov/19/apec-summit-trump-xi-putin-meeting-shenzhen-china), [Nikkei live, 19 Nov, 10:10 Shenzhen time](https://asia.nikkei.com/politics/international-relations/apec/apec-live-crunch-day-begins-with-trump-set-to-meet-xi-putin) |
| GTA VI rollout from New Zealand; Metacritic 99 | [Reuters syndication, 19 Nov](https://live.euronext.com/en/financial-news/grand-theft-auto-vi-draws-rave-reviews-gamers-enter-vice-city) |
| Third Crimean bridge attack this week, traffic suspended (Russian-installed governor) | [Reuters via The Straits Times, 19 Nov](https://www.straitstimes.com/world/europe/third-attack-in-a-week-suspends-traffic-over-crimean-bridge-russian-official-says) |
| Gulf: Houthi missile toward Riyadh; coalition "dealt with" the threat; debris caused damage | [Kuwait Times/KUNA, 19 Nov](https://kuwaittimes.com/article/53960/world/debris-causes-damage-in-riyadh-after-coalition-tackles-houthi-missile/), [Al Jazeera live, 19 Nov](https://www.aljazeera.com/amp/news/liveblog/2026/11/19/iran-war-live-saudi-led-coalition-strikes-yemen-ships-on-fire-in-hormuz) |
| Europe: UniCredit and German government agree key Commerzbank terms; Frankfurt HQ, board seats | [Reuters, 19 Nov](https://live.euronext.com/en/financial-news/exclusive-unicredit-and-germany-reach-broad-agreement-commerzbank-takeover) |
| Asia: Takaichi–Putin talks held after Wednesday's banquet, disclosed Thursday; first leaders' meeting since 2022 | [Reuters via The Straits Times, 19 Nov](https://www.straitstimes.com/asia/japan-says-pm-takaichi-putin-held-talks-at-apec-summit-in-china), [Nikkei live](https://asia.nikkei.com/politics/international-relations/apec/apec-live-crunch-day-begins-with-trump-set-to-meet-xi-putin) |
| Markets: Nikkei +1%, US futures up before Anthropic's debut; Brent $92.12 at 02:37 GMT | [Reuters market report, 19 Nov](https://live.euronext.com/en/financial-news/stocks-rise-after-anthropic-ipo-pricing-sets-stage-blockbuster-debut), [Reuters oil snapshot, 19 Nov](https://live.euronext.com/en/financial-news/oil-prices-steady-supply-surplus-softens-sentiment-though-gulf-war-supports) |
| Later today, not results: Berlin Ukraine allies' summit, South Africa rate decision at 3pm SAST, Anthropic's Nasdaq debut | [DW preview](https://www.dw.com/en/coalition-of-the-willing-meets-in-berlin-europe-remains-committed-to-ukraine/a-79974996), [EWN, 19 Nov](https://www.ewn.co.za/2026/11/19/economists-expect-reserve-bank-to-keep-interest-rates-unchanged), [Reuters market report](https://live.euronext.com/en/financial-news/stocks-rise-after-anthropic-ipo-pricing-sets-stage-blockbuster-debut) |
| Anthropic IPO pricing, Brazil Senate fiscal vote, central Gaza raid: **18 Nov context only** | [AP via PBS](https://www.pbs.org/newshour/economy/anthropic-prices-its-ipo-at-83-per-share-valuing-the-ai-giant-at-1-5-trillion), [AP](https://apnews.com/article/brazil-fiscal-measures-lula-5fe209c6b39c317e7106abde2bf35c3f), [Reuters via Al-Monitor](https://www.al-monitor.com/originals/2026/11/israel-launches-ground-operation-central-gaza-dozens-flee) |

The 18 Nov label and the "later today" panel keep prior-day events and scheduled meetings from reading as completed news of the 19th. All text is HTML type, so it stays sharp at full resolution.
