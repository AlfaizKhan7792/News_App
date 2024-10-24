import React from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ThemeButton from './components/ThemeButton';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { NewsProvider } from './providers/news/NewsContext';
import { WeatherProvider } from './providers/weather/WeatherContext';
import Sports from './pages/Sports';
import Intertainment from './pages/Intertainment';
import Business from './pages/Business';
import Politics from './pages/Politics';
import State from './pages/State';
import International from './pages/International';
import CryptoChart from './components/Crypto';
import { CryptoProvider } from './Providers/crypto/CryptoContext';


const App = () => {
  

  return (
    <Router>
      <NewsProvider>
        <WeatherProvider>
          <CryptoProvider>
              <CryptoChart />
    <Navbar />
<Routes>
  <Route path='/' element={ <Home /> } />
  <Route path='/Sports' element={<Sports /> } />
  <Route path='/Bollywood' element={<Intertainment />} />
  <Route path='/Business' element={<Business />} />
  <Route path='/Politics' element={<Politics />} />
  <Route path='/State' element={<State />} />
  <Route path='/International' element={<International />} />
</Routes>
<ThemeButton />
     <ToastContainer /> 
     </CryptoProvider>
     </WeatherProvider>
     </NewsProvider>
    </Router>
  )
}

export default App
