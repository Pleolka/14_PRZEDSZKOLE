import React from 'react'

var TabMenu = React.createClass({
    changeTab: function () {
        this.props.setActiveTab(this.props.keyIndex);
    },
    render: function () {
        var classes = 'tab-menu ';

        if (this.props.keyIndex == this.props.active) {
            classes += 'active';
        }

        return (
            <a href="#" onClick={this.changeTab} className={classes}>{this.props.title}</a>
        )
    }
});

export default TabMenu