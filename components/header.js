import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
    return (
        <div style={{ backgroundColor: " #D7F2E5", }}>
            <Container>
                <Row>
                    <Col>
                        <Navbar style={{ height: "120px", display: "flex", alignItems: "flex-end" }} collapseOnSelect expand="lg">
                            <Link href="/" passHref><Navbar.Brand style={{ fontSize: "25px" }} >Business</Navbar.Brand></Link>
                            <Link href="/techPage" passHref><Navbar.Brand style={{ fontSize: "25px" }} >Technology</Navbar.Brand></Link>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
