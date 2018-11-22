import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className = "Nav">
                <ul className = "cities-btn">
                    <li><NavLink to = "/beijing"  className = "removehyperlink">Home</NavLink></li>
                    <li><NavLink to = "/chengdu" className = "removehyperlink">Chengdu</NavLink></li>
                    <li><NavLink to = "/xian" className = "removehyperlink">Xi'An</NavLink></li>
                </ul>
            </div>
        )
    }
};

export default Nav;