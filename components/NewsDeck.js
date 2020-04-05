import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import NewsCard from './NewsCard'
export default function NewsDeck({ country, articles }) {
    return (
        <Container>
            <Row>
                <Col style={{ display: "flex", alignItems: "center", paddingLeft: "20px", paddingTop: "20px" }} >
                    <h1> {country}</h1>
                </Col>
            </Row>
            <Row>
                {articles.map(article => (
                    <NewsCard article={article}></NewsCard>
                ))}
            </Row>
        </Container>
    )
}
