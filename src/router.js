import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import MainBody from './components/mainbody';

export default function router(props) {
    return <Router history={hashHistory}>
             <Route path="/" component={App}>
                <IndexRoute component={MainBody}/>
             </Route>
          </Router>
}
