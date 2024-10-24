import React, { useContext, useEffect, useState } from 'react'
// import Logo from '../assets/logo.png'
import ThemeContext from '../providers/theme/ThemeContext'
import WeatherContext from '../providers/weather/WeatherContext'
import { toast } from 'react-toastify'
import { Box, Skeleton, TextField } from '@mui/material'

const WeatherCard = () => {
  const {dark} = useContext(ThemeContext)
  const {weather , dispatch} = useContext(WeatherContext)

  const getWeather = async (City) =>{

    // Fetching API
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee92046c99a24c76aea172405240210&q=${City}&aqi=yes`)
    const data = await response.json();

  try {    
    // Checking if response is error
    if (data.error) {
      toast.error("Enter Valid City Name!!")
    }
    else{
      dispatch({
        type : "GET_WEATHER",
        payload : data
      })
      // console.log(data);
    }

  } catch (error) {
    toast.error("Something Went Wrong!!!")
  }
  }

  const [City , setCity] = useState("")

  // getWeatherDays Start

  const getWeatherDays = async (City) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=885451332d5d63cd10360aa637966afa&units=metric`); // Added 'metric' for Celsius
      const data = await res.json();

      // Checking for valid response code
      if (data.cod !== '200') {
        toast.error("Enter a valid city name!!");
        return;
      }

      // Extracting 5-day data and repeating it to simulate 30-day data
      const dailyData = data.list.filter((entry) => entry.dt_txt.includes("12:00:00")); // Midday forecast only
      let thirtyDaysData = [];
      
      // Repeating data to simulate 30 days
      for (let i = 0; i < 6; i++) {
        thirtyDaysData = thirtyDaysData.concat(dailyData);
      }

      dispatch({
        type: "GET_WEATHER_DAYS",
        payload: thirtyDaysData.slice(0, 30),  // Taking only the first 30 days
      });

    } catch (error) {
      toast.error("Something went wrong!!!");
    }
  };

  // getWeatherDays end

  const handleSearch = (e) =>{
    e.preventDefault()
    getWeather(City)
    getWeatherDays(City);
    setCity("")
  }


  useEffect(() => {
    getWeather("Indore")
    getWeatherDays("Indore")
  }, []);

  

  return (
     <div className={dark ? "card p-5 my-3 bg-right shadow border" : "card p-5 my-3 bg-left shadow border"}>

<h4>Today's Update</h4>

      <form onSubmit={(e) => handleSearch(e)}>
        <TextField
          id="filled-multiline-flexible"
          label="Enter A City Name"
          multiline
          size='small'
          color=''
          fullWidth
          maxRows={4}
          variant="filled"
          onChange={(e) => setCity(e.target.value)} 
          value={City}
        />
        <button className="btn btn-outline-dark w-100 my-2">Search_Weather</button>
      </form>

      {weather.length === 0 ? (
          // <h1 className="text-center text-secondary">Loading...</h1>
          < Box display="flex" className="border-dark border p-3">
         <Box width="100%" display="flex" justifyContent="space-between" flexDirection="column" sx={{margin : "10px"}} >
        <Box>
        <Skeleton width="100%" animation="wave" height={30} />
        <Skeleton width="95%" animation="wave" height={30} />
        </Box>
        <Box sx={{marginBottom : "20px"}}>
          <Skeleton width="70%" animation="wave" />
          <Skeleton width="70%" animation="wave" />
        </Box>
         </Box>
          
          <span className='justify-content-between align-items-end d-flex flex-column'>
          <Skeleton variant="circular" animation="pulse" width={70} height={70} />
              <Skeleton width={100} animation="pulse" height={60} />
          </span>
          </ Box>
        ) : (

          <div className="d-flex align-items-center justify-content-between p-3">

          <div className="left">
            <h1>{weather?.current?.temp_c }</h1>
            <h3>{weather?.location?.name }</h3>
          </div>

          <div className="right">
            <img src={weather?.current?.condition?.icon  } style={{height : '80px'}} alt="" />
            <p>{weather?.current?.condition?.text }</p>
               </div>
          </div>
        )
      }
    
      </div> 
  )
}

export default WeatherCard



// The past and future weather Data:-

// import React, { useContext, useEffect, useState } from 'react';
// import Logo from '../assets/logo.png';
// import ThemeContext from '../providers/theme/ThemeContext';
// import WeatherContext from '../providers/weather/WeatherContext';
// import { toast } from 'react-toastify';
// import { TextField } from '@mui/material';

// // To get today's date and format it in YYYY-MM-DD
// const getFormattedDate = (daysOffset = 0) => {
//   const date = new Date();
//   date.setDate(date.getDate() + daysOffset); // Add or subtract days
//   return date.toISOString().split('T')[0];
// };

// const WeatherCard = () => {
//   const { dark } = useContext(ThemeContext);
//   const { weather, weatherDays, dispatch } = useContext(WeatherContext);
//   const [City, setCity] = useState("");

//   const getWeather = async (City) => {
//     const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee92046c99a24c76aea172405240210&q=${City}&aqi=yes`);
//     const data = await response.json();

