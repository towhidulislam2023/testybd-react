import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Component/Header/Header'

function App() {
  const navigation=useNavigation()

  return (
    <div className="App">
      <Header></Header>
        {
          navigation.state === "loading" ? <div className='flex justify-center items-center h-screen'><progress className="progress w-56 "></progress></div>  : <Outlet></Outlet>
        }
    </div>
  )
}

export default App
