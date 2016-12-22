import React from 'react';
import Channel from './channel';
import SelectStateManager from 'src/components/common/select-state-manager';
import SidebarTabs from './sidebar-tabs';
import SidebarTab from './sidebar-tab';

export default function Sidebar(props) {
    return <div id="left" className="left-menu">
                <a className="left-btn">
                    <span></span>
                </a>
                <div className="left-big">
                    <div className="channel-cate">
                        <SelectStateManager>
                            <Channel text="全部直播"  iconClassName="icon-live"/>
                            <Channel text="全部分类" iconClassName="icon-game"/>
                            <Channel text="排行榜" iconClassName="icon-rank"/>
                            <Channel text="我的关注" iconClassName="icon-focus"/>
                            <Channel text="頁游中心" iconClassName="icon-collect"/>
                        </SelectStateManager>
                    </div>
                    <SidebarTabs>
                        <SidebarTab name="栏目" className="icon-column">
                            <dl>
                                <dt className="cur">
                                    <a href="/directory/columnRoom/game">
                                        <i></i><span>热门游戏</span>
                                    </a>
                                </dt>
                            </dl>
                            <dd>
                                <ul className="clearfix">
                                     <li><a href="/directory/game/yx" title="鱼秀">鱼秀</a></li>
                                </ul>
                            </dd>
                        </SidebarTab>
                        <SidebarTab name="发现" className="icon-recom">
                            <dl>
                                <dt className="cur">
                                    <a href="/directory/columnRoom/game">
                                        <i></i><span>热门游戏</span>
                                    </a>
                                </dt>
                            </dl>
                            <dd>
                                <ul className="clearfix">
                                     <li><a href="/directory/game/yx" title="鱼秀">鱼秀</a></li>
                                </ul>
                            </dd>
                        </SidebarTab>
                    </SidebarTabs>
                </div>
           </div>
}