import React from 'react'
import Img from 'gatsby-image'

const Dydaktyka = (props) => {

    return (
        <>
            <div className="dyd">
                <h2>{props.month}</h2>
                <hr />
                <p>{props.date}</p>
                <div className="flex4-2-1">
                    <div className="dyd-list">
                        <h6>Tematyka zajęć:</h6>
                        {props.tematyka}
                    </div>
                    <div className="dyd-list">
                        <h6>Zadania dydaktyczno - wychowawcze:</h6>
                        {props.zadania}
                    </div>
                    <div className="dyd-txt">
                        {props.wiersz}
                    </div>
                    <div className="dyd-txt">
                        {props.piosenka}
                    </div>
                </div>
                <div className="flex2">

                </div>

            </div>
        </>

    )
}
export default Dydaktyka