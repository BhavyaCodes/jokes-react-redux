import React from 'react'

const TwoPartJoke = ({joke}) => {
    return(
        <div className="col-lg-6 my-3 card-deck">
            <div className="card">
                <div className="card-header">
                    {joke.setup}
                </div>
                <div className="card-body">
                    {joke.delivery}
                </div>
                <p className="px-3">
                    {joke.category === 'Programming' ? <span className="mx-1 badge badge-pill badge-primary">Programming</span>:null}
                    {joke.category === 'Dark' ? <span className="mx-1 badge badge-pill badge-dark">Dark</span>:null}
                    {joke.category === 'Miscellaneous' ? <span className="mx-1 badge badge-pill badge-info">Miscellaneous</span>:null}
                    {joke.category === 'Pun' ? <span className="mx-1 badge badge-pill badge-warning">Pun</span>:null}
                    {joke.flags.nsfw ? <span className="mx-1 badge badge-pill badge-danger">nsfw</span>:null}
                    {joke.flags.racist ? <span className="mx-1 badge badge-pill badge-dark">racist</span>:null}
                    {joke.flags.sexist ? <span className="mx-1 badge badge-pill badge-warning">sexist</span>:null}
                    {joke.flags.political ? <span className="mx-1 badge badge-pill badge-info">political</span>:null}
                    {joke.flags.religious ? <span className="mx-1 badge badge-pill badge-success">religious</span>:null}
                </p>
            </div>
        </div>
    )
}

export default TwoPartJoke