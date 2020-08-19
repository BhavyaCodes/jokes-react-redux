import React from 'react'
import { connect } from 'react-redux'
import { formSubmit } from '../actions'

import Categories from './Categories'
import Flags from './Flags'



const Form = (props) => {

    const test = (event) =>{
        event.preventDefault()
        console.log(props.state)
    }

    return(
        <div>
        <form onSubmit={(event)=>test(event)}>
            <Categories />
            <Flags />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {state: state}
}

export default connect(mapStateToProps, {formSubmit})(Form)