import React from 'react'

class LeftMenu extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (<>

            <div
                role="navigation"
                aria-label="left navigation"
                className={this.state.clicked ? 'left-menu' : 'left-menu'}>
                <div>
                    <button id="rozklad"
                        isActive="true"
                        onClick={this.handleClick}
                        className={this.state.clicked ? 'left-menu-item-active' : 'left-menu-item'}>
                        Ramowy rozkład dnia
                    </button>
                    <button id="dekalog"
                        onClick={this.handleClick}
                        className={this.state.clicked ? 'left-menu-item-active' : 'left-menu-item'}>
                        Dekalog dobrego rodzica
                    </button>
                    <button id="pliki"
                        onClick={this.handleClick}
                        className={this.state.clicked ? 'left-menu-item-active' : 'left-menu-item'}>
                        Pliki do pobrania
                    </button>
                </div>

            </div >
        </>
        )
    }
}
export default LeftMenu