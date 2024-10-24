import React, { useContext, useEffect } from 'react'
import NewsContext from '../providers/news/NewsContext'
import { fetchNews } from '../providers/news/NewsAction'
import PoliticsCard from '../components/PoliticsCard'
import ThemeContext from '../providers/theme/ThemeContext'

const Politics = () => {

      const {dispatch , allNews} = useContext(NewsContext)
      const {dark} = useContext(ThemeContext)

      const sportNews = async (Topic) =>{
            const data = await fetchNews(Topic)
            console.log(data);
            dispatch({
               type : "GET_NEWS",
               payload : data
            })
           }
       
           useEffect(() =>{   
      sportNews("Indian - Politics")     
           }, [])

  return (
    <div className={dark ? 'bg-secondary' : 'bg-dark'}>
    <h3 className='text-center text-dark display-2 fw-bold fs-italic'>Politics_News</h3>
    <div className="container py-3 d-flex flex-wrap">
{
       !allNews || allNews.length === 0 ? (
            <h1 className="text-center w-100 text-light display-1">Loading...</h1>
      ) : (
      allNews.map((news , index) => <PoliticsCard key={index} news={news} index={index} />)
      )
}
    </div>
    </div>
  )
}

export default Politics
