import React from 'react'
import { connect } from 'react-redux'
import { getJokes } from '../actions'

import SingleJoke from './SingleJoke'
import TwoPartJoke from './TwoPartJoke'

const JokesList = (props) => {
    props.getJokes()
    return(
        <div>
            <SingleJoke />
            <TwoPartJoke />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {categories: state.categories, flags: state.flags, search: state.search}
}

export default connect(mapStateToProps, { getJokes })(JokesList)