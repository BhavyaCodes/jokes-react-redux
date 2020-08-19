import React from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../actions'

const Categories = (props) => {

    const handleRadioButton = (event) => {

        for (const key in props.categories){
            props.categories[key.toString()] = false
        }
        props.selectCategory({
            all: true
        })
    }

    const handleCheckboxChange = (event) => {
        const category = {}
        category[event.target.id] = event.target.checked
        props.selectCategory(category)
        props.selectCategory({all:false})
    }

    return(
        <div className="form-group">
                <h4>Categories:</h4>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio" name="exampleRadios"
                        id="all"
                        value="option1"
                        onChange={(event)=> handleRadioButton(event)}
                        checked={props.categories.all}
                    />
                    <label className="form-check-label" htmlFor="all">
                        All
                    </label>
                </div>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="programming"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.categories.programming && !props.categories.all}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        Programming
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="miscellaneous"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.categories.miscellaneous && !props.categories.all}
                    />
                    <label className="form-check-label" htmlFor="miscellaneous">
                        Miscellaneous
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="dark"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.categories.dark && !props.categories.all}
                    />
                    <label className="form-check-label" htmlFor="dark">
                        Dark
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="pun"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.categories.pun && !props.categories.all}
                    />
                    <label className="form-check-label" htmlFor="pun">
                        Pun
                    </label>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, {selectCategory})(Categories)