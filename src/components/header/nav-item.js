import React from 'react';
import classname from 'classname';

const {Component} = React;

export default class NavItem extends Component {
    constructor(props, context) {
        super(...arguments);
        this.state= {
            expanded: false
        };

        this.closable = true;
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        const { hasDropdown } = this.props;
        let dropdown = null;
        let navItem = null;

        if(hasDropdown) {
            navItem = <li className={classname('fl', this.props.className, this.state.expanded ? 'open' : '')} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <a href={this.props.href}>{this.props.name}</a>
                        <i></i>
                        <div className="a-pop">
                            <i></i>
                            <div className="a-list">
                                <h3>热门分类</h3>
                                <ul className="btns">
                                    <li><a target="_blank" className="btn" href="https://www.douyu.com/directory/game/LOL">英雄联盟</a></li>
                                    <li><a target="_blank" className="btn" href="https://www.douyu.com/directory/game/How">炉石传说</a></li>
                                    <li><a target="_blank" className="btn" href="https://www.douyu.com/directory/game/DOTA2">DOTA2</a></li>
                                    <li><a target="_blank" className="btn" href="https://www.douyu.com/directory/game/TVgame">主机游戏</a></li>
                                    <li><a target="_blank" className="btn" href="https://www.douyu.com/directory/game/Overwatch">守望先锋</a></li>
                                    <li><a target="_blank" className="btn" href="https://www.douyu.com/directory/game/yys">阴阳师</a></li>
                                </ul>
                            </div>
                        </div>
                      </li>
        } else {
            navItem = <li className={classname('fl', this.props.className)}>
                        <a href={this.props.href}>{this.props.name}</a>
                      </li>
        }

        return navItem;      
    }

    onMouseEnter() {
        this.closable = false;
        this.setState({
            expanded: true
        });
    }

    onMouseLeave() {
        this.closable = true;
        window.setTimeout(() => {
           if (this.closable) {
               this.setState({
                   expanded: false
               });
           }
        }, 100);
    }
}

NavItem.defaultProps = {
        className: '',
        href: 'http://www.baidu.com',
        name: 'untitiled',
        hasDropdown: false
};