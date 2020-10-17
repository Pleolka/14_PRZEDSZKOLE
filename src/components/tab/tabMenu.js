import React from 'react'

function TabMenu(props) {
    return props.isActive === props.dataTab ? (
        <li onClick={props.onClick}
            className="tab-menu-item tab-menu-item--active"
            data-tab={props.dataTab}>
            {props.title}
        </li>
    ) : (
            <li onClick={props.onClick}
                className="tab-menu-item"
                data-tab={props.dataTab}>
                {props.title}
            </li>
        );
}

export default TabMenu