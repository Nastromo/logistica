import React, { Component } from 'react';
import { connect } from 'react-redux';
import DriverList from './DriverList';
import DriverSettings from './DriverSettings';




export class Main extends Component {


    render() {
        return (
            <div className="flex main-d">
                <DriverList />
                <DriverSettings />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    acc: {},
    isLoadAcc: state.searchLoading.accessions,
    searchAcc: state.searchQuery.accessions,
    accessions: state.searchResults.accessions,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
