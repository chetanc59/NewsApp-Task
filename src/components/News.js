import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalresults] = useState(0);
    const componentDidMount = async () => {
        props.setProgress(10);
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=1&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalresults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        componentDidMount();
    },[]);

    const handleprevious = async () => {
        props.setProgress(10);
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country
            }&category=${props.category}&apiKey=${props.api_key}&page=${page - 1
            }&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setPage(page - 1);
        setLoading(false);
        props.setProgress(100);
    };
    const handlenext = async () => {
        props.setProgress(10);
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country
            }&category=${props.category}&apiKey=${props.api_key}&page=${page + 1
            }&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setPage(page + 1);
        setLoading(false);
        console.log(parsedData);
        props.setProgress(100);
    };
    return (
        <div className="container mt-5">
            <h1 className="text-center ">
                NewsRead - Top{" "}
                {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
                Headlines
            </h1>
            <div className="d-flex justify-content-center align-items-center py-2">
                {" "}
                {loading && <Spinner />}
            </div>
            <div className="row py-5">
                {!loading &&
                    articles.map((element) => {
                        return (
                            <div
                                className="col-sm-3 col-md-3 col-lg-4 my-3"
                                key={element.url}
                            >
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 20) : ""}
                                    description={
                                        element.description ? element.description.slice(0, 88) : ""
                                    }
                                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                                    newsUrl={element.url ? element.url : ""}
                                    author={element.author}
                                    publishedAt={element.publishedAt}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="container py-5 d-flex justify-content-between">
                <button
                    disabled={page <= 1}
                    className="btn btn-dark"
                    onClick={handleprevious}
                >
                    {" "}
                    &larr; Previous
                </button>
                <button className="btn btn-dark" disabled = {page >= 6} onClick={handlenext}>
                    {" "}
                    Next &rarr;{" "}
                </button>
            </div>
        </div>
    );
}

News.defaultProps = {
    country: "in",
    category: "sports",
    pageSize: 6,
};

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
};

export default News;
