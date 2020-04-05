import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
export default function NewsCarousel({ articles }) {
    return (
        <Carousel style={{ marginBottom: "20px" }}>
            {articles.map(article => (
                <Carousel.Item>
                    <a href={article.url} target="_blank" >
                        <img style={{ height: "500px" }}
                            className="d-block w-100"
                            src={article.urlToImage}
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: "black" }}>{article.title}</h3>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
