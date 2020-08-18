import React from 'react'

import Navbar from './Navbar'
import Form from './Form'

const App = () => {
    return(
        <div>
            <Navbar />
            <div className="container">
                <Form />
            </div>
        </div>
    )
}

export default App