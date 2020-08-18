import React from 'react'
import { connect } from 'react-redux'
import { formSubmit, selectCategory } from '../actions'



const Form = (props) => {

    const handleCheckboxChange = (event) => {
        const category = {}
        category[event.target.id] = event.target.checked
        props.selectCategory(category)
    }

    const test = (event) =>{
        event.preventDefault()
        console.log(props.state)
    }

    return(
        <div>
        <form onSubmit={(event)=>test(event)}>
            <div className="form-group">
                <h4>Categories:</h4>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="programming"
                        onChange={(event)=>handleCheckboxChange(event)}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        Programming
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="misc"
                        onChange={(event)=>handleCheckboxChange(event)}
                    />
                    <label className="form-check-label" htmlFor="misc">
                        Miscellaneous
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="dark"
                        onChange={(event)=>handleCheckboxChange(event)}
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
                    />
                    <label className="form-check-label" htmlFor="pun">
                        Pun
                    </label>
                </div>
                
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {state: state}
}

export default connect(mapStateToProps, {formSubmit, selectCategory})(Form)