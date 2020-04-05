import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap'
export default function NewsCard({ article }) {
    return (
        <Col lg={3} sm={6} md={4} xs={12} style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <a href={article.url} target="_blank" style={{ color: "black" }}>
                <Card border="info" style={{ height: "100%", width: '18rem' }}>
                    <Card.Img style={{ height: '150px', width: "100%" }} variant="top" src={article.urlToImage} />
                    <Card.Body>
                        <Card.Text>
                            {article.title.split("-")[0]}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    )
}
