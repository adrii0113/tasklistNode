import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Register  from './pages/register/register'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/register" element={ <Register />} />
        
        </Routes>
      </Router>
    </div>
  )
}

export default App
