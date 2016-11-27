import React, { Component } from 'react';
import OrdersList from './OrdersList'

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

export default Main
