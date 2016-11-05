"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "navbar navbar-dark navbar-fixed-top bg-inverse" },
                React.createElement("button", { type: "button", className: "navbar-toggler hidden-sm-up", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar", "aria-label": "Toggle navigation" }),
                React.createElement(
                    "a",
                    { className: "navbar-brand", href: "#" },
                    "Project name"
                ),
                React.createElement(
                    "div",
                    { id: "navbar" },
                    React.createElement(
                        "nav",
                        { className: "nav navbar-nav float-xs-left" },
                        React.createElement(
                            "a",
                            { className: "nav-item nav-link", href: "#" },
                            "Dashboard"
                        ),
                        React.createElement(
                            "a",
                            { className: "nav-item nav-link", href: "#" },
                            "Settings"
                        ),
                        React.createElement(
                            "a",
                            { className: "nav-item nav-link", href: "#" },
                            "Profile"
                        ),
                        React.createElement(
                            "a",
                            { className: "nav-item nav-link", href: "#" },
                            "Help"
                        )
                    ),
                    React.createElement(
                        "form",
                        { className: "float-xs-right" },
                        React.createElement("input", { type: "text", className: "form-control", placeholder: "Search..." })
                    )
                )
            );
        }
    }]);

    return Menu;
}(React.Component);

;

var SidebarNavEl = function (_React$Component2) {
    _inherits(SidebarNavEl, _React$Component2);

    function SidebarNavEl(props) {
        _classCallCheck(this, SidebarNavEl);

        var _this2 = _possibleConstructorReturn(this, (SidebarNavEl.__proto__ || Object.getPrototypeOf(SidebarNavEl)).call(this, props));

        _this2.handleClick = _this2.handleClick.bind(_this2);
        return _this2;
    }

    _createClass(SidebarNavEl, [{
        key: "handleClick",
        value: function handleClick() {
            this.props.click(this.props.menu, this.props.item);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.active) {
                return React.createElement(
                    "li",
                    { onClick: this.handleClick, className: "active" },
                    React.createElement(
                        "a",
                        { href: "#" },
                        this.props.name,
                        " ",
                        React.createElement(
                            "span",
                            { className: "sr-only" },
                            "(current)"
                        )
                    )
                );
            }

            return React.createElement(
                "li",
                { onClick: this.handleClick },
                React.createElement(
                    "a",
                    { href: "#" },
                    this.props.name
                )
            );
        }
    }]);

    return SidebarNavEl;
}(React.Component);

var SidebarNav = function (_React$Component3) {
    _inherits(SidebarNav, _React$Component3);

    function SidebarNav() {
        _classCallCheck(this, SidebarNav);

        return _possibleConstructorReturn(this, (SidebarNav.__proto__ || Object.getPrototypeOf(SidebarNav)).apply(this, arguments));
    }

    _createClass(SidebarNav, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "ul",
                { className: "nav nav-sidebar" },
                this.props.items.map(function (item, index) {
                    return item.active ? React.createElement(SidebarNavEl, { click: _this4.props.click, menu: _this4.props.menu, item: index, name: item.name, active: "true" }) : React.createElement(SidebarNavEl, { click: _this4.props.click, menu: _this4.props.menu, item: index, name: item.name });
                })
            );
        }
    }]);

    return SidebarNav;
}(React.Component);

var Sidebar = function (_React$Component4) {
    _inherits(Sidebar, _React$Component4);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this5 = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this5.state = {
            menus: []
        };

        var sidebar = _this5;
        $.ajax({
            url: "/days.json",
            success: function success(data) {
                sidebar.setState({ menus: data.body });
            },
            dataType: "json"
        });
        // this.state = {
        //     menus: [
        //         [
        //             {name: "Overview", active: true},
        //             {name: "Reports"},
        //             {name: "Analytics"},
        //             {name: "Export"},
        //         ],
        //         [
        //             {name: "Nav item"},
        //             {name: "Nav item again"},
        //             {name: "One more nav"},
        //             {name: "Another nav item"},
        //             {name: "More navigation"},
        //         ],
        //         [
        //             {name: "Nav item again"},
        //             {name: "One more nav"},
        //             {name: "Another nav item"},
        //         ],,
        //         [
        //             {name: "Lorem 1"},
        //             {name: "Lorem 2"},
        //             {name: "Lorem 3"},
        //             {name: "Lorem 4"},
        //         ],
        //     ]
        // };
        _this5.click = _this5.click.bind(_this5);
        return _this5;
    }

    _createClass(Sidebar, [{
        key: "click",
        value: function click(menuIndex, itemIndex) {
            var state = this.state;
            state.menus.map(function (items, menuCandidate) {
                items.map(function (item, itemCandidate) {
                    item.active = false;
                    if (menuIndex == menuCandidate && itemIndex == itemCandidate) {
                        item.active = true;
                    }
                });
            });

            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            return React.createElement(
                "div",
                { className: "col-sm-3 col-md-2 sidebar", onClick: this.handleClick },
                this.state.menus.map(function (items, menu) {
                    return React.createElement(SidebarNav, { click: _this6.click, menu: menu, items: items });
                })
            );
        }
    }]);

    return Sidebar;
}(React.Component);

