import React from 'react'
import { connect } from 'react-redux'
import { searchTerm } from '../actions'
import {useState, useEffect} from 'react'

const SearchBar = (props) => {
    const[term, setTerm] = useState('')
    const[debouncedTerm, setDebouncedTerm] = useState(term)

    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term)
        },500)
        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        props.searchTerm(debouncedTerm)
    }, [debouncedTerm, props])

    return(
        <div className="form-group">
            <h4 htmlFor="searchTerm">Search Term</h4>
            <input
                type="text"
                className="form-control"
                id="searchTerm"
                placeholder="Optional"
                value={term}
                onChange={(event)=>setTerm(event.target.value)}
                autoComplete="off"
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {term: state.search}
}

export default connect(mapStateToProps, { searchTerm })(SearchBar)