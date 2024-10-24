import React from 'react'
// import NewsContext from '../providers/news/NewsContext'
// import { DeleteNews } from '../providers/news/NewsAction'

const SportsCard = ({news , index}) => {

      // const {dispatch} = useContext(NewsContext)

      // const handleDelete = (index) =>{
      //       const data = DeleteNews(index)
      //       dispatch({
      //             type : "DELETE_NEWS",
      //             payload : index
      //       })
      // }

  return (
    <div>
      <div className="row bg-dark g-2 pb-5">
        <div className="col-lg-8 col-md-12">
        <div class="card bg-dark text-white">
  <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img" alt="..." />
   <div className="card-body">
        {/* <button type="button" class="btn-close float-end ps-3" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleDelete(index)}></button> */}
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
</div>
        </div>
        {/* col-8 end */}

        <div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
        {/* <button type="button" class="btn-close float-end ps-3" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleDelete(index)}></button> */}
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
        {/* col-4 end */}

        <div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
{/* col-4 end */}

<div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
{/* col-4 end */}

<div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
{/* col-4 end */}

<div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
{/* col-4 end */}

<div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
{/* col-4 end */}

<div className="col-lg-4 col-md-6">
        <div class="card">
    <img src={news.urlToImage || "https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600"} class="card-img-top" alt="..." />
    <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-muted">{new Date(news.publishedAt).toDateString('en-In')} </small>
          </p>
          <p className="card-text"><small className="text-muted">Author : </small>{news.author}
          <a target='_blank' href={news.url} className="btn btn-sm btn-outline-primary float-end my-3" >View Full News</a>
          </p>
        </div>
  </div>
        </div>
{/* col-4 end */}

      </div>
    </div>
  )
}

export default SportsCard
