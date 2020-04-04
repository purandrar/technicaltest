import React from 'react'
import Layout from '../components/layout'

export default function NewsSection(props) {
    return (
        <>
            <ul>
                {props.articles.map(article => (
                    <li>
                        <a href={article.url} target="_blank">{article.title}</a>
                    </li>
                ))}
            </ul>
        </>
    )
}
