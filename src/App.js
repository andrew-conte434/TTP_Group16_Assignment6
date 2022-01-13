import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { use } from 'chai';
import { Component } from 'react/cjs/react.production.min';
let info = new Array();


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
      cities: []
    }
  }
  
  async getZipAndFetchFromAPI(value){
    if(value.target.value.length === 5 && value.key === "Enter"){
      try {
        this.setState({input: value.target.value})
        const zip = "http://ctp-zip-api.herokuapp.com/zip/" + value.target.value;
        const response = await fetch(zip);
        const data = await response.json();
        this.setState({cities: data});
      } catch(e){
        console.log("Zip Code Not Found")
      }
      
    }
    
  }

  generate(){
    const len = this.state.cities.length;
    const city = this.state.cities;
    let res = new Array();
    for(let i = 0; i < len; i++){
      res.push(
        <ul key = {"CitySection"+i}>
          <h3 key = {"LocationText"+i} >{city[i].LocationText}</h3>
          <li key = {"State"+i} >State: {city[i].State}</li>
          <li key = {"Location"+i}>Location: ({city[i].Lat}, {city[i].Long})</li>
          <li key = {"Population"+i}>Population: {city[i].EstimatedPopulation === "" ? "?" : city[i].EstimatedPopulation} </li>
          <li key = {"TotalWages"+i}>Total Wages:  {city[i].TotalWages == "" ? "?" : "$" + Intl.NumberFormat('en-US').format(city[i].TotalWages)}</li>
        </ul>
      );
    }
    return res;
  }
  

  render(){
    const len = this.state.cities.length;
    return (
      <div className="App">
        <label htmlFor={"zip-code"}>Zip Code: </label>
        <input type={"text"}
               name={"zip-code"}
               onKeyUp={(e) => this.getZipAndFetchFromAPI(e)}
               />
          <div className={"cities"}>
            {
              this.generate()
            }
          </div>
      </div>
    );
  }

  
}

export default App;
