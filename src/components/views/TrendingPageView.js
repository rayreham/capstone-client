import React from 'react';
import {Carousel} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import './styles/TrendingPage.css'

const TrendingPageView = (props) => {
    console.log("The props that were passed down" , props);
    console.log("The articles in the props" ,props.trendingArticles)
    console.log("call image url ", props.trendingArticles)

    let carouselDisplay = props.trendingArticles.slice(0 , 5).map((article) => (
      <Carousel.Item key={article.id}>
        <Image className="picInCarousel" src={article.urlToImage} />
        <Carousel.Caption>
          <h3>{article.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))

    let articleCardDisplay = props.trendingArticles.slice(6 , 8).map((article) => (
    
    <div className="card">
    <img className="card-img-top" src={article.urlToImage} alt={article.title} />
    <div className="card-body">
      <h5 className="card-title text-dark">{article.title}</h5>
    </div>

    <a className="btn btn-flat text-danger p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent">Read More</a>
    <div class="collapse" id="collapseContent">
      <p className="card-text text-dark">{article.description}</p>
    </div>
  </div>
  
    ))
  

    return (

      <div className="container">
      <div className="jumbotron-fluid">
        <div className="container">
          <h1>Trending News</h1>
          <Carousel className="carousel-slide-display">
              {carouselDisplay}
          </Carousel>
        </div>
      </div>

      <div className="container mt-5">
      <div className="card-deck">
        {articleCardDisplay}
      </div>
      </div>
      </div>
    )
}



export default TrendingPageView;

{/* <div>
                            
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100" src={props.trendingArticles.urlToImage} alt={props.trendingArticles.title} />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src={props.trendingArticles.urlToImage} alt={props.trendingArticles.title} />
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src={props.trendingArticles.urlToImage} alt={props.trendingArticles.title} />
    </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</a>
</div>
                            
</div> */}