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

const mapStateToProps = (state) => {
    return {state}
}

export default connect(mapStateToProps, { getJokes })(JokesList)