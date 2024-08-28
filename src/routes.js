import React from 'react';
import Vencedores from './pages/vencedores';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Vencedores}/>
        </Switch>
    </BrowserRouter>
    );
}