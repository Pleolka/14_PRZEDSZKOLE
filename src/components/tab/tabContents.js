import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

const TabContents = props => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  const icon = data.icon.childImageSharp.fixed
  return (
    <div
      className={props.className}
      style={props.style}
      data-tab={props.dataTab}
    >
      {documentToReactComponents(props.content)}
      {props.doPobrania ? (
        <>
          <h3>Do pobrania</h3>
          <a href={props.doPobrania.file.url}>
            <Img fixed={icon} alt="logo" />
            <p>{props.doPobrania.file.fileName}</p>
          </a>
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default TabContents
