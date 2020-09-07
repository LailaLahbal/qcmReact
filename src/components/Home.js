


import React from 'react';
import Layout from './Layout';
import Menu from './Menu';
import Question from './Question';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
class Home extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="Home">
                <h1>Qcm React</h1>
                <p>Qcm React description</p>
            </div>
        )
    }

}

export default Home;
