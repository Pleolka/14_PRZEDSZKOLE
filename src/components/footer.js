import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

    const data = useStaticQuery(graphql`{
        allContentfulInformacjeDodatkoweOPrzedszkolu {
            nodes {
              adres {
                adres
              }
              telefon
              title
              mail
              godzinyOtwarcia
              subtitle {
                subtitle
              }
            }
          }
    }`)

    const info = data.allContentfulInformacjeDodatkoweOPrzedszkolu.nodes[0]

    return (
        <div>
            <footer className="footer">
                <div className="container footer-content flex2">
                    <div className="footer-content">
                        <h4>Kontakt</h4>
                        <h6>{info.title}
                            {info.subtitle.subtitle}
                        </h6>

                        <p>{info.godzinyOtwarcia}</p>
                        <p><b>Tel.: {info.telefon}</b></p>
                        <p><b>{info.mail}</b></p>

                        <p>{info.adres.adres}</p>
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
                    <p>Created by IKS Aleksandra Fabian, 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
