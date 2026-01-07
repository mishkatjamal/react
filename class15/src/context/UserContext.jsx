import React, { createContext } from 'react'

export const UserContextData = createContext()
const UserContext = (props) => {
  ;
  
  const users = [
  {
    name: "Mishkat Jamal",
    email: "mishkat@gmail.com",
    age: 25
  },
  {
    name: "Ayaan Khan",
    email: "ayaan@gmail.com",
    age: 22
  },
  {
    name: "Rahul Verma",
    email: "rahul@gmail.com",
    age: 28
  },
  {
    name: "Sohail Ansari",
    email: "sohail@gmail.com",
    age: 24
  },
  {
    name: "Neha Sharma",
    email: "neha@gmail.com",
    age: 26
  }
];

  return (
    
      <UserContextData.Provider value={users}>
{props.children}
      </UserContextData.Provider>
      
      
    
  )
}

export default UserContext