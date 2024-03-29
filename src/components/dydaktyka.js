import React from "react"

const Dydaktyka = props => {
  return (
    <div className="dyd">
      <div className="dyd-header">
        <div className="dyd-header-title">
          <h2>{props.month}</h2>
          <p>{props.date}</p>
          <div
            className="dyd-header-opis"
            dangerouslySetInnerHTML={{ __html: props.opis }}
          ></div>
        </div>

        <div className="dyd-header-tematyka">
          <p>Tematyka zajęć</p>
          <div dangerouslySetInnerHTML={{ __html: props.tematyka }}></div>
        </div>
      </div>

      <div className="dyd-list">
        <h3>Zadania wychowawczo – dydaktyczne i umiejętności dziecka:</h3>
        <div
          className="dyd-header-opis"
          dangerouslySetInnerHTML={{ __html: props.dydaktyka }}
        ></div>
      </div>

      {props.wiersz === null ? (
        ""
      ) : (
        <div className="dyd-txt">
          <div
            className="dyd-header-opis"
            dangerouslySetInnerHTML={{ __html: props.wiersz }}
          ></div>
        </div>
      )}

      {props.piosenka === null ? (
        ""
      ) : (
        <div className="dyd-txt">
          <div
            className="dyd-header-opis"
            dangerouslySetInnerHTML={{ __html: props.piosenka }}
          ></div>
        </div>
      )}

      <div className="dyd-txt">
        <div
          className="dyd-header-opis"
          dangerouslySetInnerHTML={{ __html: props.katecheza }}
        ></div>
      </div>
    </div>
  )
}
export default Dydaktyka
