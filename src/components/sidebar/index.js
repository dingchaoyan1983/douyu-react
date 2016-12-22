import React from 'react';
import Channel from './channel';
import SelectStateManager from 'src/components/common/select-state-manager';

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
                </div>
           </div>
}