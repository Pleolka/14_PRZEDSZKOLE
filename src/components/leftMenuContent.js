import React from 'react'

class LeftMenuContent extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (<>

            <div aria-label="left navigation"
                className={this.state.clicked ? 'left-menu-content' : 'left-menu-content'}>
                <div>

                </div>

            </div>

        </>
        )
    }
}
export default LeftMenuContent