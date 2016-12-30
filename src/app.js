import React from 'react';
import Header from 'src/components/header';
import Sidebar from 'src/components/sidebar';

export default function App(props) {
    return <div>
             <Header {...props}/>
             <Sidebar {...props}/>
             <div className="mainbody ">
              {props.children}
             </div>
           </div>
}