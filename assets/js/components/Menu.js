import React, { Component } from 'react';

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

export default Menu
