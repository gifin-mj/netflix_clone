import React, { useEffect, useState } from 'react'
import axios from '../../axinstance'
import {  imageUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube';
import './Rowposter.css'
function Rowposter(props) {
  const [row, setRow] = useState([])
  const [url,setUrl]=useState('')
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
  };
  

  const getRow=()=>{
      axios.get(props.url).then((response)=>{
        setRow(response.data.results)
      })
  }
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      if(response.data.results.length>0)
      setUrl(response.data)
    })
    
  }
  useEffect(() => {
    getRow()
  }, [])
  
  
  
  return (
    
    <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
              {
                row.map((obj)=>{
                  return(
                    <img onClick={()=>{handleMovie(obj.id)}}  className='poster' alt='poster' src={`${imageUrl+obj.poster_path}`}/>
                
                  )
                })
              
              }
              
            </div>
            { url && <YouTube videoId={url.results[0].key} opts={opts} />}
        </div>
  )
}

export default Rowposter