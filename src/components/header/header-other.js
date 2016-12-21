import React from 'react';
import ActionIcon from './action-icon';

export default function HeaderOther(props) {
    return <div className="head-oth fr">
                <div className="o-search fl">
                    <input className="s-ipt fl" type="text" autocomplete="off" placeholder="搜房间/主播/分类" value="" id="suggest-search"/>
                    <a className="s-ico fr" href="https://www.douyu.com/directory/game/mszb#">
                        <i className="icofont"></i>
                    </a>
                </div>
                <ActionIcon action="history" text="历史"/>
                <ActionIcon action="follow" text="关注"/>
                <ActionIcon action="download" text="下载"/>
            </div>
}