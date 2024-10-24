import React, { useContext, useEffect } from 'react'
import NewsContext from '../providers/news/NewsContext'
import { fetchNews } from '../providers/news/NewsAction'
import BusinessCard from '../components/BusinessCard'
import ThemeContext from '../providers/theme/ThemeContext'

const Business = () => {

      const {dark} = useContext(ThemeContext)
      const {dispatch , allNews} = useContext(NewsContext)

      const sportNews = async (Topic) =>{
            const data = await fetchNews(Topic)
            console.log(data);
            dispatch({
               type : "GET_NEWS",
               payload : data
            })
           }
       
           useEffect(() =>{   
      sportNews("Business")     
           }, [])

  return (
    <div className={dark ? 'bg-secondary' : 'bg-dark'}>
    <h3 className='text-center text-dark display-2 fw-bold fs-italic'>Business_News</h3>
    <div className="container py-3 d-flex flex-wrap">

{
      !allNews || allNews.length === 0 ? (
            <h1 className="text-center w-100 text-light display-1">Loading...</h1>
      ) : (
            allNews.map((news , index) => <BusinessCard key={index} news={news} index={index} />)
      )
}
    </div>
    </div>
  )
}

export default Business
