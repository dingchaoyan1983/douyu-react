import React from 'react';
import Header from 'src/components/header';
import Sidebar from 'src/components/sidebar';

export default function App(props) {
    return <div>
             <Header/>
             <Sidebar/>
             {props.children}
           </div>
}