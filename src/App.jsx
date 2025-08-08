 import React from 'react'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Homepage/Home'
import About from './pages/AboutPage/About'
import Project from './pages/Projectpage/Project'
import Service from './pages/Servicepage/Service'
 
 <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
 
 const App = () => {
  
   return (
     <div>

        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Service' element={<Service />} />
          </Routes>
        </Router>


     </div>
   )
 }
 
 export default App