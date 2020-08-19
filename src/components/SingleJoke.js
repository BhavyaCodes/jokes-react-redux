import React from 'react'

const SingleJoke = ({joke}) => {
    return(
        <div className="col-lg-6 my-3 card-deck">
            <div className="card">
                <div className="card-body">
                    {joke.joke}
                </div>
                <div className="card-footer">
                    {joke.category === 'Programming' ? <span className="badge badge-pill badge-primary">Programming</span>:null}
                    {joke.category === 'Dark' ? <span className="badge badge-pill badge-dark">Dark</span>:null}
                    {joke.flags.nsfw ? <span className="badge badge-pill badge-danger">nsfw</span>:null}
                    {joke.flags.racist ? <span className="badge badge-pill badge-dark">racist</span>:null}
                    {joke.flags.sexist ? <span className="badge badge-pill badge-warning">sexist</span>:null}
                </div>
            </div>
        </div>
    )
}

export default SingleJoke