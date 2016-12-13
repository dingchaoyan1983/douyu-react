import Header from 'src/components/header';
import React from 'react';
import ReactDOM from 'react-dom';
import 'css/base.css';
import 'css/scss/index.scss';

const rootId = 'container';

ReactDOM.render(
  <Header/>, document.getElementById(rootId))