import React from 'react'

function TabMenu(props) {
    return props.isActive === props.dataTab ? (
        <li onClick={props.onClick}
            role="presentation"
            className="tabDyd-menu-item tabDyd-menu-item--active"
            data-tab={props.dataTab}>
            {props.title}
        </li>
    ) : (
            <li onClick={props.onClick}
                role="presentation"
                className="tabDyd-menu-item"
                data-tab={props.dataTab}>
                {props.title}
            </li>
        );
}


export default TabMenu