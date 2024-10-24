
const WeatherReducer = (state , action) =>{
    switch (action.type) {
        case "GET_WEATHER":
            return{
                ...state,
                weather : action.payload
            }

            case "GET_WEATHER_DAYS" :
                return{
                    ...state,
                    weatherDays : action.payload
                }
    
        default:
            return state
    }
}

export default WeatherReducer