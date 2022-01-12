import './App.css';
import {useState} from "react";


export default function SearchBar() {
    const urlPath = "http://ctp-zip-api.herokuapp.com/zip/"
    const [zipInfo, setInfo] = useState({
        zip : "",
        city : "",
        state: "",
        lat: "",
        long: "",
        pop: "",
    })

    function handleEnter(e) {
        if ((e.key === 'Enter')) {
            let newURL = urlPath + zipInfo.zip
            fetch(newURL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setInfo({
                            ...zipInfo,
                            city: data[0].City,
                            state: data[0].State,
                            lat: data[0].Lat,
                            long: data[0].Long,
                            pop: data[0].EstimatedPopulation
                        }
                    )
                })
                .catch(err => {
                    console.log('not result')
                    setInfo({
                        ...zipInfo,
                        cities: []
                    })
                })

        }
    }

        console.log(zipInfo.city)

        return (
            <div className="App">
                <label htmlFor={"zip-code"}>Zip Code: </label>
                <input type={"text"}
                       name={"zip-code"}
                       onChange={(e) =>
                           setInfo({
                               ...zipInfo,
                               zip: e.target.value
                           })}
                       onKeyDown={handleEnter}/>
                <div className={"cities"}>
                    <div>
                        <h1>Zip code: {zipInfo.zip}</h1>
                        <ul>
                            <li>City: {zipInfo.city}</li>
                            <li>State: {zipInfo.state}</li>
                            <li>Latitude: {zipInfo.lat}</li>
                            <li>Longitude: {zipInfo.long}</li>
                            <li>Population: {zipInfo.pop}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
