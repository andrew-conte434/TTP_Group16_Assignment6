import './App.css';
import {useState} from "react";

function CityData(props){
    const [cityInfo, setInfo] =
        useState({
            city : props.city,
            state : props.state,
            lat : props.lat,
            long : props.long,
            pop : props.population
        })
    return (
        <div>
            <ul>
                <li>City: {props.city}</li>
                <li>State: {props.state}</li>
                <li>Latitude: {props.lat}</li>
                <li>Longitude{props.long}</li>
                <li>Population: {props.population}</li>
            </ul>
        </div>
    )
}

export default CityData;