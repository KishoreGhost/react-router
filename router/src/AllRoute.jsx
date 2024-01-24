import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Squad51 from './Component/Squad51'
import About from './Component/About'
import Context from './Component/Context'

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Squad51 />} />
        <Route path='/About' element={<About />} />
        <Route path='/Context' element={<Context />}/>
      </Routes>
    </>
  )
}

export default AllRoute
