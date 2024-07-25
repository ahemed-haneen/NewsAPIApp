import { FC } from "react"
import { NewsArticleProps } from '../../examples/news-api';
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";

type BlogPostShowcaseProps = {
    newsItems: NewsArticleProps[]
}


const BlogPostShowcase: FC<BlogPostShowcaseProps> = ({ newsItems }) => {
    const navigate = useNavigate();

    // return <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <div className="p-5 h-full object-cover relative">
    //         <img src={newsItem.urlToImage as string} style={{ width: '100%', height: '100%' }} />
    //         <div className="absolute bottom-14 bg-slate-500/75 p-4">
    //             <a href="#">
    //                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{newsItem.title}</h5>
    //             </a>
    //             <p className="mb-3 font-normal text-gray-700 text-gray-100">{newsItem.description}</p>
    //             <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:bg-gray-600"
    //                 onClick={() => navigate('posts')}>
    //                 Read more
    //                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    //                 </svg>
    //             </a>
    //         </div>
    //     </div>
    // </div>

    return (
        <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {newsItems.map(newsItem => <img src={newsItem.urlToImage as string} alt="..." />) }
          </Carousel>
        </div>
      );
}

export default BlogPostShowcase