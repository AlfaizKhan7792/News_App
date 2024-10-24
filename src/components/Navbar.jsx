import React, { useContext, useState } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'
import NewsContext from '../providers/news/NewsContext'
import { fetchNews } from '../providers/news/NewsAction'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const {dark} = useContext(ThemeContext)
  const {dispatch} = useContext(NewsContext)

  const [Topic , setTopic] = useState("")

  const getNews = async (Topic) =>{
      try {
       const data = await fetchNews(Topic)
      //  console.log(data);
    if (data.error) {
     toast.error("Enter a Valid Name")   
    }
    else{
        dispatch({
            type : "GET_NEWS",
            payload : data
        })
    }
   } catch (error) {
    toast.error("Some Thing Went Wrong!!")
   }
    // console.log(data);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    getNews(Topic)
    setTopic("")
  }

    return (
     
      <nav className={dark ? "navbar navbar-expand-lg navbar-light bg-left" : "navbar navbar-expand-lg navbar-light bg-right"}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" onClick={() => getNews("India")}>News</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={dark ? "nav-link active text-light" : "nav-link active"} aria-current="page" to="/Sports" /* onClick={() => getNews("India - Sports")} */  >Sports</Link>
          </li>
          <li className="nav-item">
            <Link className={dark ? "nav-link text-light" : "nav-link "} aria-current="page" to="/Bollywood" /* onClick={() => getNews("Bollywood")} */ >Intertainment</Link>
          </li>
          <li className="nav-item">
            <Link className={dark ? "nav-link text-light" : "nav-link "} aria-current="page" to="/Business" /* onClick={() => getNews("Business")} */ >Business</Link>
          </li>
          <li className="nav-item">
            <Link className={dark ? "nav-link text-light" : "nav-link "} aria-current="page" to="/Politics" /* onClick={() => getNews("India - Politics")} */ >Politics</Link>
          </li>
          <li className="nav-item">
            <Link className={dark ? "nav-link text-light" : "nav-link "} aria-current="page" to="/State" /* onClick={() => getNews("India - State")} */ >State</Link>
          </li>
          <li className="nav-item">
            <Link className={dark ? "nav-link text-light" : "nav-link "} aria-current="page" to="/International" /* onClick={() => getNews("International")} */ >International</Link>
          </li>
         
        </ul>
        <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
          <TextField
        id="input-with-icon-textfield"
        label="Search_News"
        sx={{marginInline : "10px"}}
        onChange={(e) => setTopic(e.target.value)} value={Topic} 
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
          <button className={dark ? "btn btn-dark" : "btn btn-outline-dark"} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
    )
  }

export default Navbar
