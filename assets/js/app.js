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
        this.props.click(this.props.menu, this.props.item);
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
    render() {
        return (
            <ul className="nav nav-sidebar">
                {
                    this.props.items.map((item, index) => (item.active)
                        ? <SidebarNavEl click={this.props.click} menu={this.props.menu} item={index} name={item.name} active="true" />
                        : <SidebarNavEl click={this.props.click} menu={this.props.menu} item={index} name={item.name} />
                    )
                }
            </ul>
        );
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                [
                    {name: "Overview", active: true},
                    {name: "Reports"},
                    {name: "Analytics"},
                    {name: "Export"},
                ],
                [
                    {name: "Nav item"},
                    {name: "Nav item again"},
                    {name: "One more nav"},
                    {name: "Another nav item"},
                    {name: "More navigation"},
                ],
                [
                    {name: "Nav item again"},
                    {name: "One more nav"},
                    {name: "Another nav item"},
                ],,
                [
                    {name: "Lorem 1"},
                    {name: "Lorem 2"},
                    {name: "Lorem 3"},
                    {name: "Lorem 4"},
                ],
            ]
        };
        this.click = this.click.bind(this);
    }

    click(menuIndex, itemIndex) {
        var state = this.state;
        state.menus.map((items, menuCandidate) => {
            items.map((item, itemCandidate) => {
                item.active = false;
                if (menuIndex == menuCandidate && itemIndex == itemCandidate) {
                    item.active = true;
                }
            });
        });

        this.setState(state);
    }

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar" onClick={this.handleClick}>
                {
                    this.state.menus.map((items, menu) => <SidebarNav click={this.click} menu={menu} items={items} />)
                }
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

                <h2>Section title</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td>dolor</td>
                                <td>sit</td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>amet</td>
                                <td>consectetur</td>
                                <td>adipiscing</td>
                                <td>elit</td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>Integer</td>
                                <td>nec</td>
                                <td>odio</td>
                                <td>Praesent</td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>libero</td>
                                <td>Sed</td>
                                <td>cursus</td>
                                <td>ante</td>
                            </tr>
                            <tr>
                                <td>1,004</td>
                                <td>dapibus</td>
                                <td>diam</td>
                                <td>Sed</td>
                                <td>nisi</td>
                            </tr>
                            <tr>
                                <td>1,005</td>
                                <td>Nulla</td>
                                <td>quis</td>
                                <td>sem</td>
                                <td>at</td>
                            </tr>
                            <tr>
                                <td>1,006</td>
                                <td>nibh</td>
                                <td>elementum</td>
                                <td>imperdiet</td>
                                <td>Duis</td>
                            </tr>
                            <tr>
                                <td>1,007</td>
                                <td>sagittis</td>
                                <td>ipsum</td>
                                <td>Praesent</td>
                                <td>mauris</td>
                            </tr>
                            <tr>
                                <td>1,008</td>
                                <td>Fusce</td>
                                <td>nec</td>
                                <td>tellus</td>
                                <td>sed</td>
                            </tr>
                            <tr>
                                <td>1,009</td>
                                <td>augue</td>
                                <td>semper</td>
                                <td>porta</td>
                                <td>Mauris</td>
                            </tr>
                            <tr>
                                <td>1,010</td>
                                <td>massa</td>
                                <td>Vestibulum</td>
                                <td>lacinia</td>
                                <td>arcu</td>
                            </tr>
                            <tr>
                                <td>1,011</td>
                                <td>eget</td>
                                <td>nulla</td>
                                <td>Class</td>
                                <td>aptent</td>
                            </tr>
                            <tr>
                                <td>1,012</td>
                                <td>taciti</td>
                                <td>sociosqu</td>
                                <td>ad</td>
                                <td>litora</td>
                            </tr>
                            <tr>
                                <td>1,013</td>
                                <td>torquent</td>
                                <td>per</td>
                                <td>conubia</td>
                                <td>nostra</td>
                            </tr>
                            <tr>
                                <td>1,014</td>
                                <td>per</td>
                                <td>inceptos</td>
                                <td>himenaeos</td>
                                <td>Curabitur</td>
                            </tr>
                            <tr>
                                <td>1,015</td>
                                <td>sodales</td>
                                <td>ligula</td>
                                <td>in</td>
                                <td>libero</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
