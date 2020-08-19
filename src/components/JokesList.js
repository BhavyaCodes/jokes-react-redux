import React from 'react'
import { connect } from 'react-redux'

import SingleJoke from './SingleJoke'
import TwoPartJoke from './TwoPartJoke'

const JokesList = (props) => {

    const RenderJokes = () => {
        if ((props.jokes).length === 0){
            return (
                <div>No Jokes found! try updating the filters</div>
            )
        }

        const renderedJokes = props.jokes.map(joke=>{
            if (joke.type === 'single'){
                return (<SingleJoke key={joke.id} joke={joke}/>)
            }
            return (<TwoPartJoke key={joke.id} joke={joke}/>)
        })

        return renderedJokes
    }

    console.log(props.jokes)

    return(
        <div className="row">
            <RenderJokes />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {jokes: state.jokes}
}

export default connect(mapStateToProps)(JokesList)