import React from 'react';
import {Navbar} from 'react-bootstrap';

const header = (props) => {
    
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Users</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Users Information
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default header;