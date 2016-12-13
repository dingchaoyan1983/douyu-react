import React from 'react';

export default function Header(props) {
    return (<div id="header">
                <div className="head w1366head">
                    <a className="head-logo fl" href="https://www.douyu.com/"></a>
                    <ul className="head-nav fl">
                        <li className="fl index">
                            <a href="https://www.douyu.com/">首页</a>
                        </li>
                        <li className="fl live current">
				            <a href="https://www.douyu.com/directory/all">直播</a>
			            </li>
                        <li className="fl assort">
				            <a href="https://www.douyu.com/directory">分类</a>
                            <i></i>
			            </li>
                    </ul>
                </div>
            </div>)
}