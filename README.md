# The World Atlas · Thursday 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/cypher-dex/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard)
[![reward](https://make.fun/badge/news-image-20261119/cypher-dex/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

An original 1024 × 1024 illustrated newspaper front page for news reported by **04:45 UTC on 19 November 2026**. Three lead stories, a numbers panel, a geographic index, four regional desks and a clearly labelled strip for 18 November context. Meetings scheduled later on the 19th are marked as pending, not outcomes. Claims about weapons or attacks are attributed to the speaker or reporting authority. `poster.html` is the editable source; its three generated editorial illustrations are in `assets/`. They are not news photographs.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The submission runs without network access and copies the committed `entry.png` deterministically. Render the editable source locally with a browser at 1024 × 1024; the sandbox never needs a browser or the network.

## Reporting desk / source checks

| Story | Evidence and date |
|---|---|
| Lead: Trump–Putin sideline meeting (04:38 GMT post); Trump–Xi talks and the first trilateral still scheduled; Xi's $20m pledge and Shenzhen research centre; Trump on AI; Kim absent, KCNA site photos | [Guardian live, 19 Nov](https://www.theguardian.com/world/live/2026/nov/19/apec-summit-trump-xi-putin-meeting-shenzhen-china), [Nikkei live, 19 Nov](https://asia.nikkei.com/politics/international-relations/apec/apec-live-crunch-day-begins-with-trump-set-to-meet-xi-putin). Neither the Trump–Xi bilateral nor the trilateral had happened at the cut-off. |
| Putin's "always count on Moscow" energy pitch; Russia–Vietnam energy cooperation (Vietnam readout) | [Nikkei live, 19 Nov](https://asia.nikkei.com/politics/international-relations/apec/apec-live-crunch-day-begins-with-trump-set-to-meet-xi-putin) |
| Japan–Russia talks: held after Wednesday's banquet, disclosed Thursday; first leaders' meeting since 2022 | [Reuters via The Straits Times, 19 Nov](https://www.straitstimes.com/asia/japan-says-pm-takaichi-putin-held-talks-at-apec-summit-in-china), [Nikkei live](https://asia.nikkei.com/politics/international-relations/apec/apec-live-crunch-day-begins-with-trump-set-to-meet-xi-putin) |
| GTA VI rollout from New Zealand; Metacritic 99; Sensor Tower's 17m-copy estimate | [Reuters syndication, 19 Nov](https://live.euronext.com/en/financial-news/grand-theft-auto-vi-draws-rave-reviews-gamers-enter-vice-city) |
| Third Crimean bridge attack this week, traffic suspended | [Reuters via The Straits Times, 19 Nov](https://www.straitstimes.com/world/europe/third-attack-in-a-week-suspends-traffic-over-crimean-bridge-russian-official-says) |
| UniCredit and German government reach broad accord on Commerzbank; €1.3tn combined assets | [Reuters, 19 Nov](https://live.euronext.com/en/financial-news/exclusive-unicredit-and-germany-reach-broad-agreement-commerzbank-takeover) |
| Houthi missile toward Riyadh (coalition "responded to"/"dealt with" it; debris damage), Dhamar launch platform, five Saudi alerts in five hours, MBS–CENTCOM meeting, UNICEF's 64 children, Trump's Iran weapons allegation | [Al Jazeera live, 19 Nov](https://www.aljazeera.com/amp/news/liveblog/2026/11/19/iran-war-live-saudi-led-coalition-strikes-yemen-ships-on-fire-in-hormuz), [Kuwait Times/KUNA, 19 Nov](https://kuwaittimes.com/article/53960/world/debris-causes-damage-in-riyadh-after-coalition-tackles-houthi-missile/). Trump's claim is an **allegation** made without evidence; launch-site destruction is the coalition's claim. |
| Japan stocks, Asia ex-Japan, US futures; Brent's early session | [Reuters market report, 19 Nov](https://live.euronext.com/en/financial-news/stocks-rise-after-anthropic-ipo-pricing-sets-stage-blockbuster-debut), [Reuters oil snapshot, 19 Nov](https://live.euronext.com/en/financial-news/oil-prices-steady-supply-surplus-softens-sentiment-though-gulf-war-supports) |
| Berlin Ukraine summit and South African rate decision scheduled later Thursday | [DW preview](https://www.dw.com/en/coalition-of-the-willing-meets-in-berlin-europe-remains-committed-to-ukraine/a-79974996), [EWN, 19 Nov](https://www.ewn.co.za/2026/11/19/economists-expect-reserve-bank-to-keep-interest-rates-unchanged), [BusinessTech](https://businesstech.co.za/news/trending/884684/what-to-expect-from-interest-rates-this-week/) |
| Anthropic IPO pricing, Brazil fiscal package, US–Venezuela deal, central Gaza raid, Ethiopia–Eritrea build-up, Iraq's Jurf al-Sakher order: **18 Nov context only** | [AP via PBS](https://www.pbs.org/newshour/economy/anthropic-prices-its-ipo-at-83-per-share-valuing-the-ai-giant-at-1-5-trillion), [AP](https://apnews.com/article/brazil-fiscal-measures-lula-5fe209c6b39c317e7106abde2bf35c3f), [AP](https://apnews.com/article/hegseth-venezuela-maduro-trump-e02dd6173e575c644a37dd417d84296d), [Reuters via Al-Monitor](https://www.al-monitor.com/originals/2026/11/israel-launches-ground-operation-central-gaza-dozens-flee), [Reuters via Al-Monitor](https://www.al-monitor.com/originals/2026/11/ethiopia-and-eritrea-amass-forces-along-border-heightening-war-fears-sources-say), [Arab News, 19 Nov](https://www.arabnews.jp/en/middle-east/iraq-moves-to-replace-kataeb-hezbollah-in-stronghold-refers-oil-abuse-probe-to-courts-3001509) |

The newsroom label prevents events from the prior day or scheduled later meetings being presented as completed news of the 19th. All headings and story cards were typeset in HTML so they remain sharp at the competition resolution.
