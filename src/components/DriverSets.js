import React, { Component } from 'react';
import { connect } from 'react-redux';
import Schedule from './Schedule';




export class DriverSets extends Component {
    

    render() {
        return (
            <div className="sqrt width100">
                <div className="flex">
                    <div className="basis50">
                        <p className="re-tit">ID:</p>
                        <p className="re-tit">NAME:</p>
                    </div>
                    <div className="basis50">
                        <p className="adresf">Address line #1</p>
                        <p className="adresf">Address line #2</p>
                        <p className="adresf">Phone line #3</p>
                    </div>
                </div>

                <Schedule />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverSets)
