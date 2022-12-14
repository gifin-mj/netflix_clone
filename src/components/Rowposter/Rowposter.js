import React, { useEffect, useState } from 'react'
import axios from '../../axinstance'
import {  imageUrl } from '../../constants/constants'
import './Rowposter.css'
function Rowposter(props) {

  const [row, setRow] = useState([])

  const getRow=()=>{
      axios.get(props.url).then((response)=>{
        console.log(response.data.results);
        setRow(response.data.results)
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
                    <img className='poster' alt='poster' src={`${imageUrl+obj.poster_path}`} ></img>
                
                  )
                })
              }
               
            </div>
        </div>
  )
}

export default Rowposter