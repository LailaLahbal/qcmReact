
import React from 'react';

class LoaderData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loadedList: false, loadedJson: false };
    }

    start() {
        fetch(this.props.url).then(
            (response) => {
                return response.json();
            }
        ).then(json => {
            this.setState({ loadedJson: true });
            this.props.onLoad(true, json);
          
           
        });


    }

    render() {
        return (
            <div className="container">
                <div id="loader-1" className="loader"></div>
            </div>
        )
    }

    componentDidMount() {
        this.start();
    }
}

export default LoaderData;
