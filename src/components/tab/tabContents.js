import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const TabContents = props => {
  return (
    <div
      className={props.className}
      style={props.style}
      data-tab={props.dataTab}
    >
      {documentToReactComponents(props.content)}
      {props.doPobrania ? <p>{props.doPobrania.file.fileName}</p> : ""}
    </div>
  )
}

export default TabContents
