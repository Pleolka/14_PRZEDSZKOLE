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
    const listContent1 =
      this.state.isActive === "1" ? (
        <TabContents
          className={"wiekowe"}
          introstyle={"color"}
          dataTab="1"
          content={this.props.tematyka}
          content2={this.props.opis}
          title="Tematyka kompleksowa:"
        />
      ) : (
        <TabContents
          style={{ display: "none" }}
          dataTab="1"
          content={this.props.tematyka}
        />
      )
    const listContent2 =
      this.state.isActive === "2" ? (
        <TabContents
          className={"wiekowe"}
          dataTab="2"
          content={this.props.dydaktyka}
          title="Zadania wychowawczo – dydaktyczne i umiejętności dziecka:"
        />
      ) : (
        <TabContents
          style={{ display: "none" }}
          dataTab="2"
          content={this.props.dydaktyka}
        />
      )
    const listContent3 =
      this.state.isActive === "3" ? (
        <TabContents className={""} dataTab="3" content={this.props.piosenka} />
      ) : (
        <TabContents
          style={{ display: "none" }}
          dataTab="3"
          content={this.props.piosenka}
        />
      )
    const listContent4 =
      this.state.isActive === "4" ? (
        <TabContents className={""} dataTab="4" content={this.props.wiersz} />
      ) : (
        <TabContents
          style={{ display: "none" }}
          dataTab="4"
          content={this.props.wiersz}
        />
      )
    return (
      <div className="tabDyd">
        <div className="tabDyd-menu">
          <div>
            <h2>{this.props.miesiac}</h2>
            <p>{this.props.date}</p>
          </div>
          <ul>
            <TabMenu
              isActive={this.state.isActive}
              onClick={this.changeActive}
              dataTab="1"
              title="Tematyka"
            />
            <TabMenu
              isActive={this.state.isActive}
              onClick={this.changeActive}
              dataTab="2"
              title="Dydaktyka"
            />
            <TabMenu
              isActive={this.state.isActive}
              onClick={this.changeActive}
              dataTab="3"
              title="Piosenki"
            />
            <TabMenu
              isActive={this.state.isActive}
              onClick={this.changeActive}
              dataTab="4"
              title="Wierszyki"
            />
          </ul>
        </div>

        <div className="tabDyd-content">
          {listContent1}
          {listContent2}
          {listContent3}
          {listContent4}
        </div>
      </div>
    )
  }
}

export default Tab
