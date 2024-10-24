import React, { useContext } from 'react'
import ThemeContext from '../providers/theme/ThemeContext'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

const ThemeButton = () => {
const {dark , dispatch} = useContext(ThemeContext)

const handleTheme = () =>{
  if (dark) {
    localStorage.setItem("dark", JSON.stringify(false));
  } else {
    localStorage.setItem("dark", JSON.stringify(true));
  }
    dispatch({
        type : "CHANGE_THEME"
    })
}

  return (
    <button id='btnTheme' className={dark ? 'btn bg-left' : 'btn  bg-right'} onClick={handleTheme}>
      {dark ? <FaRegSun /> : <FaRegMoon />}
    </button>
  )
}

export default ThemeButton
