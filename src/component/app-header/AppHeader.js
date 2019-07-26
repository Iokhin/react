import React from "react";
import logo from './tm-symbol.jpg';

const AppHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={logo} width="40" height="40"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile<span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tasks</a>
                    </li>
                </ul>
                <span className="nav-item">
                   <a className="nav-link" href="#">Log in</a>
                  {/*<a className="nav-link" href="#">Log out</a>*/}
                </span>
                <span className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                  </span>
            </div>
        </nav>
    );
};

export default AppHeader;