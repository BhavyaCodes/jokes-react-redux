import React from 'react'

const Form = () => {
    return(
        <form>
            <div className="form-group">
                <h4>Categories:</h4>
                <div className="form-check">
                    <input  
                        className="form-check-input"
                        type="checkbox" value=""
                        id="programming"
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
                    />
                    <label className="form-check-label" htmlFor="pun">
                        Pun
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Form