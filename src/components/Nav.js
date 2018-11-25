import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className = "Nav">
                <NavLink to = "/homepage" className = "removehyperlink">Home</NavLink>
                <NavLink to = "/beijing" className = "removehyperlink">Beijing</NavLink>
                <NavLink to = "/chengdu" className = "removehyperlink">Chengdu</NavLink>
                <NavLink to = "/shaanxi" className = "removehyperlink">Xi'An/Yan'An</NavLink>
                <NavLink to = "/anhui" className = "removehyperlink">Huangshan</NavLink>
                <NavLink to = "/suhanglu" className = "removehyperlink">Hangzhou/Suzhou/Shanghai</NavLink>
                <NavLink to = "/jeju" className = "removehyperlink">Jeju</NavLink>
                <NavLink to = "/seoul" className = "removehyperlink">Seoul</NavLink>
                <NavLink to = "/qingdao" className = "removehyperlink">Qingdao</NavLink>
            </div>
        )
    }
};

export default Nav;