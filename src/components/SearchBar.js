import React from 'react'

const SearchBar = () => {
    return(
        <div className="form-group">
            <h4 htmlFor="searchTerm">Search Term</h4>
            <input type="text" className="form-control" id="searchTerm" placeholder="Optional" />
        </div>
    )
}

export default SearchBar