import './App.css';
import CityData from "./CityData";
import {useState} from "react";


export default function SearchBar() {
    const urlPath = "http://ctp-zip-api.herokuapp.com/zip/"
    const [zip, setZip] = useState("")
    const [cities, setCities] = useState([])
    const [header, setHeader] = useState("")


    function handleEnter(e) {
        if (e.key === 'Enter' && zip.length === 5) {
            let newURL = urlPath + zip
            fetch(newURL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setHeader(`Cities associated with Zip code ${zip}`)
                    setCities(data)
                })
                .catch(err => {
                    console.log('not result')
                    setHeader(`${zip} is not a valid zip code`)
                    setCities([])
                })

            }
        } 

        //debugger


        return (
            <div className="App">
                <label htmlFor={"zip-code"}>Zip Code: </label>
                <input type={"text"}
                       name={"zip-code"}
                       onChange={(e) =>
                           setZip(e.target.value)}
                       onKeyDown={handleEnter}/>
                <div className={"cities"}>
                    <div>
                        <h1>{header}</h1>
                        {cities.map((city, i) => {
                            return (
                                <CityData key={city.RecordNumber}
                                          city={city.City}
                                          state={city.State}
                                          lat={city.Lat}
                                          long={city.Long}
                                          population={city.EstimatedPopulation}/>)
                        })}
                    </div>
                </div>
            </div>
        );
    }
