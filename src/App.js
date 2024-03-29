import './App.css';
import React, { useEffect, useState } from 'react';
// import { GeoAlt } from 'react-bootstrap-icons';

import logo from "./page/logo.png"
import Products from "./page/Products";
import {FaSearch} from "react-icons/fa"
import "./page/SearchBar.css"

function sortByPrice(data){
  const sortedItems = data.slice().sort((a, b) => a.price - b.price);
  console.log(sortedItems);
  return sortedItems;
}

function sortByRating(data){
  const sortedItems = data.slice().sort((a, b) => b.rating - a.rating);
  console.log(sortedItems);
  return sortedItems;
}

function App() {
  const[results, setResults] = useState([]);
  const[inputValue, setInputValue] = useState("");
  const[selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://www.savvysips.ca/data.json'); // Assuming the JSON file is served from the public directory
          const data = await response.json();
          console.log(data)
          setResults(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);

    const data = results; 


  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

//for category button and setting required info only
const setCategory = (e) => {
    const products = [];
    if(e.target.innerText === "PRICE - low to high"){
      setSelectedCategory("PRICE");
      setResults(sortByPrice(data));
    }else{
      setSelectedCategory("RATING");
      setResults(sortByRating(data));
    }
};


const categoryStyle = {
  borderRadius: "2rem",
  textDecoration: "underline",
  textUnderlineOffset: "10px",
  textDecorationThickness: "0.3em",
  cursor: "pointer",
  backgroundColor: "#AD8263",
  color: "white"
}

  return (
    <div className="App">
      <div className="App-container">
        <div className="LogoContainer">
          <img src={logo} className="Logo" alt="logo" />
          <h1 className="TeamName">Savvy Sips</h1>
        </div>
        <div className="InputWrapper">
          <FaSearch id="SearchIcon"></FaSearch>
          <input placeholder="Search your location"
          value={inputValue}
          onChange={handleSearch}></input>
        </div>

        <div className="row d-flex justify-content-center">
          <ul style={{marginBottom: '0'}}>
            <li><a href="#" style={selectedCategory==="PRICE" ? {...categoryStyle} : {}} className="category" onClick={setCategory}>PRICE - low to high</a></li>
            <li style={{marginLeft: "1vw"}}><a href="#" className="category" onClick={setCategory} style={selectedCategory==="RATING" ? {...categoryStyle} : {}}>RATING - high to low</a></li>
          </ul>
        </div>
        
        <div className="result-container">
          {inputValue.length != 0
          ? results.map((result) => <Products key={result.id} result={result} />)
          : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default App;