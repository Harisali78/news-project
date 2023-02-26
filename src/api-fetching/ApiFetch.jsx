import React, { useEffect, useState } from "react";
import "./style.css";
const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=461b2486b8034d3681ce7b1d69d836f9";
const ApiFetch = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data.articles);
    console.log(data);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  const removeNews = (title) => {
    const singleNews = news.filter((myNews) => myNews.title !== title);
    setNews(singleNews);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <h1>News</h1>
        <h1>Headlines : {news.length}</h1>
      </div>
      <main className="news">
        {news.map((myNews) => {
          return (
            <div className="headlines" key={myNews.title}>
              <img src={myNews.urlToImage} alt="" />
              <h3>{myNews.title.substring(0, 50)}...</h3>
              <p>{myNews.description}</p>
              <footer>
                <h5>{myNews.author}</h5>
                <a href={myNews.url} target="_blank">
                  Read more
                </a>
              </footer>
              <button
                className="removeBtn"
                onClick={() => removeNews(myNews.title)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default ApiFetch;
