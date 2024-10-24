import React, { useContext } from 'react'
import NewsContext from '../providers/news/NewsContext'
import { DeleteNews } from '../providers/news/NewsAction'
import ThemeContext from '../providers/theme/ThemeContext'

const NewsCard = ({news , index}) => {
    const {dark} = useContext(ThemeContext)
    const {dispatch} = useContext(NewsContext)

    const handleDelete = (index) =>{
        const data = DeleteNews(index)
        dispatch({
            type : "DELETE_NEWS",
            payload : index
        })
        // console.log(data);
    }

    // news.title === error ? "" : news

  return (
    <div className={dark ? "card mb-3 bg-left" : "card mb-3 bg-right"}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <button type="button" className="btn-close float-end ps-3" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleDelete(index)}></button>
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">Date : {new Date(news.publishedAt).toDateString('en-IN')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : {news.author}</small>
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsCard
