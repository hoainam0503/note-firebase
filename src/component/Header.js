import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="mb-4">
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <button className=" btn btn-warning navbar-brand" >Navbar</button>
            <button className="btn-block btn btn-warning navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item active">
                    <button className="nav-link btn-block btn btn-warning" >Home <span className="sr-only">(current)</span></button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn-block btn btn-warning" >Link</button>
                </li>
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btn-block btn btn-warning"  id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <button className="dropdown-item btn-block btn btn-warning" >Action 1</button>
                    <button className="dropdown-item btn-block btn btn-warning" >Action 2</button>
                    </div>
                </li>
                </ul>
            </div>
            </nav>     
            </div>
        );
    }
}

export default Header;