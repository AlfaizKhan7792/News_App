const NewsReducer = (state, action) =>{

    switch(action.type){
        case "GET_NEWS":
            return{
                ...state,
                allNews : action.payload

            }

            case "DELETE_NEWS" :
                // console.log(action.payload)
                return{
                    ...state,
                    allNews : state.allNews.filter((item, index) => index !== action.payload)
                }

            default:
                return state
    }

    
}

export default NewsReducer;