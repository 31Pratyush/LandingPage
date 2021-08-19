import React from 'react';
import {Navbar,Container } from 'react-bootstrap'

function Head() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Landing Page
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
} export default Head;