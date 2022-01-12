import './App.css';
import {useState} from "react";

export default function CityData(props){
    const [cityInfo, setInfo] =
        useState({
            City : props.cities.City,
            Zip : props.cities.Zipcode,
        })
    return (
        <div>

        </div>
    )
}