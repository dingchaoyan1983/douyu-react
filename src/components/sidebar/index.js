import React from 'react';

export default function Sidebar(props) {
    return <div id="left" className="left-menu">
                <a className="left-btn">
                    <span></span>
                </a>
                <div className="left-big">
                    <div className="channel-cate">
                        <ul>
                            <li className="cur channel-catelist-resize">
                                <a className="cur channel-catelist-resize" href="/directory/all"> <i className="icon icon-live"></i>
                                    <span>全部直播</span>
                                </a>
                            </li>
                            <li className="channel-catelist-resize">
                                <a href="/directory" className="channel-catelist-resize"> <i className="icon icon-game"></i>
                                    <span>全部分类</span>
                                </a>
                            </li>
                            <li className="rank  channel-catelist-resize">
                                <a href="/directory/rank_list/game" className="channel-catelist-resize">
                                    <i className="icon icon-rank"></i>
                                    <span>排行榜</span>
                                </a>
                            </li>
                            <li className="follow  channel-catelist-resize">
                                <a href="/room/my_follow" className="channel-catelist-resize">
                                    <i className="icon icon-focus"></i>
                                    <span>我的关注</span>
                                </a>
                            </li>
                            <li className="channel-catelist-resize">
                                <a href="http://wan.douyu.com/" target="_blank" className="channel-catelist-resize">
                                    <i className="icon icon-collect"></i>
                                    <span>页游中心</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
}