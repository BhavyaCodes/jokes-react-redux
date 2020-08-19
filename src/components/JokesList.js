import React from 'react'
import { connect } from 'react-redux'
import {useState,useEffect} from 'react'

import SingleJoke from './SingleJoke'
import TwoPartJoke from './TwoPartJoke'

const JokesList = (props) => {

    const[loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (props.jokes.length > 0){
            setLoaded(true)
        }
    }, [props.jokes])

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
    console.log(loaded)

    return(
        <div className="row">
            {loaded ? <RenderJokes /> : <h4>Loading...</h4>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {jokes: state.jokes}
}

export default connect(mapStateToProps)(JokesList)