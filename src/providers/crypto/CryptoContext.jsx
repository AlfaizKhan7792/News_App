import { createContext, useReducer } from "react";

const CryptoContext = createContext()

export const CryptoProvider = ({children}) =>{

    const initialState = {
        Crypto : []
    }
    const CryptoReducer = (state , action) =>{
        switch (action.type) {
            case "GET_CRYPTO":
                return{
                    ...state,
                    Crypto : action.payload 
                }
        
            default:
                return {state}
        }
    }

    const [state , dispatch] = useReducer(CryptoReducer , initialState)

    return(
        <CryptoContext.Provider value={{...state , dispatch}}>
            {children}
        </CryptoContext.Provider>
    )
}

export default CryptoContext;