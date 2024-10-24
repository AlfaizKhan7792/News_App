import React, { useContext, useEffect } from "react";
import CryptoContext from "../providers/crypto/CryptoContext";

const CryptoChart = () => {
  const { Crypto, dispatch } = useContext(CryptoContext);

  // Fetch trending cryptocurrencies
  const fetchTrendingCryptos = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
      const data = await response.json();

      if (data.coins) {
        dispatch({
          type: "GET_CRYPTO",
          payload: data.coins,
        });
        // console.log(data.coins);  // Log data for debugging
      } else {
        console.error("Unexpected data format:", data);  // Handle data format issues
      }
    } catch (error) {
      console.error("Error fetching trending data:", error);  // Log errors
    }
  };

  useEffect(() => {
    fetchTrendingCryptos();
  }, []); 

  // Guard against undefined or null `cryptoData`
  if (!Crypto || Crypto.length === 0) {
    return <div className="text-center">Loading...</div>;  // Display a loading message if data is not available
  }

  return (
    <>
<marquee className="bg-secondary text-light">
      <div className="d-flex align-items-center">
        {Crypto.map((cryptodata) => (
          <div 
            key={cryptodata.item.id} 
            style={{ display: 'inline-flex', alignItems: 'center', marginRight: '20px' }}
          >
            <img src={cryptodata.item.small} alt={cryptodata.item.name} style={{ marginRight: '10px' , width : "30px" }} />
            <span>
              {cryptodata.item.name} ({cryptodata.item.symbol}) - Rank: {cryptodata.item.market_cap_rank}
            </span>
          </div>
        ))}
      </div>
    </marquee>
    </>
  );
};

export default CryptoChart;
