import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/base.css';
import 'assets/css/scss/index.scss';
import Router from './router';

const ROOT = 'container';

ReactDOM.render(<Router/>, document.getElementById(ROOT));