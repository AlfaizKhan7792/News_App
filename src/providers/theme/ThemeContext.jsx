import { createContext, useReducer } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{

    const initialState = {
        dark : JSON.parse(localStorage.getItem("dark"))
    }

    const ThemeReducer = (state , action) =>{
switch (action.type) {
    case "CHANGE_THEME":
        return{
            ...state,
            dark : state.dark ? false : true
        }

    default:
    return state
}
    }

    const [state , dispatch] = useReducer(ThemeReducer , initialState)

    return(
        <ThemeContext.Provider value={{...state , dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;