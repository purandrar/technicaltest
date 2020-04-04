import React from 'react'
import Layout from '../components/layout'
import NewsCard from './NewsCard'
import { Container, Row, Col } from 'react-bootstrap'
import Headline from '../components/Headline'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NewsSection(props) {
    return (
        <Container>
            <Row>
                <Col lg={8} style={{ display: "flex", alignItems: "center", padding: "20px" }} >
                    <Headline headline={props.headline} ></Headline>
                </Col>
                <Col lg={4} style={{ display: "flex", alignItems: "center" }} >
                    <ul style={{ padding: "30px" }}>
                        {props.articles.map(article => (
                            <NewsCard article={article} />
                        ))}
                    </ul>
                </Col>
            </Row>
            < style jsx > {`
               
            `} </style >
        </Container >
    )
}
