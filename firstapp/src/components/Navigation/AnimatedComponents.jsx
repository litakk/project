import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navigation from './index'
import About from "../About.jsx"

import NotFound from "../NotFound"


export default function AnimatedComponents({ dispatch }) {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />} >
          <Route path="about" element={<About dispatch={ dispatch } />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
