import Header from 'src/components/header';
import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/base.css';
import 'assets/css/scss/index.scss';

const rootId = 'container';

ReactDOM.render(
  <Header/>, document.getElementById(rootId))