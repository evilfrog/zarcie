import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRedux from 'react-redux'
import { createStore } from 'Redux'

//Predefined action types
const types = {
    INIT_SIDEBAR: 'INIT_SIDEBAR',
    ACTIVATE_LIST: 'ACTIVATE_LIST'
}

//Action creators - a.k.a. "logic"
function activateList(menu, item) {
    return {type: types.ACTIVATE_LIST, menu, item};
}
function initSidebar(menus) {
    return {type: types.INIT_SIDEBAR, menus}
}

//XXX: Default state???
const SuperState = {
    activeSidebar: {
        menu: 0,
        item: 0
    },
    menus: []
};

//Reducer(-s?)
var reducer = function(state = SuperState, action) {
    switch (action.type) {
        case types.ACTIVATE_LIST:
            return Object.assign({}, state, {
                activeSidebar: {
                    menu: action.menu,
                    item: action.item
                }
            })
            break;
        case types.INIT_SIDEBAR:
            return Object.assign({}, state, {
                menus: action.menus
            })
            break;
        default:
            return state
            break;
    }
};

//Bind things together
var store = createStore(reducer, SuperState);

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
                <button type="button" className="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" aria-label="Toggle navigation"></button>
                <a className="navbar-brand" href="#">Project name</a>
                <div id="navbar">
                    <nav className="nav navbar-nav float-xs-left">
                        <a className="nav-item nav-link" href="#">Dashboard</a>
                        <a className="nav-item nav-link" href="#">Settings</a>
                        <a className="nav-item nav-link" href="#">Profile</a>
                        <a className="nav-item nav-link" href="#">Help</a>
                    </nav>
                    <form className="float-xs-right">
                        <input type="text" className="form-control" placeholder="Search..." />
                    </form>
                </div>
            </nav>
        );
    }
};

class SidebarNavEl extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        store.dispatch(activateList(this.props.menu, this.props.item));
        // this.props.click(this.props.menu, this.props.item);
    }

    render() {
        if (this.props.active) {
            return (
                <li onClick={this.handleClick} className="active"><a href="#">{this.props.name} <span className="sr-only">(current)</span></a></li>
            );
        }

        return (
            <li onClick={this.handleClick}><a href="#">{this.props.name}</a></li>
        );
    }
}

class SidebarNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }

    render() {
        return (
            <ul className="nav nav-sidebar">
                {
                    this.props.items.map((item, index) => (this.state.activeSidebar.menu == this.props.menu && this.state.activeSidebar.item == index)
                        ? <SidebarNavEl key={ index } click={this.props.click} menu={this.props.menu} item={index} name={item.name} active="true" />
                        : <SidebarNavEl key={ index } click={this.props.click} menu={this.props.menu} item={index} name={item.name} />
                    )
                }
            </ul>
        );
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.click = this.click.bind(this);
    }

    componentDidMount() {
        if (0 == this.state.menus.length) {
            var sidebar = this;
            $.ajax({
                url: "/days.json",
                success: function(data) {
                    sidebar.setState(store.dispatch(initSidebar(data.body)))
                },
                dataType: "json"
            });
        }
    }

    click(menuIndex, itemIndex) {
        // var state = this.state;
        // state.menus.map((items, menuCandidate) => {
        //     items.map((item, itemCandidate) => {
        //         item.active = false;
        //         if (menuIndex == menuCandidate && itemIndex == itemCandidate) {
        //             item.active = true;
        //         }
        //     });
        // });
        //
        // this.setState(state);
    }

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                {
                    this.state.menus.map((items, menu) => <SidebarNav key={ menu } click={this.click} menu={menu} items={items} />)
                }
            </div>
        );
    }
}

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

class Main extends React.Component {
    render() {
        return (
            <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
                <h1>Dashboard</h1>

                <div className="row placeholders">
                    <div className="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-fluid" alt="Generic placeholder thumbnail" />
                        <h4>Label</h4>
                        <span className="text-muted">Something else</span>
                    </div>

                    <div className="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-fluid" alt="Generic placeholder thumbnail" />
                        <h4>Label</h4>
                        <span className="text-muted">Something else</span>
                    </div>

                    <div className="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-fluid" alt="Generic placeholder thumbnail" />
                        <h4>Label</h4>
                        <span className="text-muted">Something else</span>
                    </div>

                    <div className="col-xs-6 col-sm-3 placeholder">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-fluid" alt="Generic placeholder thumbnail" />
                        <h4>Label</h4>
                        <span className="text-muted">Something else</span>
                    </div>
                </div>

                <OrdersList list="2016-11-04" />
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Main />
                </div>
            </div>
        );
    }
};

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <label>Hello, {this.state.value}</label>
                <input
                    type="text"
                    placeholder="Hello!"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
};

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Menu />
                <Content />
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('body')
);
