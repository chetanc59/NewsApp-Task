import React, { useState } from 'react'
import './App.css';
import { Main } from './components/Main';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Router>
        <Main/>
        < Routes>
         
          <Route exact path="/science" element={<News api_key={api_key}  key='science' pageSize={12} category="science" country="in" />} />
          <Route exact path="/general" element={<News api_key={api_key}   key='general' pageSize={12} category="general" country="in" />} />
          <Route exact path="/technology" element={<News api_key={api_key}   key='technology' pageSize={12} category="technology" country="in" />} />
          <Route exact path="/sports" element={<News api_key={api_key}   key='sports' pageSize={12} category="sports" country="in" />} />
          <Route exact path="/entertainment" element={<News api_key={api_key}   key='entertaiment' pageSize={12} category="entertainment" country="in" />} />
          <Route exact path="/health" element={<News api_key={api_key}   key='health' pageSize={12} category="health" country="in" />} />
          <Route exact path="/business" element={<News api_key={api_key}   key='business' pageSize={12} category="business" country="in" />} />

        </ Routes>
      </Router>
    </>
  )
}

export default App

