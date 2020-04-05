import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Headline({ headline }) {
    return (
        <a href={headline.url} target="_blank" style={{ color: "black" }}>
            <Card className="bg-dark text-white">
                <Card.Img src={headline.urlToImage} alt="Card image" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
            </Card>
            <h5 style={{ textAlign: "center" }}>{headline.title.split("-")[0]}</h5>
        </a>
    )
}
