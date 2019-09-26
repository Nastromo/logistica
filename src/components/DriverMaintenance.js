import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientsList from './ClientsList';
import DriverSets from './DriverSets';




export class DriverMaintenance extends Component {
    

    render() {
        return (
            <div className="flex marfgj">
                <ClientsList />
                <DriverSets />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DriverMaintenance)
