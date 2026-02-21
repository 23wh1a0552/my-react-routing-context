import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end', 
        width: '100%',
        height: '60px',
        alignItems: 'center',
        position: 'fixed',
        top:0}}>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout