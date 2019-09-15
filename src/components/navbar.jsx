import React from 'react';
import { connect } from 'react-redux';

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/navbar">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/shop">Shop <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/mycart">My cart</a>
                    </li>
                    <li className="nav-item">
                        <div className="badge badge-primary badge-sm">Total Shopping: $ {props.total}</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProp = (state) => {
    return {
        total: state.CartReducer.total
    }
}
export default connect(mapStateToProp)(Navbar);