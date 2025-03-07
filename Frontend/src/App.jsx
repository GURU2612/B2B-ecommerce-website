import { useState } from 'react'
import './App.css'
import Navbar from './Content/Navbar/Navbar'
import Toplink from './Content/Navbar/Toplink'
import Herosection from './Content/Herosection/Herosection'
import Aboutussection from './Content/Aboutussection/Aboutussection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toplink/>    
      <Navbar/>    
      <Herosection/>
      <Aboutussection/>
    </>
  )
}

export default App
