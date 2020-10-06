import React from 'react'

const Footer = () => {

    return (
        <div>
            <footer className="footer">
                <div className="container footer-content">
                    <div>
                        <h4>Kontakt</h4>
                        <p>PN-PT godz. 7:00 - 17:00</p>
                        <p>Tel.: +48 33 842 33 20</p>
                        <p>przedsznr8@bielsko.opoka.org.pl</p>
                    </div>
                    <div className="footer-content-right">
                        <h4>Adres</h4>
                        <h6>Przedszkole im. Jana Pwał II<br />
                        Sióstr Serafitek w Oświęcimiu</h6>

                        <p>ul. Dąbrowskiego 14<br />
                        32-600 Oświęcim</p>
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
