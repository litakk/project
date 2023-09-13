import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navigation from './index'
import Home from "../Home.jsx"
import About from "../About.jsx"


export default function AnimatedComponents({ dispatch }) {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About dispatch={ dispatch } />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}