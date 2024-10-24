import React, { useContext, useEffect } from 'react'
import NewsContext from '../providers/news/NewsContext'
import { fetchNews } from '../providers/news/NewsAction'
import SportsCard from '../components/SportsCard'
import ThemeContext from '../providers/theme/ThemeContext'

const Sports = () => {

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
sportNews("Indian - Sports")     
// sportNews("")     
     }, [])
    


  return (
    <div className={dark ? 'bg-secondary' : 'bg-dark'}>
      <h3 className='text-center text-dark display-2 fw-bold fs-italic'>Sports_News</h3>
    <div className="container py-3">
{ !allNews || allNews.length === 0 ? (
            <h1 className="text-center w-100 text-light display-1">Loading...</h1>
      ) : (
allNews.map((news , index ) => <SportsCard key={index} news={news} index={index} />)
)}
      {/* row end */}


    </div>
    </div>
  )
}

export default Sports
