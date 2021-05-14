import React, { useState, useEffect } from 'react';
import Models from "./components/Models";
import axios from 'axios';

function App() {

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await
        axios (`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/volvo/vehicleType/car?format=json`)
      console.log(fetchedData.data["Results"])
      setModels(fetchedData.data["Results"])
      setLoading(false)
    }
    fetchData();

  }, [])



  return (
    <div className="container">
      <Models models={models} loading={loading}/>

    </div>
  );
}

export default App;
