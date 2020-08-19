import React from 'react'
import { connect } from 'react-redux'
import { formSubmit } from '../actions'
import { getJokes } from '../actions'

import Categories from './Categories'
import Flags from './Flags'
import SearchBar from './SearchBar'



const Form = (props) => {

    props.getJokes()

    const refresh = (event) => {
        event.preventDefault()
        props.getJokes()
    }

    return(
        <div>
            <form onSubmit={(event)=>refresh(event)}>
                <SearchBar />
                <Categories />
                <Flags />
                <button className="btn btn-primary">refresh</button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {categories: state.categories, flags: state.flags, search: state.search}
}

export default connect(mapStateToProps, {formSubmit, getJokes})(Form)