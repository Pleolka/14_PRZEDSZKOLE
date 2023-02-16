import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const list = [
  { name: "Home", path: "/" },
  { name: "Aktualności", path: "/aktualnosci" },
  { name: "Galeria", path: "/galeria" },
  { name: "O nas", path: "/onas" },
  { name: "Rekrutacja", path: "/rekrutacja" },
  { name: "Dla Rodziców", path: "/dlarodzicow" },
  { name: "Kontakt", path: "/kontakt" },
]

class Navbar extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const menu = list.map(item => (
      <li key={item.name} className="nav-bar-item">
        <Link activeClassName="active" className="nav-bar-link" to={item.path}>
          {item.name}
        </Link>
      </li>
    ))

    return (
      <>
        <nav
          id="menu"
          role="navigation"
          aria-label="main navigation"
          className={this.state.clicked ? "" : "container"}
        >
          <div className="nav">
            <ul className={this.state.clicked ? "nav-bar-open" : "nav-bar"}>
              <Link
                to="/"
                className="nav-bar-open-logo"
                onClick={this.handleClick}
              >
                <h3> Przedszkole nr 8</h3>
                <h6>
                  im św. Jana Pawła II - <br />
                  sióstr Serafitek w Oświęcimiu
                </h6>
              </Link>
              {menu}
            </ul>
          </div>
        </nav>

        <div className="nav-bar-mobile">
          <button className="nav-bar-icon" onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
          </button>
          <div>
            <h3>Przedszkole nr 8</h3>
            <h6>
              im św. Jana Pawła II - <br />
              sióstr Serafitek w Oświęcimiu
            </h6>
          </div>
        </div>
      </>
    )
  }
}
export default Navbar
