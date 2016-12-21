import React from 'react';
import classname from 'classname';

export default function ActionIcon(props) {
    const {action='history', text='历史'} = props;

    return <div className={classname(`o-${action}`, 'fl')}>
                <span className="icofont h-ico"></span>
                <span className="h-txt">{text}</span>
          </div>
}