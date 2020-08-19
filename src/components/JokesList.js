import React from 'react'
import { connect } from 'react-redux'

import SingleJoke from './SingleJoke'
import TwoPartJoke from './TwoPartJoke'

const JokesList = (props) => {

    const RenderJokes = (jokes) => {
        if (jokes.error){
            return (
                <h2>No results found! try changing filters and search bar</h2>
            )
        }
        return null
    }

    console.log(props.jokes)

    return(
        <div>
            <RenderJokes />
            <SingleJoke />
            <TwoPartJoke />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {jokes: state.jokes}
}

export default connect(mapStateToProps)(JokesList)