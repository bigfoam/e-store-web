import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router";
import { Navbar, NavBrand, CollapsibleNav, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class Navigation extends React.Component {

    render() {
        return (
            <Navbar toggleNavKey={0}>
                <NavBrand><Link to="/">E-Store Web</Link></NavBrand>
                <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                    <Nav navbar>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="collapsible-nav-dropdown">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav navbar right>
                        <LinkContainer to="/login"><NavItem eventKey={1}>登陆/注册</NavItem></LinkContainer>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </CollapsibleNav>
            </Navbar>
        );
    }
}