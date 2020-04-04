import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NewsCard({ article }) {
    return (
        <>
            <Col>
                <li>
                    <a href={article.url} target="_blank">
                        {article.title.split("-")[0]}
                    </a>
                </li>
            </Col>
            < style jsx > {`
                li{
                    font-size:12px
                }
            `} </style >
        </>
    )

}
