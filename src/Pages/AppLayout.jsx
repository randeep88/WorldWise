import React from 'react'
import Sidebar from '../Components/Sidebar'
import Map from '../Components/Map'
import User from '../Components/User'

const AppLayout = () => {
  return (
    <div className='text-white flex'>
        <Sidebar/>
        <Map/>
        <User/>
    </div>
  )
}

export default AppLayout