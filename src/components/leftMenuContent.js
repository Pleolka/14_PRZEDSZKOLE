import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'


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