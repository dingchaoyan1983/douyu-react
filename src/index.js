import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/base.css';
import 'assets/css/scss/index.scss';
import Router from './router';

const rootId = 'container';

ReactDOM.render(<Router/>, document.getElementById(rootId))