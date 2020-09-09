import React, { createContext, Component } from "react";
import { firebase as fb, database } from '../../components/Config';
import { Redirect} from "react-router-dom";

export const UserContext = createContext({
    registered: false
});



class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false
        }


        // TODO checking authenticated ...
    }
    
    login = (email, password) => {
        fb.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                this.setState({
                    registered: true,
                    message: "Vous êtes maintenant connecté",
                    messageClass: "success",
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    registered: false,
                    message: "Identifiants incorrects",
                    messageClass: "danger",
                });
            });
    }

    logout = () => {

        fb.auth()
            .signOut()
            .then(() => {
                this.setState({
                    registered: false,
                    message: "Vous êtes maintenant déconnecté.",
                    messageClass: "primary",
                });
              
              

 }  )
            .catch((error) => {
                console.error(error);
            });
            

    };


    componentDidMount() {
        fb.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ registered: true });
            }
        });
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state,login: this.login,
                logout: this.logout}}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;
