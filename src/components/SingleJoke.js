import React from 'react'

const SingleJoke = ({joke}) => {
    return(
        <div className="col-lg-6">
            {joke.joke}
        </div>
    )
}

export default SingleJoke