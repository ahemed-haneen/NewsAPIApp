export type NewsArticleProps = {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

const NEWS_ARTICLES: Array<NewsArticleProps> = [
    {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "These Stocks Are Moving the Most Today",
        "description": "LIVE UPDATES\nStock Market News: Dow Set to Open Down\nS&P 500 and Nasdaq futures are also falling in premarket trading Wednesday.\nLast Updated:\nJuly 24, 2024 at 4:55 AM EDT\n9 min ago\nThese Stocks Are Moving the Most Today\nTesla stock tumbles after the electric…",
        "url": "https://biztoc.com/x/1efb64bc9b2a0c86",
        "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/07/debt-0723-ph.jpg",
        "publishedAt": "2024-07-24T09:00:58Z",
        "content": "LIVE UPDATESStock Market News: Dow Set to Open DownS&amp;P 500 and Nasdaq futures are also falling in premarket trading Wednesday.Last Updated:July 24, 2024 at 4:55 AM EDT9 min agoThese Stocks Are Mo… [+125 chars]"
    },
    {
        "source": {
            "id": "financial-post",
            "name": "Financial Post"
        },
        "author": "Pamela Heaven",
        "title": "Posthaste: Many indebted Canadians think the Bank of Canada can't save them",
        "description": "Debt has become unmanageable for half of Canadians, polls suggest",
        "url": "https://financialpost.com/news/indebted-canadians-think-bank-of-canada-cannot-save-them",
        "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/07/debt-0723-ph.jpg",
        "publishedAt": "2024-07-23T11:59:09Z",
        "content": "Debt has become unmanageable for half of Canadians, polls suggest\r\nNearly half of Canadians are $200 or less away from failing to meet their financial obligations, the MNP poll found.Photo by Getty I… [+7856 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "TSX futures flat as crude losses eclipse gold gains",
        "description": "TSX futures flat as crude losses eclipse gold gains",
        "url": "https://www.investing.com/news/economy-news/tsx-futures-flat-as-crude-losses-eclipse-gold-gains-3530807",
        "urlToImage": "https://i-invdn-com.investing.com/news/STOCK-EXCHANGE-RUSSIAN-TRADING-SYSTEMS_800x533_L_1414427815.jpg",
        "publishedAt": "2024-07-23T11:46:36Z",
        "content": "(Reuters) - Futures linked to Canada's main stock index were subdued on Tuesday as a decline in crude prices offset the gains in gold, while investors kept a tab on the Bank of Canada's monetary poli… [+1658 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PC Gamer"
        },
        "author": "Jacob Ridley",
        "title": "Tesla will roll out 'genuinely useful' humanoid robots to factory floor next year says Musk",
        "description": "Could we get one to tidy the PC Gamer office?",
        "url": "https://www.pcgamer.com/hardware/tesla-will-roll-out-genuinely-useful-humanoid-robots-to-factory-floor-next-year-says-musk/",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/9rPKUJHYaVBGSpPSsKg26B-1200-80.jpg",
        "publishedAt": "2024-07-23T11:44:15Z",
        "content": "Tesla is expected to employ a workforce of humanoid robots to carry out work at its car factories from next year. \r\nElon Musk said in an off-the-cuff remark on X that the electric car company will ha… [+2985 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Buffett's Berkshire Hathaway Reduces Stake In Tesla Rival BYD Below 5% To Shift Focus To US: Report",
        "description": "Warren Buffett’s Berkshire Hathaway Inc (NYSE:BRK) has reduced its stake in BYD Company (OTC:BYDDY), China’s largest electric vehicle maker, to below 5%, marking a continued shift in focus towards U.S. investments for the Omaha, Nebraska-based conglomerate.\nB…",
        "url": "https://biztoc.com/x/05d6fd055b4d908f",
        "urlToImage": "https://biztoc.com/cdn/05d6fd055b4d908f_s.webp",
        "publishedAt": "2024-07-23T11:42:47Z",
        "content": "Warren Buffetts Berkshire Hathaway Inc (NYSE:BRK) has reduced its stake in BYD Company (OTC:BYDDY), Chinas largest electric vehicle maker, to below 5%, marking a continued shift in focus towards U.S.… [+133 chars]"
    },
    {
        "source": {
            "id": "techradar",
            "name": "TechRadar"
        },
        "author": "dash.wood@futurenet.com (Dashiell Wood)",
        "title": "You can now drive one of the ugliest cars ever made in Fortnite thanks to latest collaboration",
        "description": "The Cybertruck has officially arrived in Fortnite.",
        "url": "https://www.techradar.com/gaming/you-can-now-drive-one-of-the-ugliest-cars-ever-made-in-fortnite-thanks-to-latest-collaboration",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/EUVK6ZZw8sMpDjrfYeNxhh-1200-80.jpg",
        "publishedAt": "2024-07-23T11:36:16Z",
        "content": "The newest Fortnitecollaboration is here and it gives you the chance to drive around the popular battle royale game in what is perhaps one of the least aesthetically pleasing vehicles ever made.\r\nThe… [+2155 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Tesla earnings on deck with margins, robotaxi unveiling in focus",
        "description": "Tesla shares nudged higher in early Tuesday trading, taking the stock to within touching distance of its highest levels in six months, as investors look to the automaker's second quarter earnings after the closing bell. \nTesla (TSLA) shares have risen more th…",
        "url": "https://biztoc.com/x/769868f210a8cdc5",
        "urlToImage": "https://biztoc.com/cdn/769868f210a8cdc5_s.webp",
        "publishedAt": "2024-07-23T11:20:46Z",
        "content": "Tesla shares nudged higher in early Tuesday trading, taking the stock to within touching distance of its highest levels in six months, as investors look to the automaker's second quarter earnings aft… [+134 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "businessinsider.com",
        "title": "Tesla shareholders are pressing Musk to release new models",
        "description": "Tesla CEO Elon Musk has teased a variety of new vehicles in recent months, including a self-driving Robotaxi and a revamped Roadster.\nApu Gomes/Getty Images\nTesla shareholders really want the company to release new vehicles.\nAn investor Q&A for Tesla's earnin…",
        "url": "https://biztoc.com/x/678de950692acacc",
        "urlToImage": "https://biztoc.com/cdn/800/og.png",
        "publishedAt": "2024-07-23T11:20:34Z",
        "content": "Tesla CEO Elon Musk has teased a variety of new vehicles in recent months, including a self-driving Robotaxi and a revamped Roadster.Apu Gomes/Getty ImagesTesla shareholders really want the company t… [+139 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investopedia"
        },
        "author": "Nisha Gopalan",
        "title": "5 Things to Know Before the Stock Market Opens",
        "description": "Google parent Alphabet's cloud growth and AI plans in focus for Q2, Tesla also reports after the bell, spot ether ETFs get approval to start trading, and UPS sinks after earnings miss. Here's what investors need to know today.",
        "url": "https://www.investopedia.com/5-things-to-know-before-the-stock-market-opens-july-23-2024-8681430",
        "urlToImage": "https://www.investopedia.com/thmb/CqBTjmiOFDW2IPtrYo2QQpYtYvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2160161096-a17a00656c0143f5b8d4a5723162464b.jpg",
        "publishedAt": "2024-07-23T11:19:28Z",
        "content": "Google parent Alphabet (GOOGL) is set to report second-quarter earnings after the bell, with the tech giant's cloud growth and artificial intelligence (AI) initiatives in focus, while Google's $23 bi… [+4018 chars]"
    },
    {
        "source": {
            "id": "techradar",
            "name": "TechRadar"
        },
        "author": "Leon Poultney",
        "title": "Rivian explains why its EVs will never embrace Apple CarPlay, but conveniently omits the real reason",
        "description": "Rivian has explained why it's closed the door on Apple CarPlay integration, but there is likely one more important reason for the move.",
        "url": "https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/rivian-explains-why-its-evs-will-never-embrace-apple-carplay-but-conveniently-omits-the-real-reason",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/sUTddSKnYa6FMCZYo8PWRf-1200-80.jpg",
        "publishedAt": "2024-07-23T11:11:59Z",
        "content": "After months of debate, Rivian CEO RJ Scaringe recently told The Verge’sDecoder podcast that the door for Apple CarPlay integration in the company's vehicles has been well and truly closed.\r\nLike Tes… [+4248 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Tom Carter",
        "title": "Tesla shareholders are pressing Musk to release new models",
        "description": "Investors are asking when Tesla plans to release new EVs in an online Q&A forum ahead of the automaker's upcoming earnings release.",
        "url": "https://www.businessinsider.com/tesla-shareholders-want-elon-musk-to-release-new-models-2024-7",
        "urlToImage": "https://i.insider.com/669f87e2fb2b6bedb0597947?width=1200&format=jpeg",
        "publishedAt": "2024-07-23T11:07:32Z",
        "content": "Tesla CEO Elon Musk has teased a variety of new vehicles in recent months, including a self-driving Robotaxi and a revamped Roadster.Apu Gomes/Getty Images\r\n<ul><li>Tesla shareholders really want the… [+2553 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "J. Arky",
        "title": "10 Luxury Cars That Are Not Worth the Investment in 2024",
        "description": "Luxury vehicles come at a cost, and that's not always the price tag attached to them. While you might be in the market for a classy ride this year, do not be...",
        "url": "https://finance.yahoo.com/news/10-luxury-cars-not-worth-110104879.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ht.p3qfCFFqGfaO0ORhbRA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/0745c9cca02eab7309f7ecf24c1f4a30",
        "publishedAt": "2024-07-23T11:01:04Z",
        "content": "Luxury vehicles come at a cost, and thats not always the price tag attached to them. While you might be in the market for a classy ride this year, do not be fooled into thinking that just because an … [+4589 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "investorplace.com",
        "title": "Elon Musk May Tank Tesla: 3 EV Stocks That Are Better Bets",
        "description": "The electric vehicle (EV) market is in its transitional period. New companies are entering the market, competition is getting fiercer every day, and the market is no longer dominated by a single powerhouse like Tesla (NASDAQ:TSLA). Specifically, Chinese EV ma…",
        "url": "https://biztoc.com/x/9b630ca9a0278fae",
        "urlToImage": "https://biztoc.com/cdn/9b630ca9a0278fae_s.webp",
        "publishedAt": "2024-07-23T10:59:44Z",
        "content": "The electric vehicle (EV) market is in its transitional period. New companies are entering the market, competition is getting fiercer every day, and the market is no longer dominated by a single powe… [+140 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "investing.com",
        "title": "US stock futures steady; Alphabet, Tesla earnings to set tone",
        "description": "Investing.com-- U.S. stock index futures steadied Tuesday ahead of key earnings from the important tech sector, which could dictate future sentiment on Wall Street.\nA large rotation back into technology stocks saw Wall Street rebound on Monday, although bench…",
        "url": "https://biztoc.com/x/5fca71fd9d18c5dc",
        "urlToImage": "https://biztoc.com/cdn/5fca71fd9d18c5dc_s.webp",
        "publishedAt": "2024-07-23T10:58:55Z",
        "content": "Investing.com-- U.S. stock index futures steadied Tuesday ahead of key earnings from the important tech sector, which could dictate future sentiment on Wall Street.A large rotation back into technolo… [+136 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Stock Market Today: Stocks mixed ahead of earnings rush; Tesla on deck",
        "description": "Check back for updates throughout the trading day\nU.S. equity futures were mixed in early Tuesday trading, while Treasury yields and the dollar held steady, as investors shifted focus from domestic political risks to corporate earnings ahead of an active slat…",
        "url": "https://biztoc.com/x/b5045f5dd23c9b87",
        "urlToImage": "https://biztoc.com/cdn/b5045f5dd23c9b87_s.webp",
        "publishedAt": "2024-07-23T10:47:43Z",
        "content": "Check back for updates throughout the trading dayU.S. equity futures were mixed in early Tuesday trading, while Treasury yields and the dollar held steady, as investors shifted focus from domestic po… [+135 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Israelnationalnews.com"
        },
        "author": "Israel National News",
        "title": "Elon Musk to replace workers with robots",
        "description": "A recent announcement indicates that Tesla will soon be replacing a portion of its human staff with robot workers.",
        "url": "https://www.israelnationalnews.com/news/393491",
        "urlToImage": "https://a7.org/files/pictures/1200x930/1151275.jpg?autocrop=1",
        "publishedAt": "2024-07-23T10:46:23Z",
        "content": "Elon Musk intends to employ robots instead of workers. In a recent tweet, he promised that humanoid robots will begin working in the company's factories and producing the new Tesla cars, and that he … [+868 chars]"
    },
    {
        "source": {
            "id": "fortune",
            "name": "Fortune"
        },
        "author": "Lionel Lim",
        "title": "Warren Buffett’s Berkshire Hathaway cuts its stake in EV giant BYD to under 5%, dropping below Hong Kong’s disclosure threshold",
        "description": "Berkshire Hathaway started trimming its stake in the Chinese EV giant in August 2022. The latest disclosure sent BYD shares down 3% on Tuesday.",
        "url": "https://fortune.com/asia/2024/07/23/warren-buffett-berkshire-hathaway-cuts-byd-stake-china-ev/",
        "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/07/GettyImages-2157258913-e1721726634683.jpg?resize=1200,600",
        "publishedAt": "2024-07-23T10:40:31Z",
        "content": "When Chinese EV giant BYD broke into the global consciousness, media reports focused on one thing in particular: its backing from Warren Buffett. Berkshire Hathaway invested about $230 million in BYD… [+1501 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Creative Bloq"
        },
        "author": "Natalie Fear",
        "title": "I can’t help but cringe at Elon Musk’s AI fashion show",
        "description": "Joe Biden, Kamala Harris and The Pope take to the catwalk.",
        "url": "https://www.creativebloq.com/ai/ai-art/elon-musk-ai",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/KSJETAvR8DodJuZFwas7yj-1200-80.jpg",
        "publishedAt": "2024-07-23T10:31:09Z",
        "content": "X overlord Elon Musk has shared a bizarre AI video featuring world leaders, tech bosses and himself (obviously) parading the catwalk. Claiming it was \"High time for an AI fashion show\", Musk's unexpe… [+1980 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Russell Flannery, Forbes Staff, \n Russell Flannery, Forbes Staff\n https://www.forbes.com/sites/russellflannery/",
        "title": "U.S. Biotech Billionaire’s Success In China Is Giving New Jersey A Boost",
        "description": "BeiGene is investing $800 million on a New Jersey manufacturing facility opening Wednesday at a former Bristol Myers Squibb site.",
        "url": "https://www.forbes.com/sites/russellflannery/2024/07/22/us-biotech-billionaires-oyler-success-in-china-is-giving-new-jersey-a-boost/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/669ef559b8bbc7c9d47b750a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-07-23T10:30:00Z",
        "content": "BeiGene's new facility in Hopewell, New Jersey.\r\nBeiGene\r\nTHE WESTERN,NEW JERSEY TOWN of Hopewell was caught off-guard in 2016 when long-time denizen Bristol-Myers Squibb said it planned to move out … [+14069 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Morning Bid: Megacaps report, Harris in frame, China wobbles",
        "description": "Morning Bid: Megacaps report, Harris in frame, China wobbles",
        "url": "https://www.investing.com/news/commodities-news/morning-bid-megacaps-report-harris-in-frame-china-wobbles-3530555",
        "urlToImage": "https://i-invdn-com.investing.com/news/indicatornews_2_800x533_L_1412601599.jpg",
        "publishedAt": "2024-07-23T10:27:37Z",
        "content": "A look at the day ahead in U.S. and global markets from Mike Dolan\r\nMonday's Wall Street bounce saw some relief precede the first two earnings reports from the \"Magnificent 7\" megacap stocks, while U… [+5280 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Major 'legal wins' set to skyrocket Coinbase stock - Citi",
        "description": "Major 'legal wins' set to skyrocket Coinbase stock - Citi",
        "url": "https://www.investing.com/news/company-news/major-legal-wins-set-to-skyrocket-coinbase-stock--citi-93CH-3530541",
        "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEH3G009-OCABS_L.jpg",
        "publishedAt": "2024-07-23T10:16:45Z",
        "content": "On Tuesday, Citi analyst upgraded Coinbase (NASDAQ:COIN) Global Inc. (NASDAQ:COIN) stock from Neutral to Buy, setting a new price target at $345, up from the previous $260. The upgrade was influenced… [+4997 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Reuters",
        "title": "Morning Bid: Megacaps report, Harris in frame, China wobbles",
        "description": "Monday's Wall Street bounce saw some relief precede the first two earnings reports from the \"Magnificent 7\" megacap stocks, while U.S. Vice President Kamala ...",
        "url": "https://finance.yahoo.com/news/morning-bid-megacaps-report-harris-101637320.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/75beca4b908db05b7731c0cf1a2cc7c9",
        "publishedAt": "2024-07-23T10:16:37Z",
        "content": "A look at the day ahead in U.S. and global markets from Mike Dolan\r\nMonday's Wall Street bounce saw some relief precede the first two earnings reports from the \"Magnificent 7\" megacap stocks, while U… [+5038 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Capital Market",
        "title": "Market ends with tiny cuts; FMCG shares rally; VIX tanks 17%",
        "description": "As per provisional closing, the barometer index, the S&P BSE Sensex, was down 73.04 points or 0.09% to 80,429.04. The Nifty 50 index shed 30.20 points or 0.12% to 24,479.05.",
        "url": "https://www.business-standard.com/markets/capital-market-news/market-ends-with-tiny-cuts-fmcg-shares-rally-vix-tanks-17-124072300954_1.html",
        "urlToImage": "https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
        "publishedAt": "2024-07-23T10:16:00Z",
        "content": "The domestic equity benchmarks ended with minor losses on Tuesday after the Budget for 2024-25 was laid down in the Parliament by the Finance Minister. The Nifty settled below the 24,500 level after … [+6711 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Windrose plans truck assembly in U.S. in rare move by Chinese EV firm",
        "description": "Chinese electric truck startup Windrose plans to set up a U.S. assembly plant for its semi-trucks for delivery there from 2025, directly challenging Tesla in its home market, founder and Chief Executive Han Wen said in an interview.",
        "url": "https://biztoc.com/x/0c607a18c72e52f8",
        "urlToImage": "https://biztoc.com/cdn/0c607a18c72e52f8_s.webp",
        "publishedAt": "2024-07-23T10:15:16Z",
        "content": "Chinese electric truck startup Windrose plans to set up a U.S. assembly plant for its semi-trucks for delivery there from 2025, directly challenging Tesla in its home market, founder and Chief Execut… [+81 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "foxbusiness.com",
        "title": "Tesla's Cybertruck making inroads on the road",
        "description": "If you think you are seeing more Tesla Cybertrucks, you're not alone. \nIn the first half of the year, the Elon Musk-run electric vehicle (EV) maker has notched 11,558 U.S. sales of its futuristic truck, including 2,803 in the first quarter and 8,755 in the se…",
        "url": "https://biztoc.com/x/e6621b0a6ce3d432",
        "urlToImage": "https://biztoc.com/cdn/e6621b0a6ce3d432_s.webp",
        "publishedAt": "2024-07-23T10:15:04Z",
        "content": "If you think you are seeing more Tesla Cybertrucks, you're not alone. In the first half of the year, the Elon Musk-run electric vehicle (EV) maker has notched 11,558 U.S. sales of its futuristic truc… [+139 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ETF Daily News"
        },
        "author": "MarketBeat News",
        "title": "Tesla (NASDAQ:TSLA) Earns Overweight Rating from Cantor Fitzgerald",
        "description": "Cantor Fitzgerald reissued their overweight rating on shares of Tesla (NASDAQ:TSLA – Free Report) in a research report report published on Monday morning, Benzinga reports. Cantor Fitzgerald currently has a $230.00 price objective on the electric vehicle prod…",
        "url": "https://www.etfdailynews.com/2024/07/23/tesla-nasdaqtsla-earns-overweight-rating-from-cantor-fitzgerald/",
        "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo.png?v=20221020135629&w=240&h=240&zc=2",
        "publishedAt": "2024-07-23T10:12:42Z",
        "content": "Cantor Fitzgerald reissued their overweight rating on shares of Tesla (NASDAQ:TSLA – Free Report) in a research report report published on Monday morning, Benzinga reports. Cantor Fitzgerald currentl… [+5962 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "AOL"
        },
        "author": "Reuters",
        "title": "Futures dip as focus moves to tech earnings",
        "description": "With investors returning to megacap growth stocks on Monday, the S&P 500 and the Nasdaq snapped a three-day losing streak and logged their biggest one-day...",
        "url": "https://www.aol.com/news/futures-dip-focus-moves-tech-101007888.html",
        "urlToImage": "https://media.zenfs.com/en/aol_reuters_29/44d79ef948bf83823603de51d27b70b8",
        "publishedAt": "2024-07-23T10:10:07Z",
        "content": "(Reuters) - U.S. stock index futures slipped on Tuesday ahead of results from some Big Tech companies expected later in the day that will be parsed to see whether the market's recent record-breaking … [+2382 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Thepinknews.com"
        },
        "author": "Emily Chudy",
        "title": "Elon Musk says his trans child Vivian was ‘killed by the woke mind virus’",
        "description": "Billionaire Elon Musk has claimed that he was ‘tricked’ into allowing his trans child, Vivian Jenna Wilson, to take puberty blockers. Speaking to right-wing commentator Jordan Peterson for the Daily Wire on Monday (22 July), Musk said his daughter Vivian, who…",
        "url": "https://www.thepinknews.com/2024/07/23/elon-musk-says-his-trans-child-vivian-was-killed-by-the-woke-mind-virus/",
        "urlToImage": "https://www.thepinknews.com/wp-content/uploads/2024/07/Elon-Musk-4.jpg",
        "publishedAt": "2024-07-23T10:06:10Z",
        "content": "Billionaire Elon Musk has claimed that he was ‘tricked’ into allowing his trans child, Vivian Jenna Wilson, to take puberty blockers. \r\nSpeaking to right-wing commentator Jordan Peterson for the Dail… [+2079 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "AOL"
        },
        "author": "Rachael Levy",
        "title": "Neuralink's value jump leaves some Musk employees itching to cash out",
        "description": "Some of the staff at Elon Musk's Neuralink are making preparations to sell the brain implant company's stock in the wake of its valuation jumping following...",
        "url": "https://www.aol.com/news/neuralinks-value-jump-leaves-musk-100341256.html",
        "urlToImage": "https://media.zenfs.com/en/aol_reuters_29/5976b8e061d5aabd89911415fd85292f",
        "publishedAt": "2024-07-23T10:03:41Z",
        "content": "By Rachael Levy\r\n(Reuters) - Some of the staff at Elon Musk's Neuralink are making preparations to sell the brain implant company's stock in the wake of its valuation jumping following its first huma… [+4743 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Rachael Levy",
        "title": "Neuralink's value jump leaves some Musk employees itching to cash out",
        "description": "Some of the staff at Elon Musk's Neuralink are making preparations to sell the brain implant company's stock in the wake of its valuation jumping following...",
        "url": "https://finance.yahoo.com/news/neuralinks-value-jump-leaves-musk-100341562.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/1dcd62b7cc342cd51b20928d2be8f2c0",
        "publishedAt": "2024-07-23T10:03:41Z",
        "content": "By Rachael Levy\r\n(Reuters) - Some of the staff at Elon Musk's Neuralink are making preparations to sell the brain implant company's stock in the wake of its valuation jumping following its first huma… [+4743 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Eurogamer.net"
        },
        "author": "Tom Phillips",
        "title": "Assassin's Creed Shadows team acknowledges elements \"that have caused concern\" among Japanese fans",
        "description": "The development team behind Assassin's Creed Shadows has apologised for elements in the game's marketing campaign so far that have jarred with some Japanese fans - and said the game will \"keep evolving\" as it heads towards launch in November. \n\nUbisoft's stat…",
        "url": "https://www.eurogamer.net/assassins-creed-shadows-team-acknowledges-elements-that-have-caused-concern-among-japanese-fans",
        "urlToImage": "https://assetsio.gnwcdn.com/ACSH_Screenshot_2_Announce_15052024_6PM_CEST.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
        "publishedAt": "2024-07-23T10:00:18Z",
        "content": "The development team behind Assassin's Creed Shadows has apologised for elements in the game's marketing campaign so far that have jarred with some Japanese fans - and said the game will \"keep evolvi… [+2696 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Esha Dey and Mia Gindis",
        "title": "Tesla Stages $386 Billion Comeback as Musk Elevates AI Over EVs",
        "description": "(Bloomberg) -- This year has been a testament to Elon Musk’s ability to lead Tesla Inc.’s shares into and out of trouble.Most Read from BloombergHarris Has...",
        "url": "https://finance.yahoo.com/news/tesla-stages-386-billion-comeback-100000872.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/LLi0fwWoHgnbafBE6t6WCQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MTM-/https://media.zenfs.com/en/bloomberg_markets_842/e1188f5f322c4380c64cb16a69c2317d",
        "publishedAt": "2024-07-23T10:00:00Z",
        "content": "(Bloomberg) -- This year has been a testament to Elon Musks ability to lead Tesla Inc.s shares into and out of trouble.\r\nMost Read from Bloomberg\r\nIts been a volatile time even by Tesla standards, wi… [+4681 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Buffett Sells Down Stake in Tesla Rival BYD. Why He’s Cooling on Electric Vehicles",
        "description": "LIVE UPDATES\nTesla Reports Earnings Today\nFollow live coverage of the EV maker's results and conference call.\nLast Updated:\nJuly 23, 2024 at 5:32 AM EDT\n8 min ago\nBuffett Sells Down Stake in Tesla Rival BYD. Why He’s Cooling on Electric Vehicles.\nWarren Buffe…",
        "url": "https://biztoc.com/x/0f277cdcb87b48bb",
        "urlToImage": "https://biztoc.com/cdn/0f277cdcb87b48bb_s.webp",
        "publishedAt": "2024-07-23T09:42:06Z",
        "content": "LIVE UPDATESTesla Reports Earnings TodayFollow live coverage of the EV maker's results and conference call.Last Updated:July 23, 2024 at 5:32 AM EDT8 min agoBuffett Sells Down Stake in Tesla Rival BY… [+121 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Eurogamer.net"
        },
        "author": "Tom Phillips",
        "title": "Fortnite's own developers don't seem thrilled at Elon Musk's Cybertruck being added to the game",
        "description": "Reaction to yesterday's reveal of the Tesla Cybertruck in Fortnite has been swift from players and Epic Games' own developers alike. \n\nIn a rare show of public disapproval, several Epic Games staff have taken to social media to give their personal takes on th…",
        "url": "https://www.eurogamer.net/fortnites-own-developers-dont-seem-thrilled-at-elon-musks-cybertruck-being-added-to-the-game",
        "urlToImage": "https://assetsio.gnwcdn.com/qg8u7zz5k5ed1.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
        "publishedAt": "2024-07-23T09:33:54Z",
        "content": "Reaction to yesterday's reveal of the Tesla Cybertruck in Fortnite has been swift from players and Epic Games' own developers alike. \r\nIn a rare show of public disapproval, several Epic Games staff h… [+1466 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CleanTechnica"
        },
        "author": "David Waterworth",
        "title": "Vehicle to Grid: Changes Down Under Ease Uptake",
        "description": "As climate change exacerbates natural disasters, it is good to see electric vehicle owners stepping into the breach to provide backup power in an emergency. We have read about EVs “keeping the lights on,” and even powering a dialysis machine, but can we use t…",
        "url": "https://cleantechnica.com/2024/07/23/vehicle-to-grid-changes-down-under-ease-uptake/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/07/bidirectional-EV-charging-V2L.jpg",
        "publishedAt": "2024-07-23T09:05:33Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAs climate change exacerbates natural disasters, it is good to see electric vehicle owners stepping into the … [+6863 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Paul Tan's Automotive News"
        },
        "author": "Anthony Lim",
        "title": "Trump vows to end EV mandate on day one if elected, “saving the US auto industry from obliteration”",
        "description": "Former US president Donald Trump has vowed to immediately reverse the current Biden administration’s electric vehicle policies and end federal support for them should he be elected as president for another term, Bloomberg reports. “I […]\nThe post Trump vows t…",
        "url": "https://paultan.org/2024/07/23/trump-vows-to-end-ev-mandate-on-day-one-if-elected-saving-the-us-auto-industry-from-obliteration/",
        "urlToImage": "https://paultan.org/image/2022/01/EV-charging-11-630x410.jpg",
        "publishedAt": "2024-07-23T09:00:33Z",
        "content": "Former US president Donald Trump has vowed to immediately reverse the current Biden administrations electric vehicle policies and end federal support for them should he be elected as president for an… [+2848 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": null,
        "title": "Inside Best Buy's push to get back to sales growth, cash in on AI craze",
        "description": "Best Buy is trying to cash in on a much-awaited replacement cycle of pandemic-era purchases and a fresh wave of innovation, especially in AI.",
        "url": "https://www.cnbc.com/2024/07/23/best-buy-unveils-plans-to-grow-sales-cash-in-on-ai.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/108007750-1721239888807-bby4.jpg?v=1721240127&w=1920&h=1080",
        "publishedAt": "2024-07-23T09:00:01Z",
        "content": "Microsoft PCs on display at a Best Buy store in Secaucus, N.J. \r\nBest Buy on Tuesday announced new plans to try to reverse a two-year sales slump and cash in on a much-awaited replacement cycle of pa… [+9137 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "General Motors is set to report earnings before the bell - CNBC",
        "description": "General Motors is set to report earnings before the bellCNBC Jeeps Could Crash the Party at GM and FordThe Wall Street Journal GM, Ford, and Tesla Report Earnings This Week. This Is the Likely Winner.Barron's GM Q2 earnings preview: Street hoping for boosted …",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174572224",
        "urlToImage": null,
        "publishedAt": "2024-07-23T08:52:40Z",
        "content": "Today's scientific question is: What in the world is electricity?\r\nAnd where does it go after it leaves the toaster?\r\n-- Dave Barry, \"What is Electricity?\""
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Securityaffairs.com"
        },
        "author": "Pierluigi Paganini",
        "title": "US Gov sanctioned key members of the Cyber Army of Russia Reborn hacktivists group",
        "description": "The US government sanctioned two Russian hacktivists for their cyberattacks targeting critical infrastructure, including breaches of water facilities. The United States sanctioned Russian hacktivists Yuliya Vladimirovna Pankratova and Denis Olegovich Degtyare…",
        "url": "https://securityaffairs.com/166065/hacktivism/us-gov-sanctioned-cyber-army-of-russia-reborn-members.html",
        "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/03/us-department-of-treasury.jpg",
        "publishedAt": "2024-07-23T08:45:36Z",
        "content": "US Gov sanctioned key members of the Cyber Army of Russia Reborn hacktivists group\r\n | EvilVideo, a Telegram Android zero-day allowed sending malicious APKs disguised as videos\r\n | SocGholish malware… [+85826 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "nypost.com",
        "title": "Elon Musk says trans child was figuratively 'killed by the woke mind virus,' vows to destroy it: 'My son is dead'",
        "description": "Elon Musk says trans child was figuratively ‘killed by the woke mind virus,’ vows to destroy it: ‘My son is dead’\nBy\nYael Halon, Fox News\nPublished July 23, 2024, 4:06 a.m. ET\nTesla and SpaceX CEO Elon Musk said he was “tricked” into giving consent for his ch…",
        "url": "https://biztoc.com/x/bdc826aad68671fb",
        "urlToImage": "https://biztoc.com/cdn/bdc826aad68671fb_s.webp",
        "publishedAt": "2024-07-23T08:36:07Z",
        "content": "Elon Musk says trans child was figuratively killed by the woke mind virus, vows to destroy it: My son is deadByYael Halon, Fox NewsPublished July 23, 2024, 4:06 a.m. ETTesla and SpaceX CEO Elon Musk … [+117 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Harris support, Tesla earnings, Wiz's deal - what's moving markets",
        "description": "Harris support, Tesla earnings, Wiz's deal - what's moving markets",
        "url": "https://www.investing.com/news/economy/harris-support-tesla-earnings-wizs-deal--whats-moving-markets-3530393",
        "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXNPEK3E08Z_L.jpg",
        "publishedAt": "2024-07-23T08:31:41Z",
        "content": "Investing.com -- Corporate earnings will be in the spotlight Tuesday, especially from tech giants Tesla and Alphabet, while Wiz has reportedly turned down a deal with Google. Vice President Kamala Ha… [+5831 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Stock Market News: Dow, S&P 500, Nasdaq Set to Open Down as Kamala Harris Heads for Nomination; CrowdStrike, Alphabet, Coca-Cola, GM, Tesla, GE, DJT, and More Movers",
        "description": "LIVE UPDATES\nStock Market News: Dow Set to Open Down\nS&P 500 and Nasdaq futures are also falling in premarket trading Tuesday.\nLast Updated:\nJuly 23, 2024 at 4:11 AM EDT\nWhat to Watch Today\nU.S. stock futures are falling Tuesday after the big-name technology …",
        "url": "https://biztoc.com/x/cc370b99d2ec59ed",
        "urlToImage": "https://biztoc.com/cdn/cc370b99d2ec59ed_s.webp",
        "publishedAt": "2024-07-23T08:13:54Z",
        "content": "LIVE UPDATESStock Market News: Dow Set to Open DownS&amp;P 500 and Nasdaq futures are also falling in premarket trading Tuesday.Last Updated:July 23, 2024 at 4:11 AM EDTWhat to Watch TodayU.S. stock … [+134 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Capital Market",
        "title": "Indices trade with deep cuts; Titan spurts 6%; VIX drops 13.5%",
        "description": "At 13:30 ST, the barometer index, the S&P BSE Sensex, was down 630.72 points or 0.80% to 79,864.96. The Nifty 50 index shed 208.40 points or 0.85% to 24,300.85.",
        "url": "https://www.business-standard.com/markets/capital-market-news/indices-trade-with-deep-cuts-titan-spurts-6-vix-drops-13-5-124072300690_1.html",
        "urlToImage": "https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
        "publishedAt": "2024-07-23T08:11:00Z",
        "content": "The domestic equity benchmarks traded with significant losses in the afternoon trade after the Budget for 2024-25 was laid down in the Parliament by the Finance Minister. The Nifty traded near the 21… [+5926 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Punch"
        },
        "author": "Agency Report",
        "title": "Stock markets mixed after US rally ahead of inflation report",
        "description": "Asian markets were mixed Tuesday as investors struggled to extend a surge on Wall Street, where the tech sector bounced back after last week’s losses, while attention turned to the upcoming release of key US inflation data. In New York, all three main indexes…",
        "url": "https://punchng.com/stock-markets-mixed-after-us-rally-ahead-of-inflation-report/",
        "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2023/12/28103256/IMG7633Asian-Markets.png",
        "publishedAt": "2024-07-23T08:07:03Z",
        "content": "Asian markets were mixed Tuesday as investors struggled to extend a surge on Wall Street, where the tech sector bounced back after last week’s losses, while attention turned to the upcoming release o… [+4295 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Fox News",
        "title": "Elon Musk says trans child was figuratively ‘killed by the woke mind virus,’ vows to destroy it: ‘My son is dead’",
        "description": "Musk said he wasn't informed that puberty blockers are 'actually just sterilization drugs' when he was 'tricked' into giving consent.",
        "url": "https://nypost.com/2024/07/23/us-news/elon-musk-says-trans-child-was-figuratively-killed-by-the-woke-mind-virus-vows-to-destroy-it-my-son-is-dead/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/07/Musk.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2024-07-23T08:06:31Z",
        "content": "Tesla and SpaceX CEO Elon Musk said he was “tricked” into giving consent for his child to go on puberty blockers, adding that he believes “the woke mind virus” figuratively killed his son.\r\nMusk made… [+3437 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Reuters",
        "title": "As Volkswagen struggles in China. Can EVs help it grow in US market?",
        "description": "By 2030, Volkswagen plans more than 30 new electric or hybrid models in China and hopes to boost sales to about 4 million, from about 3 million today, lifting its market share to 15 per cent",
        "url": "https://www.business-standard.com/world-news/as-volkswagen-struggles-in-china-can-evs-help-it-grow-in-us-market-124072300633_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/26/thumb/featurecrop/400X400/1719421512-5829.jpg",
        "publishedAt": "2024-07-23T07:58:50Z",
        "content": "By 2030, Volkswagen plans more than 30 new electric or hybrid models in China and hopes to boost sales to about 4 million, from about 3 million today, lifting its market share to 15 per cent\r\nVolkswa… [+7902 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "ELAINE KURTENBACH AP business writer",
        "title": "Stock market today: Asian shares are mixed after Wall Street breaks losing streak",
        "description": "Shares are mixed in Asia after a rally on Wall Street",
        "url": "https://abcnews.go.com/Business/wireStory/stock-market-today-asian-shares-mixed-after-wall-112186834",
        "urlToImage": "https://i.abcnewsfe.com/a/f8aee1c3-23f0-4134-bd83-29ae0e111698/wirestory_7838ada7e166df7735dba1790b971f3a_16x9.jpg?w=1600",
        "publishedAt": "2024-07-23T07:50:25Z",
        "content": "BANGKOK -- Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines. \r\nU.S. futures edged lower and oil prices were … [+4140 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "ELAINE KURTENBACH AP business writer",
        "title": "Stock market today: Asian shares are mixed after Wall Street breaks losing streak",
        "description": "Shares are mixed in Asia after a rally on Wall Street",
        "url": "https://abcnews.go.com/US/wireStory/stock-market-today-asian-shares-mixed-after-wall-112186833",
        "urlToImage": "https://i.abcnewsfe.com/a/f8aee1c3-23f0-4134-bd83-29ae0e111698/wirestory_7838ada7e166df7735dba1790b971f3a_16x9.jpg?w=1600",
        "publishedAt": "2024-07-23T07:50:23Z",
        "content": "BANGKOK -- Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines. \r\nU.S. futures edged lower and oil prices were … [+4140 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Japan Today"
        },
        "author": null,
        "title": "Asian shares are mixed after Wall Street breaks losing streak",
        "description": "Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines.  U.S. futures edged lower and oil prices were little changed. Tokyo's Nikkei 225 closed nearly unchanged, at 39,594.39…",
        "url": "https://japantoday.com/category/business/stock-market-today-asian-shares-are-mixed-after-wall-street-breaks-losing-streak",
        "urlToImage": null,
        "publishedAt": "2024-07-23T07:42:49Z",
        "content": "Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines. \r\nU.S. futures edged lower and oil prices were little chan… [+4284 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "seekingalpha.com",
        "title": "Tesla: A Significant Shift In Risk/Reward Calls For A Pre-Earnings Downgrade",
        "description": "Introduction\nIn light of its Q1 2024 report, I reiterated Tesla Inc. (NASDAQ:TSLA) as a \"Buy\" at $160 per share, citing its future growth prospects and compelling long-term risk/reward [5-year expected CAGR return of 15%+]:\nBased on fundamentals and technical…",
        "url": "https://biztoc.com/x/e785cd4b146aa064",
        "urlToImage": "https://biztoc.com/cdn/e785cd4b146aa064_s.webp",
        "publishedAt": "2024-07-23T07:41:01Z",
        "content": "IntroductionIn light of its Q1 2024 report, I reiterated Tesla Inc. (NASDAQ:TSLA) as a \"Buy\" at $160 per share, citing its future growth prospects and compelling long-term risk/reward [5-year expecte… [+138 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CleanTechnica"
        },
        "author": "US Department of Energy",
        "title": "The Pace of North American Battery Cell Production Announcements Has Accelerated Since 2021",
        "description": "Cumulative new battery production in North America announced up to January 2021 totaled 120 GWh. Following the passage of the Bipartisan Infrastructure Law (BIL) and the Inflation Reduction Act (IRA) that supports the development of a domestic supply chain fo…",
        "url": "https://cleantechnica.com/2024/07/23/the-pace-of-north-american-battery-cell-production-announcements-has-accelerated-since-2021/",
        "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/04/Energy-Storage-Battery-CleanTechnica-Watermark.png",
        "publishedAt": "2024-07-23T07:39:17Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nCumulative new battery production in North America announced up to January 2021 totaled 120 GWh. Following th… [+1704 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "HSBC downgrades CrowdStrike stock after global IT outage",
        "description": "HSBC downgrades CrowdStrike stock after global IT outage",
        "url": "https://www.investing.com/news/company-news/hsbc-downgrades-crowdstrike-stock-after-global-it-outage-93CH-3530368",
        "urlToImage": "https://i-invdn-com.investing.com/news/World_News_9_800x533_L_1420026261.jpg",
        "publishedAt": "2024-07-23T07:36:44Z",
        "content": "On Tuesday, HSBC revised its stance on CrowdStrike Holdings (NASDAQ:CRWD), downgrading the cybersecurity firm's stock from Buy to Hold. The firm's analyst also adjusted the price target to $302 from … [+4287 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Minneapolis Star Tribune"
        },
        "author": "ELAINE KURTENBACH",
        "title": "Stock market today: Asian shares are mixed after Wall Street breaks losing streak",
        "description": "Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines.",
        "url": "https://www.startribune.com/stock-market-today-asian-shares-are-mixed-after-wall-street-breaks-losing-streak/600383110/",
        "urlToImage": "https://www.startribune.com/static/img/branding/logos/strib-social-card.png?d=1721422093",
        "publishedAt": "2024-07-23T07:33:01Z",
        "content": "BANGKOK Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines.\r\nU.S. futures edged lower and oil prices were litt… [+4140 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "ELAINE KURTENBACH",
        "title": "Stock market today: Asian shares are mixed after Wall Street breaks losing streak",
        "description": "Chinese markets declined, with the Hang Seng in Hong Kong down 0.9% to 17,471.79.  China's central bank cut two key interest rates by 10 basis points on...",
        "url": "https://finance.yahoo.com/news/stock-market-today-asian-shares-073222253.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/xAvbQ_5Z5cdYUNDK.NIVSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/0c5d014ea7005b92ee86692c3d81cfca",
        "publishedAt": "2024-07-23T07:32:22Z",
        "content": "BANGKOK (AP) Shares were mixed Tuesday in Asia after U.S. stocks closed broadly higher, as Big Tech stocks took back some of their recent sharp declines.\r\nU.S. futures edged lower and oil prices were… [+4129 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Ibtimes.com.au"
        },
        "author": "AFP news",
        "title": "Markets Mixed After US Rally Ahead Of Inflation Report",
        "description": "Asian markets were mixed Tuesday as investors struggled to extend a surge on Wall Street, where the tech sector bounced back after last week's losses, while attention turned to the upcoming release of key US inflation data.",
        "url": "https://www.ibtimes.com.au/markets-mixed-after-us-rally-ahead-inflation-report-1849844",
        "urlToImage": "https://d.ibtimes.com.au/en/full/1854644/traders-are-gearing-release-key-us-inflation-data-end-week-bets-september-interest-rate.jpg",
        "publishedAt": "2024-07-23T07:27:14Z",
        "content": "Asian markets were mixed Tuesday as investors struggled to extend a surge on Wall Street, where the tech sector bounced back after last week's losses, while attention turned to the upcoming release o… [+4255 chars]"
    },
    {
        "source": {
            "id": "next-big-future",
            "name": "Next Big Future"
        },
        "author": "Brian Wang",
        "title": "Tesla FSD 12.5 Has Great Early Reviews",
        "description": "The early reviews for the Tesla FSD (Full Self driving supervised driver assist) are stellar. The reports are the at it is super smooth, great turns, great speed control and it feels dramatically improved. Whole Mars says this ain’t just some normal update so…",
        "url": "https://www.nextbigfuture.com/2024/07/tesla-fsd-12-5-has-great-early-reviews.html",
        "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/07/FSD125-1024x768.jpg",
        "publishedAt": "2024-07-23T07:21:52Z",
        "content": "The early reviews for the Tesla FSD (Full Self driving supervised driver assist) are stellar. The reports are the at it is super smooth, great turns, great speed control and it feels dramatically imp… [+4146 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Sudeep Singh Rawat",
        "title": "My son is dead, says Elon Musk, pledges to kill 'woke mind virus'",
        "description": "Musk told DW interviewer, Dr Jordan Peterson, that he was tricked into giving consent to go on 'puberty blockers' for his son Xavier, who now goes by Vivian Jenna Wilson",
        "url": "https://www.business-standard.com/world-news/my-son-is-dead-says-elon-musk-pledges-to-kill-woke-mind-virus-124072300549_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/04/thumb/fitandfill/400X400/1717493124-9564.JPG",
        "publishedAt": "2024-07-23T07:21:27Z",
        "content": "Musk told DW interviewer, Dr Jordan Peterson, that he was tricked into giving consent to go on 'puberty blockers' for his son Xavier, who now goes by Vivian Jenna Wilson\r\nElon musk.(Photo: Reuters)\r\n… [+2808 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Earnings: What Analysts Expect",
        "description": "LIVE UPDATES\nTesla Reports Earnings Today\nFollow live coverage of the EV maker's results and conference call.\nLast Updated:\nJuly 23, 2024 at 3:15 AM EDT\n4 min ago\nTesla Earnings: What Analysts Expect\nTesla reports second-quarter earnings on Tuesday after the …",
        "url": "https://biztoc.com/x/59c9e3b050d71bab",
        "urlToImage": "https://biztoc.com/cdn/59c9e3b050d71bab_s.webp",
        "publishedAt": "2024-07-23T07:19:11Z",
        "content": "LIVE UPDATESTesla Reports Earnings TodayFollow live coverage of the EV maker's results and conference call.Last Updated:July 23, 2024 at 3:15 AM EDT4 min agoTesla Earnings: What Analysts ExpectTesla … [+126 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Stock Needs More Than Solid Earnings to Keep the Rally Going",
        "description": "LIVE UPDATES\nTesla Reports Earnings Today\nFollow live coverage of the EV maker's results and conference call.\nLast Updated:\nJuly 23, 2024 at 3:15 AM EDT\nPreparing for the Report\nTesla discloses its second-quarter results on Tuesday evening after the market cl…",
        "url": "https://biztoc.com/x/daf5227cf648f158",
        "urlToImage": "https://biztoc.com/cdn/daf5227cf648f158_s.webp",
        "publishedAt": "2024-07-23T07:18:57Z",
        "content": "LIVE UPDATESTesla Reports Earnings TodayFollow live coverage of the EV maker's results and conference call.Last Updated:July 23, 2024 at 3:15 AM EDTPreparing for the ReportTesla discloses its second-… [+130 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "When Is Tesla's Earnings Call Today—and How to Tune In",
        "description": "LIVE UPDATES\nTesla Reports Earnings Today\nFollow live coverage of the EV maker's results and conference call.\nLast Updated:\nJuly 23, 2024 at 3:15 AM EDT\n4 min ago\nWhen Is Tesla's Earnings Call Today—and How to Tune In\nTesla will host a webcast to discuss its …",
        "url": "https://biztoc.com/x/e3cde1747217effc",
        "urlToImage": "https://biztoc.com/cdn/800/og.png",
        "publishedAt": "2024-07-23T07:18:48Z",
        "content": "LIVE UPDATESTesla Reports Earnings TodayFollow live coverage of the EV maker's results and conference call.Last Updated:July 23, 2024 at 3:15 AM EDT4 min agoWhen Is Tesla's Earnings Call Todayand How… [+123 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Barron's"
        },
        "author": "Al Root",
        "title": "Tesla Earnings: What Analysts Expect",
        "description": "Tesla reports second-quarter earnings after the market close today. According to FactSet, the consensus call on Wall Street is that the electric-vehicle company will turn in second-quarter earnings per share of 61 cents from sales of $24.5 billion.",
        "url": "https://www.barrons.com/livecoverage/tesla-earnings-stock-price-today",
        "urlToImage": "https://images.barrons.com/im-02831136/social",
        "publishedAt": "2024-07-23T07:14:16Z",
        "content": "Tesla reports second-quarter earnings on Tuesday after the market close.\r\nAccording to FactSet, the consensus call on Wall Street is that the electric-vehicle company will turn in earnings per share … [+1182 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "theguardian.com",
        "title": "Elon Musk says Tesla will use humanoid robots from next year; Google’s $23bn bid for Wiz rebuffed – business live",
        "description": "Musk says Tesla will use and sell humanoid robots for manufacturing, while Israeli cybersecurity firm turns down a $23bn takeover offer from Google\nGood morning, and welcome to our rolling coverage of business, the financial markets and the world economy.\nWe …",
        "url": "https://biztoc.com/x/290f35ade902be04",
        "urlToImage": "https://biztoc.com/cdn/290f35ade902be04_s.webp",
        "publishedAt": "2024-07-23T07:07:49Z",
        "content": "Musk says Tesla will use and sell humanoid robots for manufacturing, while Israeli cybersecurity firm turns down a $23bn takeover offer from GoogleGood morning, and welcome to our rolling coverage of… [+137 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Angelina Villa-Clarke, Contributor, \n Angelina Villa-Clarke, Contributor\n https://www.forbes.com/sites/angelinavillaclarke/",
        "title": "How Powerhouse Hotels Are Reinventing The All Inclusive Concept",
        "description": "\"Previously associated primarily with budget-friendly, economy vacations, today’s all-inclusive resorts offer luxury experiences, gourmet dining and personalized servi...",
        "url": "https://www.forbes.com/sites/angelinavillaclarke/2024/07/23/how-powerhouse-hotels-are-reinventing-the-all-inclusive-concept/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/669a8098b0f33987ecb3d3b2/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-07-23T07:07:32Z",
        "content": "The tag all-inclusive used to be almost a dirty word in luxury travel. Conjuring up images of all-you-can-eat buffets of indefinable food; cheap shots of alcohol and plastic wristband-wearing tourist… [+12449 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Victoria Waldersee, Joseph White",
        "title": "Analysis-Volkswagen is reeling in China. Can EVs help it grow in the US?",
        "description": "And Volkswagen's stock dropped 1.6%.  Some analysts praised the creation of a Volkswagen-Rivian joint venture to help the German giant with software.  The...",
        "url": "https://finance.yahoo.com/news/analysis-volkswagen-reeling-china-evs-070501343.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/b63b253013dd2c131ef057b2d6ca9302",
        "publishedAt": "2024-07-23T07:05:01Z",
        "content": "By Victoria Waldersee, Joseph White\r\nBERLIN (Reuters) -When Volkswagen Group last month invested $5 billion in U.S. electric truck-and-SUV maker Rivian, the startup's shares soared on the cash infusi… [+7438 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "ndtv.com",
        "title": "Elon Musk Claims Transgender Daughter Is \"Dead, Killed By Woke Mind Virus\"",
        "description": "Elon Musk referred to gender-reassignment surgery as \"child mutilation and sterilisation\"\nNew Delhi: Tesla and SpaceX chief Elon Musk, in an interview with American conservative commentator Jordan Peterson, alleged that his estranged transgender daughter, Viv…",
        "url": "https://biztoc.com/x/f82659f89e8883e2",
        "urlToImage": "https://biztoc.com/cdn/f82659f89e8883e2_s.webp",
        "publishedAt": "2024-07-23T06:57:02Z",
        "content": "Elon Musk referred to gender-reassignment surgery as \"child mutilation and sterilisation\"New Delhi: Tesla and SpaceX chief Elon Musk, in an interview with American conservative commentator Jordan Pet… [+125 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Elon Musk says Tesla will start using humanoid robots next year - BBC.com",
        "description": "Elon Musk says Tesla will start using humanoid robots next yearBBC.com Elon delays Optimus, Hyundai gets nervous, and a REAL work truckElectrek Tesla Stock Jumps Ahead of Earnings, as Musk Says Humanoid Robot Will Come in 2025Investopedia Tesla Optimus produc…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174571272",
        "urlToImage": null,
        "publishedAt": "2024-07-23T06:52:11Z",
        "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
        "source": {
            "id": null,
            "name": "Digitimes"
        },
        "author": "DIGITIMES",
        "title": "Biden bows out: Kamala Harris takes lead as AI regulations and semiconductor debates heat up",
        "description": "On July 21, US President Joe Biden officially announced his decision to withdraw from the 2024 presidential race amid growing pressure from within the Democratic Party. Biden stated that stepping down was in the best interest of the party and the nation, and …",
        "url": "https://www.digitimes.com/news/a20240722PD217/joe-biden-2024-donald-trump-2023-regulation.html",
        "urlToImage": "https://img.digitimes.com/newsshow/20240722pd217_files/1_b.jpg",
        "publishedAt": "2024-07-23T06:46:48Z",
        "content": "On July 21, US President Joe Biden officially announced his decision to withdraw from the 2024 presidential race amid growing pressure from within the Democratic Party. Biden stated that stepping dow… [+4076 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "bbc.com",
        "title": "Elon Musk says Tesla will start using humanoid robots next year",
        "description": "Musk says Tesla to use humanoid robots next year\nTesla boss Elon Musk says the electric vehicle car maker will start producing and using humanoid robots from next year.\nIn a social media post, Mr Musk said the robots will first be used by Tesla, which will st…",
        "url": "https://biztoc.com/x/884c46f13c9be537",
        "urlToImage": "https://biztoc.com/cdn/884c46f13c9be537_s.webp",
        "publishedAt": "2024-07-23T06:46:20Z",
        "content": "Musk says Tesla to use humanoid robots next yearTesla boss Elon Musk says the electric vehicle car maker will start producing and using humanoid robots from next year.In a social media post, Mr Musk … [+128 chars]"
    },
    {
        "source": {
            "id": "techradar",
            "name": "TechRadar"
        },
        "author": "Cory Hawkvelt",
        "title": "The art of AI architecture",
        "description": "Price should not be the only point of comparison when picking a cloud for AI deployments.",
        "url": "https://www.techradar.com/pro/the-art-of-ai-architecture",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/vHvVPSvboA6d3edMadr7pj-1200-80.jpg",
        "publishedAt": "2024-07-23T06:37:48Z",
        "content": "There is a common misconception that one GPU cloud is very much like another. But that is simply not the case. They are built with different technologies and architectures, and they come with their o… [+8134 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "euronews.com",
        "title": "What to expect from Tesla results? Energy storage and AI in focus",
        "description": "Tesla’s revenue for the second quarter may continue declining amid a slowdown in sales. However, the development of robotaxis and energy storage may become the focal point for its market valuation.",
        "url": "https://biztoc.com/x/8a2582c592c8832e",
        "urlToImage": "https://biztoc.com/cdn/8a2582c592c8832e_s.webp",
        "publishedAt": "2024-07-23T06:35:17Z",
        "content": "Teslas revenue for the second quarter may continue declining amid a slowdown in sales. However, the development of robotaxis and energy storage may become the focal point for its market valuation.\r\nT… [+46 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "TweakTown"
        },
        "author": "Jak Connor",
        "title": "Elon Musk believes the Optimus robot could make Tesla $20 trillion richer",
        "description": "Elon Musk told shareholders that the company plans to roll Optimus into production in 2025, and its release could add $20 trillion to Tesla's market cap. Continue reading at TweakTown >",
        "url": "https://www.tweaktown.com/news/99469/elon-musk-believes-the-optimus-robot-could-make-tesla-20-trillion-richer/index.html",
        "urlToImage": "https://static.tweaktown.com/news/9/9/99469_15656165_musk-doubles-down-on-promises-for-optimus-humanoid-robots_full.png",
        "publishedAt": "2024-07-23T06:32:03Z",
        "content": "During Tesla's annual shareholders meeting company CEO Elon Musk touched on the highly anticipated humanoid robot currently being developed at Tesla, and how much money is expected to be generated fr… [+1453 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Michael Harley, Contributor, \n Michael Harley, Contributor\n https://www.forbes.com/sites/michaelharley/",
        "title": "Do Electric Vehicles Need Special Tires? [Part 1]",
        "description": "Lacking any official DOT regulation differentiating tire requirements between combustion vehicles and EVs, the marketplace is full of misleading information.",
        "url": "https://www.forbes.com/sites/michaelharley/2024/07/23/do-electric-vehicles-need-special-tires-part-1/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/669f4731921423fe81b85447/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-07-23T06:10:08Z",
        "content": "Tire Rack wet-testing tires on a Tesla Model e EV at its dedicated facility\r\n©2024 The Tire Rack\r\nElectric Vehicles (EVs) are propelled by electric motors drawing power from a battery. They are heavi… [+6321 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Punch"
        },
        "author": "Okiki Adeduyite",
        "title": "‘My son is dead’: Elon Musk opens up about his transgender child",
        "description": "The CEO of Tesla and Space X, Elon Musk, has said he was “tricked” into granting permission for his child to undergo puberty blockers. Musk made the disclosure in a live interview with psychologist Jordan Peterson on X on Monday. During the conversation, Pete…",
        "url": "https://punchng.com/my-son-is-dead-elon-musk-opens-up-about-his-transgender-child/",
        "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2021/08/06170346/000_9HK9Y2.jpg",
        "publishedAt": "2024-07-23T06:06:40Z",
        "content": "The CEO of Tesla and Space X, Elon Musk, has said he was “tricked” into granting permission for his child to undergo puberty blockers.\r\nMusk made the disclosure in a live interview with psychologist … [+3661 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Capital Market",
        "title": "Nifty near 24,500 level; Employment, skilling, MSMEs and middle class focus of Budget 2024-25",
        "description": "The benchmark indices traded near the flat line amid the ongoing Union Budget announcements by Finance Minister. The Nifty traded near the 24,500 level. Oil & gas shares declined for the third day in a row.",
        "url": "https://www.business-standard.com/markets/capital-market-news/nifty-near-24-500-level-employment-skilling-msmes-and-middle-class-focus-of-budget-2024-25-124072300399_1.html",
        "urlToImage": "https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
        "publishedAt": "2024-07-23T06:04:00Z",
        "content": "The benchmark indices traded near the flat line amid the ongoing Union Budget announcements by Finance Minister. The Nifty traded near the 24,500 level. Oil &amp; gas shares declined for the third da… [+3781 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CounterPunch"
        },
        "author": "Sonali Kolhatkar",
        "title": "Who’s a Bigger Threat to Democracy—Immigrants, or Billionaires?",
        "description": "Billionaires have tried very hard to buy influence and political power. For example, former New York City Mayor Mike Bloomberg donated $20 milliontoward efforts to reelect Biden this year alone. Four years ago, Bloomberg spent a whopping $1 billion in just fo…",
        "url": "https://www.counterpunch.org/2024/07/23/whos-a-bigger-threat-to-democracy-immigrants-or-billionaires/",
        "urlToImage": "https://www.counterpunch.org/wp-content/uploads/2024/07/President_Trump_at_the_Kennedy_Space_Center_49945868427.jpg",
        "publishedAt": "2024-07-23T05:59:35Z",
        "content": "Photograph Source: The White House – Public Domain\r\nWhen President Joe Biden said in a phone call to MSNBCs Morning Joe recently, Im getting so frustrated with the elites the elites of the party. I d… [+7554 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Digitimes"
        },
        "author": "DIGITIMES",
        "title": "Composite materials balance high potential with high costs",
        "description": "Composite materials are gaining significant momentum across various industries, particularly in aerospace, automotive, and offshore wind energy sectors. Renowned for their high strength, lightweight properties, and corrosion resistance, these materials offer …",
        "url": "https://www.digitimes.com/news/a20240722PD209/materials-automotive-recycling-production-carbon-fiber.html",
        "urlToImage": "https://img.digitimes.com/newsshow/20240722pd209_files/2_b.jpg",
        "publishedAt": "2024-07-23T05:54:42Z",
        "content": "Composite materials are gaining significant momentum across various industries, particularly in aerospace, automotive, and offshore wind energy sectors. Renowned for their high strength, lightweight … [+3161 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Analysis-Cracks in US stock market calm boost allure of portfolio protection",
        "description": "Analysis-Cracks in US stock market calm boost allure of portfolio protection",
        "url": "https://www.investing.com/news/stock-market-news/analysiscracks-in-us-stock-market-calm-boost-allure-of-portfolio-protection-3530259",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPED0C0KP_L.jpg",
        "publishedAt": "2024-07-23T05:41:29Z",
        "content": "By Saqib Iqbal Ahmed\r\n(Reuters) - Investors are eyeing portfolio protection from a potentially rough stretch in U.S. stocks as they face political uncertainty, big tech earnings and seasonal weakness… [+4636 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Saqib Iqbal Ahmed",
        "title": "Analysis-Cracks in US stock market calm boost allure of portfolio protection",
        "description": "Investors are eyeing portfolio protection from a potentially rough stretch in U.S. stocks as they face political uncertainty, big tech earnings and seasonal ...",
        "url": "https://finance.yahoo.com/news/analysis-cracks-us-stock-market-053554324.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/fdc50fe2089e68b6550dd5e08b696ad1",
        "publishedAt": "2024-07-23T05:35:54Z",
        "content": "By Saqib Iqbal Ahmed\r\n(Reuters) - Investors are eyeing portfolio protection from a potentially rough stretch in U.S. stocks as they face political uncertainty, big tech earnings and seasonal weakness… [+4664 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "Cathie Wood's Ark Invest Snaps Up $5.3M In Beaten-Down Crowdstrike Shares, Dumps $3.7M Worth Of Tesla Stock Before Q2 Earnings",
        "description": "On Monday, Cathie Wood-led Ark Invest made significant trades involving CrowdStrike Holdings Inc (NASDAQ:CRWD) and Tesla Inc (NASDAQ:TSLA), despite the turbulent market conditions surrounding these companies.\nThe CrowdStrike Trade\nThe Ark Fintech Innovation E…",
        "url": "https://biztoc.com/x/224c0910eaf7b781",
        "urlToImage": "https://biztoc.com/cdn/224c0910eaf7b781_s.webp",
        "publishedAt": "2024-07-23T05:07:25Z",
        "content": "On Monday, Cathie Wood-led Ark Invest made significant trades involving CrowdStrike Holdings Inc (NASDAQ:CRWD) and Tesla Inc (NASDAQ:TSLA), despite the turbulent market conditions surrounding these c… [+129 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "businessinsider.com",
        "title": "A funny AI video tweeted by Elon Musk risks Xi Jinping's wrath as Tesla rakes in China revenues",
        "description": "A video posted by Elon Musk that briefly featured Xi Jinping is a risk for any CEO doing business in China.\nJEWEL SAMAD/AFP via Getty Images and Xinhua/Ding Ting via Getty Images\nElon Musk tweeted a parody video of an AI fashion show that featured him, Bill G…",
        "url": "https://biztoc.com/x/f241d36e9343795e",
        "urlToImage": "https://biztoc.com/cdn/f241d36e9343795e_s.webp",
        "publishedAt": "2024-07-23T05:07:22Z",
        "content": "A video posted by Elon Musk that briefly featured Xi Jinping is a risk for any CEO doing business in China.JEWEL SAMAD/AFP via Getty Images and Xinhua/Ding Ting via Getty ImagesElon Musk tweeted a pa… [+139 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Matthew Loh",
        "title": "A funny AI video tweeted by Elon Musk risks Xi Jinping's wrath as Tesla rakes in China revenues",
        "description": "An AI clip of Xi walking in Winnie the Pooh robes may seem lighthearted, but Beijing has shown it deems the cuddly bear comparison as a a red line.",
        "url": "https://www.businessinsider.com/elon-musk-xi-jinping-red-line-winnie-pooh-video-tweet-2024-7",
        "urlToImage": "https://i.insider.com/669f2f6a2d66759f66fd2b20?width=1200&format=jpeg",
        "publishedAt": "2024-07-23T05:01:27Z",
        "content": "A video posted by Elon Musk that briefly featured Xi Jinping is a risk for any CEO doing business in China.JEWEL SAMAD/AFP via Getty Images and Xinhua/Ding Ting via Getty Images\r\n<ul><li>Elon Musk tw… [+3670 chars]"
    },
    {
        "source": {
            "id": "fortune",
            "name": "Fortune"
        },
        "author": "Orianna Rosa Royle",
        "title": "This millennial entrepreneur lost over £74k on Alibaba Stock, before tapping into his generation’s love for avocados and influencers—now he’s a self-made multimillionaire",
        "description": "Timothy Armoo says an avocado business and lithium mine have been his best investments.",
        "url": "https://fortune.com/europe/2024/07/23/the-good-life-timothy-armoo-startups-fanbytes-samsung-deliveroo-avocado-alibaba/",
        "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/07/Timothy-Armoo-Fanbytes-The-Good-Life.jpg?resize=1200,600",
        "publishedAt": "2024-07-23T05:00:00Z",
        "content": "What would you do if you had a six-figure salary? Perhaps youd never cook another meal again or indulge in a monthly Thai massage and a Soho House membership to unwind from the stress that comes with… [+6763 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Elon delays Optimus, Hyundai gets nervous, and a REAL work truck - Electrek",
        "description": "Elon delays Optimus, Hyundai gets nervous, and a REAL work truckElectrek Elon Musk says Tesla will start using humanoid robots next yearBBC.com Tesla Stock Jumps Ahead of Earnings, as Musk Says Humanoid Robot Will Come in 2025Investopedia Tesla Optimus produc…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174570688",
        "urlToImage": null,
        "publishedAt": "2024-07-23T04:52:42Z",
        "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Morning Bid: Tesla, Alphabet earnings take centre stage",
        "description": "A look at the day ahead in European and global markets from Tom Westbrook",
        "url": "https://biztoc.com/x/4e3be96b58572dab",
        "urlToImage": "https://biztoc.com/cdn/4e3be96b58572dab_s.webp",
        "publishedAt": "2024-07-23T04:45:02Z",
        "content": "A look at the day ahead in European and global markets from Tom Westbrook\r\nThis story appeared on reuters.com, 2024-07-23."
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Morning Bid: Tesla, Alphabet earnings take centre stage",
        "description": "Morning Bid: Tesla, Alphabet earnings take centre stage",
        "url": "https://www.investing.com/news/economy-news/morning-bid-tesla-alphabet-earnings-take-centre-stage-3530225",
        "urlToImage": "https://i-invdn-com.investing.com/news/indicatornews_5_800x533_L_1412601619.jpg",
        "publishedAt": "2024-07-23T04:35:38Z",
        "content": "A look at the day ahead in European and global markets from Tom Westbrook\r\nMarkets mostly took Joe Biden's withdrawal from the U.S. presidential race in their stride, flicking the switch from politic… [+2061 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Benzinga"
        },
        "author": "Shivdeep Dhaliwal",
        "title": "Cathie Wood's Ark Invest Snaps Up $5.3M In Beaten-Down Crowdstrike Shares, Dumps $3.7M Worth Of Tesla Stock Before Q2 Earnings",
        "description": "",
        "url": "https://www.benzinga.com/startups/24/07/39897625/cathie-woods-ark-invest-snaps-up-5-3m-in-beaten-down-crowdstrike-shares-dumps-3-7m-worth-of-tesla-st",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2024/07/22/Cathie-Wood-Ark-Tesla_0.png?width=1200&height=800&fit=crop",
        "publishedAt": "2024-07-23T04:34:36Z",
        "content": "On Monday, Cathie Wood-led Ark Invest made significant trades involving CrowdStrike Holdings IncCRWD and Tesla IncTSLA, despite the turbulent market conditions surrounding these companies.\r\nThe Crowd… [+2159 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "electrek.co",
        "title": "Elon delays Optimus, Hyundai gets nervous, and a REAL work truck",
        "description": "On today’s episode of Quick Charge, the Cybertruck gets homolgated in Canada, Elon delays the Optimus robot for up to a full year, Hyundai’s feeling skittish about a possible victory for Donald Trump this November, and a Club Car shows off a real MAN’s truck …",
        "url": "https://biztoc.com/x/1e22c3d709602daf",
        "urlToImage": "https://biztoc.com/cdn/1e22c3d709602daf_s.webp",
        "publishedAt": "2024-07-23T04:34:19Z",
        "content": "On todays episode of Quick Charge, the Cybertruck gets homolgated in Canada, Elon delays the Optimus robot for up to a full year, Hyundais feeling skittish about a possible victory for Donald Trump t… [+131 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "usatoday.com",
        "title": "Musk says estranged child's gender-affirming care sparked fight against 'woke mind virus'",
        "description": "Musk says estranged child's gender-affirming care sparked fight against 'woke mind virus'\nTesla CEO Elon Musk said his estranged transgender daughter was \"killed\" by the \"woke mind virus\" after he was tricked into agreeing to gender-affirming care procedures.…",
        "url": "https://biztoc.com/x/8681b0d97222d721",
        "urlToImage": "https://biztoc.com/cdn/8681b0d97222d721_s.webp",
        "publishedAt": "2024-07-23T04:34:17Z",
        "content": "Musk says estranged child's gender-affirming care sparked fight against 'woke mind virus'Tesla CEO Elon Musk said his estranged transgender daughter was \"killed\" by the \"woke mind virus\" after he was… [+128 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "bbc.com",
        "title": "Musk says Tesla to use humanoid robots next year",
        "description": "Musk says Tesla to use humanoid robots next year\nTesla boss Elon Musk says the electric vehicle car maker will start producing and using humanoid robots from next year.\nIn a social media post, Mr Musk said the robots will first be used by Tesla, which will st…",
        "url": "https://biztoc.com/x/5a9cd2ae4eb94f21",
        "urlToImage": "https://biztoc.com/cdn/5a9cd2ae4eb94f21_s.webp",
        "publishedAt": "2024-07-23T04:34:12Z",
        "content": "Musk says Tesla to use humanoid robots next yearTesla boss Elon Musk says the electric vehicle car maker will start producing and using humanoid robots from next year.In a social media post, Mr Musk … [+128 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "GM Q2 earnings preview: Street hoping for boosted guidance on strong sales - Yahoo Finance",
        "description": "GM Q2 earnings preview: Street hoping for boosted guidance on strong salesYahoo Finance Jeeps Could Crash the Party at GM and FordThe Wall Street Journal General Motors is set to report earnings before the bellCNBC GM, Ford, and Tesla Report Earnings This Wee…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174570606",
        "urlToImage": null,
        "publishedAt": "2024-07-23T04:33:13Z",
        "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Reuters",
        "title": "Morning Bid: Tesla, Alphabet earnings take centre stage",
        "description": "Markets mostly took Joe Biden's withdrawal from the U.S. presidential race in their stride, flicking the switch from politics back to focus on earnings and...",
        "url": "https://finance.yahoo.com/news/morning-bid-tesla-alphabet-earnings-043312201.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/bcd0d3032594e5a517bf087b55d6e28e",
        "publishedAt": "2024-07-23T04:33:12Z",
        "content": "A look at the day ahead in European and global markets from Tom Westbrook\r\nMarkets mostly took Joe Biden's withdrawal from the U.S. presidential race in their stride, flicking the switch from politic… [+1979 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Winnie Hsu",
        "title": "Asian Stocks, Currencies Rise Ahead of Earnings: Markets Wrap",
        "description": "(Bloomberg) -- Stocks and currencies in Asia advanced as some calmness returned following a bout of political uncertainty, with traders turning their focus...",
        "url": "https://finance.yahoo.com/news/asian-stocks-set-wall-street-231007383.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/HI3I0olo31uR9oOsJdQX8Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MTc-/https://media.zenfs.com/en/bloomberg_markets_842/07629da9536f5dd643b70f1e5552b71c",
        "publishedAt": "2024-07-23T04:24:41Z",
        "content": "(Bloomberg) -- Stocks and currencies in Asia advanced as some calmness returned following a bout of political uncertainty, with traders turning their focus to upcoming tech earnings.\r\nMost Read from … [+5212 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Biztoc.com"
        },
        "author": "ft.com",
        "title": "Leverage Shares to launch single-stock covered call ETPs in Europe",
        "description": "The products, based on Nvidia, Tesla and GLD, provide premium income, limit capital gain, but cushion losses",
        "url": "https://biztoc.com/x/d40604f8fc34f014",
        "urlToImage": "https://biztoc.com/cdn/800/og.png",
        "publishedAt": "2024-07-23T04:23:11Z",
        "content": "The products, based on Nvidia, Tesla and GLD, provide premium income, limit capital gain, but cushion losses\r\nThis story appeared on ft.com, 2024-07-23."
    }
]

export default NEWS_ARTICLES