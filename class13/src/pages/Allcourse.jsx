import React from 'react'
import { useParams } from 'react-router-dom'

const Allcourse = () => {
    const params = useParams();
    
    

  return (
    <div>
        <h1>All courses : {params.id}</h1>
    </div>
  )
}

export default Allcourse