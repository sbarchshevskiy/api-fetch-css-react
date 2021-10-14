import axios from "axios";
import {useEffect, useState} from "react";


export default function FetchAPI(){

    const [models, setModels] = useState(null)
    const [query, setQuery] = useState(null)

    const handleChange = (event) => {
        setQuery(event.target.value)
    }


    useEffect(() => {
        async function fetchData(){
            await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${query}/vehicleType/car?format=json`)
                .then((res) => {
                    const result = res.data["Results"]
                    result.map((res) => {
                        const model = res.Model_Name
                        console.log(model)
                        setModels(model)
                    })
                }).catch(err => console.log(err))
        }
        fetchData()
    },[query])


    return(
        <div>
            <form>
                <input onChange={handleChange}/>
            </form>
            <div className="results">
                {models.slice(0,20)}
            </div>
        </div>
    )
}