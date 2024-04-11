import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalresults] = useState(0);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');


    const fetchArticles = async () => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=1&pageSize=${props.pageSize}`;
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalresults(parsedData.totalResults);
    };
    useEffect(() => {
        if (loggedIn) {
            fetchArticles();
        }
    },[loggedIn]);

    const handlePrevious = async () => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page - 1}&pageSize=${props.pageSize}`;
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setPage(page - 1);
    };

    const handleNext = async () => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setPage(page + 1);
    };

    const handleLogin = () => {
        let username = document.querySelector('#user').value;
        let password = document.querySelector('#password').value;

        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.setItem('loggedIn', 'false');
        setLoggedIn(false);
    };


    return (
        <div className="container mt-5">
            {loggedIn ? (
                <React.Fragment>
                    <h1 className="text-center">
                        NewsRead - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
                    </h1>
                    <div className="row py-5">
                        {articles.map((element) => (
                            <div className="col-sm-3 col-md-3 col-lg-4 my-3" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 20) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                                    newsUrl={element.url ? element.url : ""}
                                    author={element.author}
                                    publishedAt={element.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="container py-5 d-flex justify-content-between">

                        <button disabled={page <= 1} className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        <button disabled={page >= 6} className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
                    </div>
                </React.Fragment>
            ) : (
                <form className="container d-flex justify-content-center align-item-center">
                    <div className="text-center  col-md-6 col-sm-6 col-lg-6">
                        <h1>Please login to view the news</h1>
                        <div className="form-group">
                            <input type="email" className="form-control" id="user" aria-describedby="emailHelp" placeholder="Enter email" /><br />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default News;
