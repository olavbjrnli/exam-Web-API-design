import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Home} from "./home";
import Login from "./login";
import SignUp from "./signup";
import Details from "./details";

//Taken and very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les08/authentication/src/client/index.jsx
export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null
        };
    }

    updateLoggedInUserId = (userId) => {
        this.setState({userId: userId});
    };

    notFound() {

        return (
            <div>
                <h2>NOT FOUND: 404</h2>
                <p>
                    Ups: This page is either not available or doesn't exist.
                </p>
            </div>
        );

    };

    render() {


        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/login"
                               render={props => <Login {...props}
                                                       userId={this.state.userId}
                                                       updateLoggedInUserId={this.updateLoggedInUserId}/>}/>
                        <Route exact path="/signup"
                               render={props => <SignUp {...props}
                                                        userId={this.state.userId}
                                                        updateLoggedInUserId={this.updateLoggedInUserId}/>}/>
                        <Route exact path="/"
                               render={props => <Home {...props}
                                                      userId={this.state.userId}
                                                      updateLoggedInUserId={this.updateLoggedInUserId}/>}/>
                        <Route exact path="/details"
                               render={props => <Details {...props}
                                                         userId={this.state.userId}
                                                         updateLoggedInUserId={this.updateLoggedInUserId}/>}/>
                        <Route component={this.notFound}/>


                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

