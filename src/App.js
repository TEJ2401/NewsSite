import logo from './logo.svg';
import React, { Component, useState } from 'react'
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import PropTypes from 'prop-types'
export const App=(props)=> {
  
  const[progress,setProgress]=useState(0)
  
 function setProg(progress){
  setProgress(progress)
 }

    return (
      <div>
        <Router>
       <Navbar/>
    <LoadingBar
       color='#f11946'
         progress={progress}      
       />
       <Routes>
         <Route path='/' element={<News key={"general"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="general"/>}/>
         <Route path="/Science" element={<News key={"science"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="science"/>}/>
         <Route path='/Buisness' element={<News key={"buisness"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="business"/> } />
         <Route path='/Entertainment' element={<News key={"entertainment"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="entertainment"/>}/>
         <Route path='/Health' element={<News key={"health"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="health"/>}/>
         <Route path='/Sports' element={<News key={"sports"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="sports"/>}/>
         <Route path='/Technology' element={<News key={"technology"} country="in" setProgress={(p)=>{setProg(p)}} pageSize={5} category="technology"/>}/>      
       </Routes>
       </Router> 
      </div>
    )
  }


export default App

