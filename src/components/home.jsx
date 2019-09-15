import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddToCart from '../store/actions/cartAction';

import './home.css';

class Home extends Component {
    render() {
        const styles = {
            width: '18rem'
        }
        return (
            <div className="container">
                <h3>Our Products</h3>
                <ul className="products">
                    {this.props.items.map(itm =>
                        <li className="product" key={itm.id}>
                            <div className="card" style={styles}>
                                <div className="card-body">
                                    <h5 className="card-title">{itm.title}</h5>
                                    <p className="card-text">{itm.desc}</p>
                                    <button className="btn btn-primary btn-sm"
                                        onClick={() => this.props.fromProdListToCart(itm.id)}>Add</button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.CartReducer.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fromProdListToCart: (id) => {
            dispatch(AddToCart(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);