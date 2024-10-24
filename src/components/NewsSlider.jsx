import React, { useContext } from 'react'
import NewsContext from '../providers/news/NewsContext'

const NewsSlider = () => {

    const {allNews} = useContext(NewsContext)

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

      {allNews.map((news , index) => {
        return(
            <div className={index === 0 ? "carousel-item active" : "carousel-item"} data-bs-interval="10000">
        <img src={news.urlToImage || "https://tse3.mm.bing.net/th?id=OIP.iWjQjzvfMxI-OQjblIta_QHaHa&pid=Api&P=0&h=180"} className="d-block w-100" alt="..." id='sliderImage' />
      </div>
        )
      })}

        {/* <div className="carousel-item active">
          <img src="..." className="d-block w-100" alt="..." />
        </div> */}

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
    )
}

export default NewsSlider
