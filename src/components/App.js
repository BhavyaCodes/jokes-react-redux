import React from 'react'
import {Helmet} from 'react-helmet'

import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import JokesList from './JokesList'

import logo from '../images/logo512.png'

const App = () => {
    return(
        <div>
            <Helmet>
                <meta property="og:image" content={logo} />
            </Helmet>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <Form />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <JokesList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App