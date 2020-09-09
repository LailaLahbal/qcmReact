


import React from 'react';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Question from './Question';


class Nav extends React.Component{

    constructor(props){
      super(props);
    
    }
    handleSubmitLogout = (e) => {
      // pour l'instant on empêche l'envoi de requête vers le serveur
      e.preventDefault();
  
      
  
      // vérification du couple login/password
      this.props.logout();
   
   
    };
     
    render(){
      return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
         <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            {this.props.registered && <li><Link to={'/qcm'} className="nav-link">Qcm</Link></li>}
            {this.props.registered &&<li><Link to={`/genre/1`} className="nav-link">Dev Front</Link></li>}
            {this.props.registered && <li><Link to={`/genre/2`} className="nav-link">Dev Front</Link></li>}
            {this.props.registered? <form onSubmit={this.handleSubmitLogout}>
      
      <button
       
        type='submit'
        className='btn btn-primary'
      >
        logout
      </button>
    </form>:<li><Link to={'/auth'} className="nav-link">login</Link></li>}
            
    
          </ul>
      </nav>
      )
    }
  
  }
  
  export default Nav;
  