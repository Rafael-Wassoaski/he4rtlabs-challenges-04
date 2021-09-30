import './App.css';
import React from "react";
import Field from "./components/Field";
import SideBar from "./components/SideBar";
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import Profile from "./components/Profile";

function App() {
    return (
        <Router>
            <div style={{display: "flex"}}>

                <SideBar/>

                <Switch>
                    <Route path={'/'} exact={true}>
                        <Field/>
                    </Route>

                    <Route path={'/user'} exact={true}>
                        <Profile/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
