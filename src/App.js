import React from 'react';
import './App.css'
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Rowposter from './components/Rowposter/Rowposter';
import { API_KEY } from './constants/constants';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowposter title="Netflix Originals" url={`discover/tv?api_key=${API_KEY}&with_networks=213`}/>
      <Rowposter title="Action" url={`discover/movie?api_key=${API_KEY}&with_genres=28`}/>
      <Rowposter title="ComedyMovies" url={`discover/movie?api_key=${API_KEY}&with_genres=35`}/>
    </div>
  );
}

export default App;


