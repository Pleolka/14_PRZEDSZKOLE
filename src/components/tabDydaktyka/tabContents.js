import React from 'react'

const TabContents = (props) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: props.content2 }}
                data-tab={props.dataTab}
                style={{ whiteSpace: 'normal' }}>
            </div>
            <h6>{props.title}</h6>

            <div dangerouslySetInnerHTML={{ __html: props.content }}
                className={props.className}
                style={props.style}
                data-tab={props.dataTab}>
            </div>
        </>

    );
}

export default TabContents