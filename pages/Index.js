import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import NewsSection from '../components/NewsSection'

const Index = props => (
    <Layout>
        <h1>Headline</h1>
        <NewsSection articles={props.newsUs} />
        <NewsSection articles={props.newsUs} />
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch('http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac');
    const data = await res.json();
    const newsUs = data.articles.slice(0, 8)
    console.log(`Show data fetched. Count: ${newsUs.length}`);

    return {
        newsUs
    };
};

export default Index;
// export default function Index(props) {
//     return (
//         <Layout>
//             <h1>Batman TV Shows</h1>
//             <ul>
//                 {props.shows.map(show => (
//                     <li key={show.id}>
//                         <Link href="/p/[id]" as={`/p/${show.id}`}>
//                             <a>{show.name}</a>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             {/* <p>Hello Next.js</p> */}
//         </Layout>
//     )
// }
