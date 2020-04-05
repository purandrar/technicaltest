import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import NewsSection from '../components/NewsSection'
import NewsDeck from '../components/NewsDeck'
import NewsCarousel from '../components/NewsCarousel'
const Index = props => (
    <Layout>
        <NewsCarousel style={{ margin: "30px" }} articles={props.newsUs} />
        <NewsDeck style={{ margin: "30px" }} articles={props.newsId} />
        <NewsSection style={{ margin: "30px" }} headline={props.headlineSg} articles={props.newsSg} />
    </Layout>
);

Index.getInitialProps = async function () {
    const resId = await fetch('http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac');
    const resUs = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac');
    const resSg = await fetch('http://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=72aa24ac8bbf4a1aa302891fbde1d0ac');
    const dataId = await resId.json();
    const dataUs = await resUs.json();
    const dataSg = await resSg.json();
    const newsId = dataId.articles.slice(0, 8)
    const newsUs = dataUs.articles.slice(0, 8)
    const newsSg = dataSg.articles.slice(1, 8)
    return {
        headlineUs: dataUs.articles[0],
        headlineSg: dataSg.articles[0],
        newsUs,
        newsId,
        newsSg,
    };
};
export default Index