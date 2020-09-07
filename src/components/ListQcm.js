
import React from 'react';
import Title from './Title';
import Detail from './Detail';
import 'bootstrap/dist/css/bootstrap.min.css';


class ListQcm extends React.Component {
    constructor(props) {
        super(props);
        this.state={currentIndex:null }
 
      
   
    }
    handleClick=(event)=>{
        let qcmIndex = event.target.attributes.index.value;
        this.setState({
            currentIndex:qcmIndex
        });
       

    }

    render() {

        return (<div className="listQcm"  ><ul className="list-group">

            {this.props.data.qcm.map((qcm, index) => {

                return <li key={index} className="list-group" onClick={this.handleClick}><Title title={qcm.title} badge={qcm.badge} index={index}/> </li>
            })}
        </ul> <Detail data={this.props.data.qcm} index={this.state.currentIndex}/></div>)
    }
}

export default ListQcm;
