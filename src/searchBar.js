import CityData from "/CityData";
import './App.css';
import {useState} from "react";


export default function SearchBar() {
    const urlPath = "http://ctp-zip-api.herokuapp.com/zip/"
    const [zipInfo, setInfo] = useState({
        zip : "",
        cities : []
    })

    function handleEnter(e) {
        if((e.key === 'Enter')){
            let newURL = urlPath + zipInfo.zip
            fetch(newURL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setInfo({...zipInfo,
                        cities : data})
                })
                .catch(err =>{
                    console.log('not result')
                    setInfo({...zipInfo,
                        cities : []})
                })
        }
    }

    return (
        <div className="App">
            <label htmlFor={"zip-code"}>Zip Code: </label>
            <input type={"text"}
                   name={"zip-code"}
                   onChange={(e) =>
                       setInfo({...zipInfo,
                           zip : e.target.value})}
                   onKeyDown={handleEnter}/>
            <div className={"cities"}>
                <div>
                    <CityData cities = {zipInfo.cities}/>
                </div>
            </div>
        </div>
    );
}
