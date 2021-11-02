import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

function Webmail() {
    return (
        <Layout>
            <div className="container">
                <h1 className="title">Webmail</h1>
                <Link className="button" to="https://server146.web-hosting.com:2096">
                    Go to Webmail
                </Link>
                
            </div>
        </Layout>
    )
}

export default Webmail
