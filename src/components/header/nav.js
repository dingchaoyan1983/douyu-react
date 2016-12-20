import React from 'react';
import NavItem from './nav-item';

export default function Nav(props) {
    return (
        <ul className="head-nav fl">
            <NavItem className="index" href="https://www.douyu.com/" name="首页"/>
            <NavItem className="live" href="https://www.douyu.com/directory/all" name="直播"/>
            <NavItem hasDropdown={true} className="assort" href="https://www.douyu.com/directory" name="分类"/>
        </ul>
    );
}