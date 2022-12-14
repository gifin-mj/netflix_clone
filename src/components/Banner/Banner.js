import React, { useEffect, useState } from "react";
import  axios  from "../../axinstance";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./Banner.css";
function Banner() {
  const [Banner, setBanner] = useState([])
  const getBanner=()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
     
      setBanner(response.data.results[7])
    })
  }
  useEffect(() => {
    getBanner()
  }, [])
  


  return (
    <div
    style={{backgroundImage:`url(${Banner ? imageUrl+Banner.backdrop_path : "" } )` }}
      
     className="banner">
      <div className="content">
      <h1 className="title">{Banner.title ? Banner.title : Banner.name }</h1>
      <div className="bannerbuttons">
        <button className="button">Play</button>
        <button className="button">Mylist</button>
      </div>
      <div className="description">
        {Banner.overview} 
      </div>
      </div>
      <div className="fade_bottom">
      
      </div>
    </div>
  );
}

export default Banner;
