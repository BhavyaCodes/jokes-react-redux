import React from 'react'

const TwoPartJoke = ({joke}) => {
    return(
        <div className="col-lg-6">
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
        </div>
    )
}

export default TwoPartJoke