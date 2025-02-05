import { FC } from "react"
import { NewsArticleProps } from '../../examples/news-api';
import { useNavigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";

type BlogPostItemProps = {
    newsItem: NewsArticleProps
}


const BlogPostItem: FC<BlogPostItemProps> = ({ newsItem }) => {
    const navigate = useNavigate();

    return (
        <Card
          className="max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <Button onClick={() => navigate('posts')}>ReadMore</Button>
        </Card>
      );
    }
    // <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-96">
    //     {newsItem.urlToImage && <a href="#">
    //         <img className="rounded-t-lg" src={newsItem.urlToImage} alt="" />
    //     </a>}
    //     <div className="p-5">
    //         <a href="#">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{newsItem.title}</h5>
    //         </a>
    //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{newsItem.description}</p>
    //         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:bg-gray-600"
    //             onClick={() => navigate('posts')}>
    //             Read more
    //             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    //             </svg>
    //         </a>
    //     </div>
    // </div>

export default BlogPostItem