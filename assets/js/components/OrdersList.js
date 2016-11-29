import React, { Component } from 'react';
import { connect } from 'react-redux'

class OrdersList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var list = <tr><td colSpan="2">...empty...</td></tr>

        if (this.props.list.data.length > 0) {
            list = this.props.list.data.map((order, index) =>
                <tr key={ index }>
                    <td>{ order.what }</td>
                    <td>{ order.who }</td>
                </tr>
            )
        }

        return (
            <div>
                <h2>{this.props.list.name}</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Co</th>
                                <th>Kto</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            list
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list,
    };
}

export default connect(mapStateToProps)(OrdersList)
