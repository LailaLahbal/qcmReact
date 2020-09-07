


import React from 'react';
import Layout from './Layout';
import Menu from './Menu';
import Question from './Question';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
class NotFound extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="NotFound">
                <h1>Not Found</h1>
               
            </div>
        )
    }

}

export default NotFound;
