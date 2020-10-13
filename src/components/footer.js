import React from 'react'
import YAMLData from "../data/data.yaml"

const Footer = () => {

    return (
        <div>
            <footer className="footer">
                <div className="container footer-content flex2">
                    <div>
                        <h4>Kontakt</h4>
                        <p>{YAMLData.hours}</p>
                        <p>Tel.: {YAMLData.phone}</p>
                        <p>{YAMLData.mail}</p>
                    </div>
                    <div className="footer-content-right">
                        <h4>Adres</h4>
                        <h6>{YAMLData.title} {YAMLData.subtitle[0]}<br />
                            {YAMLData.subtitle[1]}</h6>

                        <p>{YAMLData.address[0]}
                            <br />{YAMLData.address[1]}</p>
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
