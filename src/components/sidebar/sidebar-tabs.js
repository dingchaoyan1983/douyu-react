import React from 'react';
import classname from 'classname';

export default class SidebarTabs extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: this.props.initAcitveTabIndex
        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        console.log(this.state.activeTabIndex);
        const tabNavs = React.Children.map(this.props.children, (child, index) => {
            const {name='untitled', className=''} = child.props;
            
            return {
                name,
                index,
                className
            }
        });

        const children = React.Children.map(this.props.children, function(child, index){
            return React.cloneElement(child, {selected: index === this.state.activeTabIndex});
        }.bind(this));

        return <div className="leftnav-cate">
                    <div className="r-tit">
                        <ul>
                            {tabNavs.map(({name, index, className}) => {
                                return <li className={classname(index === this.state.activeTabIndex ? 'cur' : '')} onClick={this.onClick.bind(this, index)}>
                                            <i className={classname('icon', className)}></i>
                                            <span>{name}</span>
                                        </li>
                            })}
                        </ul>
                    </div>
                    {children}
               </div>
    }

    onClick(selectedIndex) {
        this.setState({
            activeTabIndex: selectedIndex
        });
    }
}

SidebarTabs.defaultProps = {
    initAcitveTabIndex: 0
};