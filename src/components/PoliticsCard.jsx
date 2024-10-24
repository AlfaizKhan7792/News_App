import React, { useContext } from 'react'
import NewsContext from '../providers/news/NewsContext'
import { DeleteNews } from '../providers/news/NewsAction'
import ThemeContext from '../providers/theme/ThemeContext'

const PoliticsCard = ({news , index}) => {

    const {dispatch} = useContext(NewsContext)
    const {dark} = useContext(ThemeContext)

    const handleDelete = (index) =>{
          const data = DeleteNews(index)
          dispatch({
                type : "DELETE_NEWS",
                payload : index
          })
    }

  return (
    <div className='w-25'>

    <div class={dark ? "card bg-dark text-light" : "card bg-light"}>
        <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"}  class="card-img-top" alt="..." />
        <div className="card-body">
        <button type="button" class="btn-close float-end ps-3" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleDelete(index)}></button>
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <p className="card-text"><small className="text-muted">Date : {new Date(news.publishedAt).toDateString('en-In')} </small>
              </p>
              <p className="card-text"><small className="text-muted">Author : </small>{news.author}
              <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
              </p>
            </div>
      </div>
    
    
        </div>
  )
}

export default PoliticsCard
