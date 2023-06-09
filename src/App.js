import './App.css';
import { useEffect ,useState} from 'react';
import  Axios  from 'axios';
import Coin from './component/coin.js';
import './App.css';

function App() {
const [Listofcoins,setlistofcoins]=useState([])
const [searchWord,setSearchword]=useState("");
useEffect(()=>{
  Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
    (response)=>{
    setlistofcoins(response.data.coins);
  }
  );
},[]);
const filterCoins=Listofcoins.filter((coin)=>{
  return coin.name.toLowerCase().includes(searchWord.toLowerCase());
})

  return (
    <div className="App">
      <div className='cryptoHeader'>
    <input type="text" placeholder='Bitcoin...' onChange={(event)=>{
      setSearchword(event.target.value);
    }}>

    </input>
      </div>
      <div className='cryptoDisplay'>
{filterCoins.map((coin)=>{

return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>;

}
)
}
      </div>
    </div>
  );
}

export default App;
