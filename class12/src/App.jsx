import React, { useEffect } from 'react'
import axios, { all } from "axios"
import { useState } from 'react'
const App = () => {

  const [alluser, setalluser] = useState([])

  useEffect(()=>{
    getData()
  },[])
  const getData = async ()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20offset=0")

    setalluser(response.data.results)
    console.log(response.data.results);
    
    
  }



  return (
      <div>
        {alluser.map((e,idx)=>{
          return <div key={idx}>
            <h2>{e.name}</h2>
          </div>
        })}
      </div>
  )
}

export default App