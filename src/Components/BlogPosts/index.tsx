import { FC, useEffect, useState } from "react"
import NEWS_ARTICLES, { NewsArticleProps } from "../../examples/news-api"
import axios from "axios"
import BlogPostItem from "../BlogPostItem"
import BlogPostShowcase from '../BlojgPostShowcase/index';

const VITE_NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY

type BlogPostsProps = {}

const BlogPosts: FC<BlogPostsProps> = () => {

  const [news, setNews] = useState<Array<NewsArticleProps>>([])
  const [headlines, setHeadlines] = useState<Array<NewsArticleProps>>([])

  const [showcaseItem, setShowcaseItem ] = useState<NewsArticleProps>(NEWS_ARTICLES[0])

  useEffect(() => {
    if (import.meta.env.MODE == 'development') {
      setNews(NEWS_ARTICLES)
      setHeadlines(NEWS_ARTICLES)
    } else {
      axios.get('https://newsapi.org/v2/everything?sources=bbc-news&apiKey=' + VITE_NEWS_API_KEY)
        .then(response => setNews(response.data.articles))
      
        axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + VITE_NEWS_API_KEY)
        .then(response => setHeadlines(response.data.articles))
        setShowcaseItem(headlines[0])
    }
  }, [])

    return <div className="blog-posts overflow-y-scroll  w-full grid grid-rows-2 gap-2">
        <div className="headlines grid auto-cols-auto overflow-x-scroll grid-flow-col grid-rows-1 gap-2">
        {
          <BlogPostShowcase newsItem={showcaseItem} />
        }
        </div>
        <div className="news-feed grid auto-cols-auto overflow-x-scroll h-full w-full grid-flow-col grid-rows-1 gap-2">
        {
            news.map(newsItem => <BlogPostItem newsItem={newsItem} /> )
        }
        </div>
    </div>
}

export default BlogPosts