import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SessionFirst from './SessionFirst'
import Exercises from './Exercises'

function App() {
 

  return (
    // delete break later 
    <> 
      <SessionFirst></SessionFirst> <br /> 
      <Exercises></Exercises>
    </>
  ); 
}

export default App