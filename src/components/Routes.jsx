import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Services from './services';


export const Routes = (userGroup) => {
    return (
        <Switch>
            <Route exact path ="/">
                <Home />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
        </Switch>
        
    )
}