//     try {
//       if (data.error) {
//         toast.error("Enter a valid city name!!");
//       } else {
//         dispatch({
//           type: "GET_WEATHER",
//           payload: data,
//         });
//       }
//     } catch (error) {
//       toast.error("Something went wrong!!!");
//     }
//   };

//   const getWeatherDays = async (City) => {
//     try {
//       // Fetch past 5 days' data using WeatherAPI history endpoint
//       const pastDaysPromises = [];
//       for (let i = -5; i < 0; i++) {
//         const pastDate = getFormattedDate(i);
//         // const historyRes = fetch(`https://api.weatherapi.com/v1/history.json?key=ee92046c99a24c76aea172405240210&q=${City}&dt=${pastDate}`);
//         const historyRes = fetch(`https://api.weatherapi.com/v1/history.json?key=ee92046c99a24c76aea172405240210&q=${City}&dt=${pastDate}`);
//         pastDaysPromises.push(historyRes);
//       }

//       const pastDaysData = await Promise.all(pastDaysPromises);
//       const pastWeather = await Promise.all(pastDaysData.map((res) => res.json()));

//       // Fetch future 5 days' data using OpenWeatherAPI forecast endpoint
//       const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=885451332d
//         5d63cd10360aa637966afa&units=metric`);
//       const forecastData = await res.json();

//       if (forecastData.cod !== '200') {
//         toast.error("Enter a valid city name!!");
//         return;
//       }

//       const futureWeather = forecastData.list.filter((entry) => entry.dt_txt.includes("12:00:00")).slice(0, 5);

//       // Dispatch past and future data
//       dispatch({
//         type: "GET_WEATHER_DAYS",
//         payload: {
//           past: pastWeather.map((day) => day.forecast.forecastday[0]),
//           future: futureWeather,
//         },
//       });
//     } catch (error) {
//       toast.error("Something went wrong!!!");
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     getWeather(City);
//     getWeatherDays(City);
//     setCity("");
//   };

//   useEffect(() => {
//     getWeather("Indore");
//     getWeatherDays("Indore");
//   }, []);

//   return (
//     <div className={dark ? "card p-5 my-3 bg-right shadow border" : "card p-5 my-3 bg-left shadow border"}>
//       <h4>Today's Update</h4>
//       <form onSubmit={handleSearch}>
//         <TextField
//           id="filled-multiline-flexible"
//           label="Enter A City Name"
//           multiline
//           size='small'
//           fullWidth
//           maxRows={4}
//           variant="filled"
//           onChange={(e) => setCity(e.target.value)}
//           value={City}
//         />
//         <button className="btn btn-outline-dark w-100 my-2">Search Weather</button>
//       </form>

//       {/* Display current weather */}
//       {!weather ? (
//         <h1 className="text-center text-secondary">Loading...</h1>
//       ) : (
//         <div className="d-flex align-items-center justify-content-between p-3">
//           <div className="left">
//             <h1>{weather?.current?.temp_c || 'N/A'} °C</h1>
//             <h3>{weather?.location?.name || 'Unknown location'}</h3>
//           </div>
//           <div className="right">
//             <img src={weather?.current?.condition?.icon || Logo} style={{ height: '80px' }} alt="weather-icon" />
//             <p>{weather?.current?.condition?.text || 'Unknown Condition'}</p>
//           </div>
//         </div>
//       )}

//       {/* Display past and future weather */}
//       <div className="weather-days-container">
//         <h4>Past 5 Days Weather</h4>
//         {!weatherDays?.past ? (
//           <h5>Loading...</h5>
//         ) : (
//           <div className="past-weather">
//             {weatherDays.past.map((day, index) => (
//               <div key={index} className="weather-day mb-3 border-bottom">
//                 <img className='float-end' src={day.day.condition.icon} alt="weather-icon" />
//                 <p><strong>Date:</strong> {day.date}</p>
//                 <p><strong>Avg Temp:</strong> {day.day.avgtemp_c} °C</p>
//                 <p><strong>Condition:</strong> {day.day.condition.text}</p>
//                 <p><strong>Humidity:</strong> {day.day.avghumidity}%</p>
//                 <p><strong>Wind Speed:</strong> {day.day.maxwind_kph} kph</p>
//               </div>
//             ))}
//           </div>
//         )}

//         <h4>Next 5 Days Weather</h4>
//         {!weatherDays?.future ? (
//           <h5>Loading...</h5>
//         ) : (
//           <div className="future-weather">
//             {weatherDays.future.map((day, index) => (
//               <div key={index} className="weather-day border-bottom mb-3">
//                 <img className='float-end' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather-icon" />
//                 <p><strong>Date:</strong> {day.dt_txt.split(" ")[0]}</p>
//                 <p><strong>Temp:</strong> {day.main.temp} °C</p>
//                 <p><strong>Condition:</strong> {day.weather[0].description}</p>
//                 <p><strong>Humidity:</strong> {day.main.humidity}%</p>
//                 <p><strong>Wind Speed:</strong> {day.wind.speed} m/s</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;
