import React, { Component } from 'react';

class OrdersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
        var component = this;
        $.ajax({
            url: "/order/" + props.list,
            success: function(data) {
                component.setState({orders: data.body})
            },
            dataType: "json"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.props.list}</h2>
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
                            this.state.orders.map((order, index) =>
                                <tr key={ index }>
                                    <td>{ order.what }</td>
                                    <td>{ order.who }</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default OrdersList
