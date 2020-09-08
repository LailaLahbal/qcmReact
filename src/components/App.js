
import React from 'react';
import Home from './Home';
import Qcm from './Qcm';
import Nav from './Nav';
import Genre from './Genre';
import Auth from './Auth/Auth';
import NotFound from './NotFound';
import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);


  }


  render() {
    return (
      <div className="app">
        <Router>
          <Nav TODO />
          <Route exact path="/" component={Home} />
          <Route path="/qcm" component={Qcm} />
          <Route path="/genre/:id" render={({ match }) => {
            if (/^[1-9][0-9]{0,1}$/.test(match.params.id))
            return <Genre id={parseInt(match.params.id)} />;
            return <NotFound />;
          }} />
           <Route path="/auth" component={Auth} />
        </Router>

      </div>
    )
  }

}

export default App;
