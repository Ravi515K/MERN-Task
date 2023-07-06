import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import Chart from '../component/chart';
const AdminDashboard = () => {
 
  return (
    <div>
      <Navbar/>
      <h1>Admin Dashboard</h1>
     
      <Chart/>
    </div>
  )
}

export default AdminDashboard