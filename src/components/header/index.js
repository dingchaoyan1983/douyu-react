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
                            <div className="a-pop">
                                <li></li>
                                <div className="a-list">
                                    <h3>热门分类</h3>
                                    <ul className="btns">
                                        <li><a target="_blank" class="btn" href="https://www.douyu.com/directory/game/LOL">英雄联盟</a></li>
                                        <li><a target="_blank" class="btn" href="https://www.douyu.com/directory/game/How">炉石传说</a></li>
                                        <li><a target="_blank" class="btn" href="https://www.douyu.com/directory/game/DOTA2">DOTA2</a></li>
                                        <li><a target="_blank" class="btn" href="https://www.douyu.com/directory/game/TVgame">主机游戏</a></li>
                                        <li><a target="_blank" class="btn" href="https://www.douyu.com/directory/game/Overwatch">守望先锋</a></li>
                                        <li><a target="_blank" class="btn" href="https://www.douyu.com/directory/game/yys">阴阳师</a></li>
                                    </ul>
                                </div>
                            </div>
			            </li>
                    </ul>
                </div>
            </div>)
}