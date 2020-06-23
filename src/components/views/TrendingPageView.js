import React from "react";
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./styles/TrendingPage.css";
import { trendingArticles } from "../../reducers";

const TrendingPageView = (props) => {
  console.log("The props that were passed down", props);
  // console.log("The articles in the props", props.trendingArticles);
  // console.log("call image url ", props.trendingArticles);
  console.log("Is this an array" , Array.isArray(props.trendingArticles))
  console.log("Type of" , typeof props.trendingArticles)

  let carouselDisplay = props.trendingArticles && props.trendingArticles
    .slice(0, 5)
    .map((article, index) => (
      <Carousel.Item key={article.publishedAt}>
        <Image className="picInCarousel" src={article.urlToImage} />
        <div>
          <Carousel.Caption>
            <h3>{article.title}</h3>
            {/* <button onClick={(event) => props.handleClick(event, index)}>Bookmark Article</button> */}

            <span
              onClick={(event) => props.handleClick(event, index)}
              className="glyphicon glyphicon-bookmark onHoverPointer"
              aria-hidden="true"
            ></span>
            <button
              onClick={(event) => props.readFullArticleClick(event, index)}
              type="button"
              className="btn btn-warning ml-5 mb-3 text-dark"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Read Full Article
            </button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    ));

  let articleCardDisplay = props.trendingArticles && props.trendingArticles
    .slice(6, 8)
    .map((article, index) => (
      <div key={article.publishedAt} className="card">
        <img
          className="card-img-top"
          src={article.urlToImage}
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title text-dark title-font-size">
            {article.title}
          </h5>
        </div>
        {/* <button onClick={(event) => props.handleClick(event, index + 6)}>Bookmark Article</button> */}

        {console.log("list of article ids", article)}
        <span
          onClick={(event) => props.handleClick(event, index + 6)}
          className="glyphicon glyphicon-bookmark onHoverPointer text-dark"
          aria-hidden="true"
        ></span>
        <a
          className="btn btn-flat text-danger p-1 my-1 mr-0 mml-1 collapsed default-font-size"
          data-toggle="collapse"
          href={`#collapseContent${index}`}
          aria-expanded="false"
          aria-controls="collapseContent"
        >
          Read More
        </a>
        <div
          key={article.publishedAt}
          className="collapse"
          id={`collapseContent${index}`}
        >
          <p className="card-text text-dark">{article.description}</p>
          <button
            onClick={(event) => props.readFullArticleClick(event, index + 6)}
            type="button"
            className="btn btn-warning ml-5 mb-3 text-dark"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Read Full Article
          </button>
        </div>
      </div>
    ));

  let displayModal = (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title text-dark" id="exampleModalLongTitle">
              {props.currentArticleSelected.title}
            </h2>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-dark">
            {props.currentArticleSelected.content}

            {/* <iframe class="embed-responsive-item " src={props.currentArticleSelected.url} allowfullscreen></iframe> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <div className="text-dark">
              <a href={props.currentArticleSelected.url} target="_blank" className="ml-3">Go to Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="container">
        <div className="jumbotron-fluid">
          <div className="container">
            <h1 className="title-font-size">Trending News</h1>
            <Carousel className="carousel-slide-display">
              {carouselDisplay}
            </Carousel>
          </div>
        </div>

        <div>{displayModal}</div>

        <div className="container mt-5">
          <div className="card-deck">{articleCardDisplay}</div>
        </div>

        <div className="dummy"></div>
      </div>
    </div>
  );
};

export default TrendingPageView;

