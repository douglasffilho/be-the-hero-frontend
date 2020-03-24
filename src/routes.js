import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";

const Routes = () => {
    return (
        <div className="main">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routes;
