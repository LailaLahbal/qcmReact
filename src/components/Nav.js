


import React from 'react';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends React.Component{

    constructor(props){
      super(props);
    
    }
  
    
     
    render(){
      return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
         <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Qcm'} className="nav-link">Qcm</Link></li>
            <li><Link to={`/genre/1`} className="nav-link">Dev Front</Link></li>
            <li><Link to={`/genre/2`} className="nav-link">Dev Front</Link></li>
    
          </ul>
      </nav>
      )
    }
  
  }
  
  export default Nav;
  