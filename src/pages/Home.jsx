import React, { useContext, useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard';
import NewsCard from '../components/NewsCard';
import NewsContext from '../providers/news/NewsContext';
import { fetchNews } from '../providers/news/NewsAction';
import NewsSlider from '../components/NewsSlider';
import { toast } from 'react-toastify';
import ThemeContext from '../providers/theme/ThemeContext';
import WeatherDays from '../components/WeatherDays';
import { Box, Skeleton, Typography } from '@mui/material';

const Home = () => {
const {dark} = useContext(ThemeContext)
    const {allNews , dispatch} = useContext(NewsContext)

    const getNews = async (Topic) =>{
     const data = await fetchNews(Topic)
     dispatch({
        type : "GET_NEWS",
        payload : data
     })
    //  console.log(data);
    }


    
    useEffect(() =>{
    getNews("Nagpur")
    }, [])



    if(!allNews || allNews.length === 0){
        // toast.error("Kindly Search Valid News!!")
        getNews("India")
    }


  return (
    <>
    <div className={dark ? "container-fluid p-5 bg-dark" : "container-fluid p-5 bg-light"}>

<NewsSlider />

      <h1 className={dark ? "text-center display-1 w-100 mb-5 fw-bold text-light" : "text-center display-1 w-100 mb-5 fw-bold text-dark"}>Top-News</h1>
<div className="row">
    <div className="col-lg-4 col-md-12">
        <WeatherCard />
        {
          WeatherDays.length === 0 ?  (
            <WeatherDays />
          ) : (
            < Box className="border-dark border p-3">
         <Box width="100%" display="flex" justifyContent="space-between" flexDirection="column" sx={{margin : "10px"}} >
        <Box>
        <Skeleton width="100%" animation="wave" height={30} />
        <Skeleton width="95%" animation="wave" height={30} />
        </Box>
        <Box sx={{marginBottom : "20px"}}>
          <Skeleton width="70%" animation="wave" />
          <Skeleton width="70%" animation="wave" />
        </Box>
         </Box>
          </ Box>
          ) 
        }
    </div>

    <div className="col-lg-8 col-md-12">
        {!allNews || allNews.length === 0 ? (
            < Box display="flex" className="border-dark border p-3">
            
            <Skeleton variant="rectangular" animation="wave" height={300} width="30%" />

           <Box width="100%" display="flex" justifyContent="space-between" flexDirection="column" sx={{margin : "10px"}} >
          <Box>
          <Skeleton width="95%" animation="wave" height={30} />
          <Skeleton width="95%" animation="wave" height={30} />
            <Skeleton width="90%" animation="wave" height={30} />
            <Skeleton width="85%" animation="wave" height={30} />
            <Skeleton width="80%" animation="wave" height={30} />
          </Box>
          <Box sx={{marginBottom : "20px"}}>
            <Skeleton width="70%" animation="wave" />
            <Skeleton width="70%" animation="wave" />
          </Box>
           </Box>
            
            <span className='justify-content-between align-items-end d-flex flex-column'>
            <Skeleton variant="circular" animation="pulse" width={50} height={50} />
                <Skeleton width={100} animation="pulse" height={60} />
            </span>
            </ Box>
        //  <h1 className="text-center text-secondary display-3">Loading...</h1>
        ) : (
            allNews.map((news , index ) => <NewsCard key={index} news={news} index={index} />)
        )}
        
    </div>

</div>

      </div>
    </>
  )
}

export default Home
