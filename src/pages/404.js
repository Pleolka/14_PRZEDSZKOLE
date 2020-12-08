import React from "react"

import Layout from '../components/layout'
import SEO from '../components/SEO'

const page404 = () => {
    return (
        <Layout>
            <SEO title="404" />
            <h1>404</h1>
            <p>Strona o podanym adresie nie istnieje.</p>
        </Layout>
    )
}

export default page404