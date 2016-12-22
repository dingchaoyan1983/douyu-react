import classname from 'classname';
import React from 'react';

export default function Channel(props) {
    const {text='全部直播', href='javascript:void(0)', iconClassName='icon-live', selected=false} = props;

    return <li className={classname('channel-catelist-resize', selected ? 'cur' : '')} onClick={props.onClick.bind(null, props.index)}>
                <a className="channel-catelist-resize" href={href}> <i className={classname('icon', iconClassName )}></i>
                    <span>{text}</span>
                </a>
            </li>
}