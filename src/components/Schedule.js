import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckBox from './Checkbox';




export class Schedule extends Component {


    render() {
        return (
            <div>
                <div className="flex smo">
                    <p className="smani">Schedule</p>
                    <p className="smani">Open</p>
                    <p className="smani">Close</p>
                    <p className="smani">Driver</p>
                    <p className="smani">Notes</p>
                </div>
                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Mon</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Tue</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Wed</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Thu</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Fri</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Sat</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex algn-center margeed">
                    <div className="flex algn-center bas20">
                        <p className="marg-tty">Sun</p>
                        <CheckBox status={this.props.status} title="" id="orderSet" />
                    </div>
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                    <input className="small-input" type="text" />
                </div>

                <div className="flex margiop">
                    <div className="bas25">
                        <CheckBox status={this.props.status} title="Key" id="orderSet" />
                    </div>

                    <div className="bas25">
                        <CheckBox status={this.props.status} title="In-house" id="orderSet" />
                    </div>

                    <div className="bas25">
                        <CheckBox status={this.props.status} title="Box outside" id="orderSet" />
                    </div>
                </div>

                <p className="re-tit">Instructions</p>
                <textarea
                    className="gross-other"
                    value={this.props.elem ? this.props.elem : ""}
                    onChange={this.props.changeInstruct}
                ></textarea>
                <div className="flex ju-end mar-top-20"><div className="green-btn">Update</div></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)
