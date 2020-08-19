import React from 'react'
import { connect } from 'react-redux'
import { getJokes } from '../actions'

const JokesList = (props) => {
    props.getJokes()
    return(
        <div>
            JokesList
        </div>
    )
}

export default connect(null, { getJokes })(JokesList)