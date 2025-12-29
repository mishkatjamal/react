import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Home user="mishakt" menu={["home", "about", "contact","services"]}/>
      <Home user="jamal" menu={["home", "about", "contact"]}/>
      <Home user="keeper" menu={["home", "about", "contact","blogs","FAQs"]}/>
    </div>
  )
}

export default App