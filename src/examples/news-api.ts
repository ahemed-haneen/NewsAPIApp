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
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "China to raise retirement age in next five years",
        "description": "The country's retirement age is one of the world's lowest - and life expectancy is higher than the US.",
        "url": "https://www.bbc.co.uk/news/articles/cpd9v48yn8ro",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/38f6/live/04c58b60-48cf-11ef-99ed-67d4618c723e.jpg",
        "publishedAt": "2024-07-23T21:37:11.9557126Z",
        "content": "\"In line with the principle of voluntary participation with appropriate flexibility, we will advance reform to gradually raise the statutory retirement age in a prudent and orderly manner,\" the party… [+1532 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "UK must be ready for war in three years, says Army head",
        "description": "General Walker used his first speech in his role to warn of threats posed by an \"axis of upheaval\".",
        "url": "https://www.bbc.co.uk/news/articles/c035d05je2jo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/163f/live/1806bdc0-4924-11ef-b2ab-9b1e5c7f9591.png",
        "publishedAt": "2024-07-23T20:52:22.7645141Z",
        "content": "In his first speech in the role on Tuesday, Gen Walker said the UK faced danger from an \"axis of upheaval\". \r\nAmong the key threats facing the UK in the coming years, highlighted by the general in a … [+1354 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Rescuers hail 'miracle' survival of hiker lost for two weeks",
        "description": "Scott Hern, 46, was found by rescuers in the remote canyons of the Red River Gorge in Kentucky.",
        "url": "https://www.bbc.co.uk/news/articles/c880mmjpvk4o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/57aa/live/90049d10-491f-11ef-a168-7982b5cfc27f.jpg",
        "publishedAt": "2024-07-23T20:52:22.2958768Z",
        "content": "Rescuers in Kentucky are marvelling at the \"miracle\" survival of a hiker who was missing for two weeks in a remote complex of canyons in the scenic Red River Gorge.\r\nScott Hern, 46, was located alive… [+1225 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Keanu Reeves: I'm thinking about death all the time",
        "description": "The Matrix star's new novel, The Book of Elsewhere, explores the theme of mortality.",
        "url": "https://www.bbc.co.uk/news/articles/cl7y05lr475o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/052a/live/cdaf5060-48d4-11ef-b74c-bb483a802c97.png",
        "publishedAt": "2024-07-23T20:22:19.9513507Z",
        "content": "Reviews of the comic book were broadly positive when it came out, so Reeves and Miéville will be hoping to replicate that success.\r\nIn Flickering Myth, Calum Petrie awarded it seven out of 10 stars, … [+1225 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Bob Menendez to quit US Senate after bribery conviction",
        "description": "Democrat had resisted calls to quit for accepting gifts, including gold bars, to aid foreign states.",
        "url": "https://www.bbc.co.uk/news/articles/cv2gjn8le2ro",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3f2b/live/e7092800-4489-11ef-b568-1bce71e46479.jpg",
        "publishedAt": "2024-07-23T18:52:16.2647398Z",
        "content": "Bob Menendez is to resign from the US Senate after being convicted of accepting bribes including gold bars to help foreign governments.\r\nThe New Jersey Democrat had been resisting resignation calls -… [+2563 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Benjamin Netanyahu faces 'day of rage' in Washington, protesters say",
        "description": "Israeli prime minister cited as 'number one enemy' by pro-Palestinian groups as he prepares for speech to Congress.",
        "url": "https://www.bbc.co.uk/news/articles/c978m115eg8o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/98c2/live/3b5184f0-490f-11ef-97b0-fdc0c5fd577d.jpg",
        "publishedAt": "2024-07-23T18:07:20.0462366Z",
        "content": "Thousands of pro-Palestinian protesters will descend on Washington for a \"day of rage\" over the war in Gaza as Israel's prime minister Benjamin Netanyahu speaks in Congress on Wednesday, organisers h… [+2528 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "US Secret Service Director Kim Cheatle resigns from agency",
        "description": "Lawmakers on both sides of the aisle called for her  resignation after Donald Trump's attempted assassination.",
        "url": "https://www.bbc.co.uk/news/articles/c4ngj4jyryeo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ec9e/live/1982c020-4908-11ef-8b75-d7877c28e64f.jpg",
        "publishedAt": "2024-07-23T16:07:18.4052435Z",
        "content": "Both Democrats and Republicans had called for her to step down. \r\nIn the letter to staff, Ms Cheatle said she has always \"put the needs of the agency first\" and it is with a heavy heart that she made… [+2583 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Sharks off Brazil coast test positive for cocaine",
        "description": "Sharks taken from the shores near Rio de Janeiro have tested for high levels of cocaine.",
        "url": "https://www.bbc.co.uk/news/articles/cek9mr43x1xo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16e3/live/990724a0-48d9-11ef-9e1c-3b4a473456a6.jpg",
        "publishedAt": "2024-07-23T11:07:10.9987212Z",
        "content": "Sharks off the coast of Brazil have tested positive for cocaine, scientists say.\r\nMarine biologists tested 13 Brazilian sharpnose sharks taken from the shores near Rio de Janeiro and found they teste… [+1289 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Paris police investigating gang rape of Australian woman",
        "description": "The prosecutor's office says the woman sought refuge in a kebab shop near the Moulin Rouge district.",
        "url": "https://www.bbc.co.uk/news/articles/c3g6rkg75gko",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/368a/live/6b41fd30-48d7-11ef-8465-0320941b9104.png",
        "publishedAt": "2024-07-23T10:22:19.9360113Z",
        "content": "There is currently a huge police presence on the ground in Paris in order to maintain the safety of those in the city during the Olympics, which begin on Friday.\r\nOfficers have been patrolling in big… [+317 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Hungary stripped of EU meeting over Ukraine stance",
        "description": "Hungarian PM Viktor Orban sparked anger last week by accusing the EU of pursuing a \"pro-war policy\".",
        "url": "https://www.bbc.co.uk/news/articles/cgr542l753po",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/881e/live/145bc0f0-4891-11ef-aabe-918677f7d22d.jpg",
        "publishedAt": "2024-07-23T02:22:11.7179619Z",
        "content": "Every six months, under each new council presidency, the EU's foreign and defence ministers hold informal meetings to discuss the biggest global issues facing the bloc. \r\nThe next set of meetings wil… [+2165 chars]"
    }
]

export default NEWS_ARTICLES