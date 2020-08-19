import React from 'react'
import { connect } from 'react-redux'
import { selectFlags } from '../actions'

const Flags = (props) => {

    const handleCheckboxChange = (event) => {
        const flag = {}
        flag[event.target.id]=event.target.checked
        props.selectFlags(flag)
    }

    return(
        <div className="form-group">
                <h4>Flags to blacklist (Optional):</h4>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="nsfw"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.flags.nsfw}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        nsfw
                    </label>
                </div>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="religious"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.flags.religious}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        religious
                    </label>
                </div>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="political"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.flags.political}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        political
                    </label>
                </div>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="racist"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.flags.racist}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        racist
                    </label>
                </div>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="sexist"
                        onChange={(event)=>handleCheckboxChange(event)}
                        checked={props.flags.sexist}
                    />
                    <label className="form-check-label" htmlFor="programming">
                        sexist
                    </label>
                </div>
                
        </div>
    )
}

const mapStateToProps = (state) => {
    return {flags: state.flags}
}

export default connect(mapStateToProps, {selectFlags})(Flags)