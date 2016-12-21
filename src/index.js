import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/base.css';
import 'assets/css/scss/index.scss';

import Header from 'src/components/header';
import Sidebar from 'src/components/sidebar';

const rootId = 'container';

ReactDOM.render(<div><Header/><Sidebar/></div>, document.getElementById(rootId))