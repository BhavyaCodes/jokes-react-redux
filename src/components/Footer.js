import React from 'react'

const Footer = () => {
    return(
        <div className="bg-light py-3">
            <div className="container">
                <p>
                    <strong>Source code: </strong><a href="https://github.com/Juggernaut9/jokes-react-redux">https://github.com/Juggernaut9/jokes-react-redux</a>
                </p>
                <p className="mb-0">
                    <strong>API used: </strong><a href="https://sv443.net/jokeapi/v2/">https://sv443.net/jokeapi/v2/</a>
                </p>
            </div>
        </div>
    )
}

export default Footer