var Main = function (_React$Component5) {
    _inherits(Main, _React$Component5);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col-sm-9 offset-sm-3 col-md-10 offset-md-2 main" },
                React.createElement(
                    "h1",
                    null,
                    "Dashboard"
                ),
                React.createElement(
                    "div",
                    { className: "row placeholders" },
                    React.createElement(
                        "div",
                        { className: "col-xs-6 col-sm-3 placeholder" },
                        React.createElement("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", width: "200", height: "200", className: "img-fluid", alt: "Generic placeholder thumbnail" }),
                        React.createElement(
                            "h4",
                            null,
                            "Label"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-muted" },
                            "Something else"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-6 col-sm-3 placeholder" },
                        React.createElement("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", width: "200", height: "200", className: "img-fluid", alt: "Generic placeholder thumbnail" }),
                        React.createElement(
                            "h4",
                            null,
                            "Label"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-muted" },
                            "Something else"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-6 col-sm-3 placeholder" },
                        React.createElement("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", width: "200", height: "200", className: "img-fluid", alt: "Generic placeholder thumbnail" }),
                        React.createElement(
                            "h4",
                            null,
                            "Label"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-muted" },
                            "Something else"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-6 col-sm-3 placeholder" },
                        React.createElement("img", { src: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", width: "200", height: "200", className: "img-fluid", alt: "Generic placeholder thumbnail" }),
                        React.createElement(
                            "h4",
                            null,
                            "Label"
                        ),
                        React.createElement(
                            "span",
                            { className: "text-muted" },
                            "Something else"
                        )
                    )
                ),
                React.createElement(
                    "h2",
                    null,
                    "Section title"
                ),
                React.createElement(
                    "div",
                    { className: "table-responsive" },
                    React.createElement(
                        "table",
                        { className: "table table-striped" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    null,
                                    "#"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Header"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Header"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Header"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Header"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,001"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Lorem"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "ipsum"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "dolor"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "sit"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,002"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "amet"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "consectetur"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "adipiscing"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "elit"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,003"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Integer"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "nec"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "odio"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Praesent"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,003"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "libero"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Sed"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "cursus"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "ante"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,004"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "dapibus"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "diam"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Sed"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "nisi"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,005"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Nulla"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "quis"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "sem"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "at"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,006"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "nibh"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "elementum"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "imperdiet"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Duis"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,007"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "sagittis"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "ipsum"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Praesent"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "mauris"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,008"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Fusce"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "nec"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "tellus"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "sed"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,009"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "augue"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "semper"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "porta"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Mauris"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,010"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "massa"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Vestibulum"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "lacinia"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "arcu"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,011"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "eget"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "nulla"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Class"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "aptent"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,012"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "taciti"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "sociosqu"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "ad"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "litora"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,013"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "torquent"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "per"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "conubia"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "nostra"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,014"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "per"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "inceptos"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "himenaeos"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "Curabitur"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1,015"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "sodales"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "ligula"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "in"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "libero"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Main;
}(React.Component);

var Content = function (_React$Component6) {
    _inherits(Content, _React$Component6);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Sidebar, null),
                    React.createElement(Main, null)
                )
            );
        }
    }]);

    return Content;
}(React.Component);

;

var Bar = function (_React$Component7) {
    _inherits(Bar, _React$Component7);

    function Bar(props) {
        _classCallCheck(this, Bar);

        var _this9 = _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).call(this, props));

        _this9.state = { value: '' };
        _this9.handleChange = _this9.handleChange.bind(_this9);
        return _this9;
    }

    _createClass(Bar, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "label",
                    null,
                    "Hello, ",
                    this.state.value
                ),
                React.createElement("input", {
                    type: "text",
                    placeholder: "Hello!",
                    value: this.state.value,
                    onChange: this.handleChange
                })
            );
        }
    }]);

    return Bar;
}(React.Component);

;

var App = function (_React$Component8) {
    _inherits(App, _React$Component8);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "app" },
                React.createElement(Menu, null),
                React.createElement(Content, null)
            );
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('body'));