import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const layoutStyle = {
    backgroundColor: '#BAF2D7',
    height: "100px",
    display: "flex",
    justifyContent: "center"
};
export default function footer() {
    return (
        <div style={layoutStyle}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ height: "100px", display: "flex", alignItems: "center" }}>halo</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
