import { FC, useEffect, useState } from "react"
import NEWS_ARTICLES, { NewsArticleProps } from "../../examples/news-api"
import axios from "axios"
import BlogPostItem from "../BlogPostItem"

const VITE_NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY

type BlogPostsProps = {}

const BlogPosts: FC<BlogPostsProps> = () => {

  const [news, setNews] = useState<Array<NewsArticleProps>>([])

  useEffect(() => {
    if (import.meta.env.MODE == 'development') {
      setNews(NEWS_ARTICLES)
    } else {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + VITE_NEWS_API_KEY)
        .then(response => setNews(response.data.articles))
    }
  }, [])

    return <div className="h-full blog-posts overflow-y-scroll grid grid-cols-4 gap-2">
        {
            news.map(newsItem => <BlogPostItem newsItem={newsItem} /> )
        }
    </div>
}

export default BlogPosts