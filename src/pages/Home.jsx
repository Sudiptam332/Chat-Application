import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import logo from "../img/logo.jpg"
import robot from "../img/robot.gif"

const Home = () => {
  return (
    <div className='home'>
      <div className="tag">
      <div className='logo1'>
        <img src={logo} alt="Logo"/>
        <span>Hi Buddy</span>
        </div>
        <p>A Ultimate Chat Application. Now You Can Expand Your Network.</p>
      <div className='robot'>
      <img src={robot} alt="robot"/>
      </div>
      </div>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home