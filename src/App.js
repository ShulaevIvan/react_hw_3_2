import './App.css';
import './components/Listing/Listing.css';
import Listing from './components/Listing/Listing';
import jsonData from './data/etsy.json';

function App() {
  const  data = jsonData;
  return (
    <div className="App">
      <Listing items={data}></Listing>
    </div>
  );
}

export default App;
