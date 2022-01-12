import './App.css';
import CityData from "./CityData";
import {useState} from "react";


export default function SearchBar() {
    const urlPath = "http://ctp-zip-api.herokuapp.com/zip/"
    const [zip, setZip] = useState("")
    const [cities, setCities] = useState([])


    function handleEnter(e) {
        if ((e.key === 'Enter')) {
            let newURL = urlPath + zip
            fetch(newURL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setCities(data)
                })
                .catch(err => {
                    console.log('not result')
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
                        <h1>Zip code: {zip}</h1>
                        {cities.map((city, i) => {
                            return (
                                <CityData key={city.RecordNumber}
                                          city={city.City}
                                          state={city.State}
                                          lat={city.Lat}
                                          long={city.Long}
                                          population={city.EstimatedPopulation}/>)
                        })}
                        {/*{Object.keys(zipInfo).map((zipInfo,i)=> {*/}
                        {/*    //debugger*/}
                        {/*     return (*/}
                        {/*            <CityData*/}
                        {/*                      key = {i}*/}
                        {/*                      city={zipInfo.city}*/}
                        {/*                      state={zipInfo.state}*/}
                        {/*                      lat={zipInfo.lat}*/}
                        {/*                      long={zipInfo.long}*/}
                        {/*                      population={zipInfo.pop}/>)*/}

                        {/*    })*/}
                        {/*}*/}

                    </div>
                </div>
            </div>
        );
    }
