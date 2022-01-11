import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const urlPath = "http://ctp-zip-api.herokuapp.com/zip/"
  const [input, setInput] = useState("")
  const [cities, setCities] = useState({})

  function handleEnter(e) {
    if((e.key === 'Enter')){
        let newURL = urlPath + input
        fetch(newURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setCities({cities: data})
                console.log(cities)
            })
            .catch(err =>{
                console.log('not result')
                setCities({cities:[]})
            })

    }

  }

  return (
    <div className="App">
      <label htmlFor={"zip-code"}>Zip Code: </label>
      <input type={"text"}
             name={"zip-code"}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={handleEnter}/>
        <div className={"cities"}>
        </div>
    </div>
  );
}

export default App;
