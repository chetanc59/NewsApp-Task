import React, { useState } from 'react'
import './App.css';
import { Main } from './components/Main';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Main/>
        <LoadingBar
          color='#f11946'
          height='3px'
          progress={progress}
        />
        < Routes>
         
          <Route exact path="/science" element={<News api_key={api_key} setProgress={setProgress} key='science' pageSize={12} category="science" country="in" />} />
          <Route exact path="/general" element={<News api_key={api_key} setProgress={setProgress} key='general' pageSize={12} category="general" country="in" />} />
          <Route exact path="/technology" element={<News api_key={api_key} setProgress={setProgress} key='technology' pageSize={12} category="technology" country="in" />} />
          <Route exact path="/sports" element={<News api_key={api_key} setProgress={setProgress} key='sports' pageSize={12} category="sports" country="in" />} />
          <Route exact path="/entertainment" element={<News api_key={api_key} setProgress={setProgress} key='entertaiment' pageSize={12} category="entertainment" country="in" />} />
          <Route exact path="/health" element={<News api_key={api_key} setProgress={setProgress} key='health' pageSize={12} category="health" country="in" />} />
          <Route exact path="/business" element={<News api_key={api_key} setProgress={setProgress} key='business' pageSize={12} category="business" country="in" />} />

        </ Routes>
      </Router>
    </>
  )
}

export default App

