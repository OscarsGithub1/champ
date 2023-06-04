import { Badge, Container, Dropdown, Form, FormControl, Navbar, Nav, } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link href="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl
                style={{width:500}}
                placeholder="Search a product"
                className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <DropdownToggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge>{10}</Badge>
                    </DropdownToggle>

                    <Dropdown.Menu style={{minWidth:370}}>
                        <span style={{padding: 10 }}>Cart is empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
};

export default Header