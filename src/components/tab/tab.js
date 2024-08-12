import React from "react"
import TabMenu from "./tabMenu"
import TabContents from "./tabContents"

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isActive: "1" }
    this.changeActive = this.changeActive.bind(this)
  }

  changeActive(ev) {
    this.setState({ isActive: ev.target.getAttribute("data-tab") })
  }

  render() {
    const listTabMenu = this.props.data.map(node => (
      <TabMenu
        isActive={this.state.isActive}
        onClick={this.changeActive}
        dataTab={node.idNumber.toString()}
        title={node.tytul}
      />
    ))

    const listContent = this.props.data.map(node =>
      this.state.isActive === node.idNumber.toString() ? (
        <TabContents
          className={node.tytul === "Ramowy rozkład dnia" ? "flexP" : ""}
          dataTab={node.idNumber.toString()}
          content={node.childContentfulDlaRodzicowOpisRichTextNode.json}
          doPobrania={node.doPobrania ? node.doPobrania : ""}
        />
      ) : (
        <TabContents
          style={{ display: "none" }}
          dataTab={node.idNumber.toString()}
          content={node.childContentfulDlaRodzicowOpisRichTextNode.json}
          doPobrania={node.doPobrania ? node.doPobrania : ""}
        />
      )
    )
    return (
      <div className="tab">
        <ul className="tab-menu">{listTabMenu}</ul>
        <div className="tab-content">{listContent}</div>
      </div>
    )
  }
}

export default Tab
