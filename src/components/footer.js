import React from 'react'
import { Link } from 'gatsby'
import YAMLData from "../data/data.yaml"

const Footer = () => {

    return (
        <div>
            <footer className="footer">
                <div className="container footer-content flex2">
                    <div className="footer-content">
                        <h4>Kontakt</h4>
                        <h6>{YAMLData.title} {YAMLData.subtitle[0]}<br />
                            {YAMLData.subtitle[1]}</h6>

                        <p>{YAMLData.hours}</p>
                        <p><b>Tel.: {YAMLData.phone}</b></p>
                        <p><b>{YAMLData.mail}</b></p>

                        <p>{YAMLData.address[0]}
                            <br />{YAMLData.address[1]}</p>
                    </div>

                    <div class="footer-link">
                        <div>
                            <Link to="/grupa1">Aniołki</Link>
                            <Link to="/grupa2">Słoneczka</Link>
                            <Link to="/grupa3">Promyczki</Link>

                            <Link to="/aktualnosci">Aktualności</Link>
                            <Link to="/onas">Onas</Link>
                            <Link to="/rekrutacja">Rektutacja</Link>
                            <Link to="/dlarodzicow">Dla rodziców</Link>
                        </div>
                        <Link to="/regulamin">Regulamin</Link>
                        <Link to="/statut">Statut</Link>
                    </div>
                </div>

                <div className="container footer-content-adds">
                    <hr />
                    <p>Created by IKS Aleksandra Fabian, 2020</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
