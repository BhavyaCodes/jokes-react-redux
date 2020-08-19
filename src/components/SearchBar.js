import React from 'react'
import { connect } from 'react-redux'
import { searchTerm } from '../actions'

const SearchBar = (props) => {
    return(
        <div className="form-group">
            <h4 htmlFor="searchTerm">Search Term</h4>
            <input
                type="text"
                className="form-control"
                id="searchTerm"
                placeholder="Optional"
                value={props.term}
                onChange={(event)=>props.searchTerm(event.target.value)}
                autoComplete="off"
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {term: state.search}
}

export default connect(mapStateToProps, { searchTerm })(SearchBar)