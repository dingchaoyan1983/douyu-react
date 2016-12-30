import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './app';
import MainBody from './components/mainbody';
import AllLives from './components/mainbody/all-lives';
import AllCategories from './components/mainbody/all-categories';
import RankingList from './components/mainbody/ranking-list';
import MyFocus from './components/mainbody/my-focus';
import WebgameCenter from './components/mainbody/webgame-center';


export default function router(props) {
    return <Router history={hashHistory}>
             <Route path="/" component={App}>
                <IndexRoute component={MainBody}/>
                <Route path="index" component={MainBody}/>
                <Route path="all-lives" component={AllLives}/>
                <Route path="all-categories" component={AllCategories}/>
                <Route path="ranking-list" component={RankingList}/>
                <Route path="my-focus" component={MyFocus}/>
                <Route path="webgame-center" component={WebgameCenter}/>

             </Route>
          </Router>
}
