import React, { useState, useEffect } from 'react';
import Models from "./components/Models";
import SearchBar from "./components/SearchBar";
import axios from 'axios';
import './App.css'

function App() {

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('volvo')

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await
        axios (`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${query}/vehicleType/car?format=json`)
      console.log(fetchedData.data["Results"])
      setModels(fetchedData.data["Results"])
      setLoading(false)
    }
    fetchData();
  }, [query])


  return (
    <div className="container">
      <SearchBar getQuery={(q) => setQuery(q)}/>
      <Models models={models} loading={loading}/>
    </div>
  );
}

export default App;
