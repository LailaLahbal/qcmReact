


import React from 'react';
import Qcm from './Qcm';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

class Genre extends React.Component{

    constructor(props){
      super(props);
  
    }
  
    
     
    render(){
      return(
        <div className="genre">
         <Qcm id={this.props.id}/>
        </div>
      )
    }
  
  }
  
  export default Genre;
  