import React from "react";
import { Link } from "react-router-dom";

const UserProfileView = (props) => {
  let displayBookmarks;

  if (props.user.articles) {
    displayBookmarks = props.user.articles.map((articleInBookmark, index) => (
      <div key={articleInBookmark.id} className="card">
        {/* {articleInBookmark.headline} */}
        
          <img
            className="card-img-top"
            src={articleInBookmark.imageUrl}
            alt={articleInBookmark.headline}
          />
          <div className="card-body">
            <h5 className="card-title text-dark title-font-size">
              {articleInBookmark.headline}
            </h5>
          </div>
          <a
          className="btn btn-flat text-danger p-1 my-1 mr-0 mml-1 collapsed default-font-size"
          data-toggle="collapse"
          href={`#collapseContent${index}`}
          aria-expanded="false"
          aria-controls="collapseContent"
        >
          Read More
        </a>
        <div key={articleInBookmark.index} className="collapse" id={`collapseContent${index}`}>
          <p className="card-text text-dark">{articleInBookmark.description}</p>
        </div>

      
      </div>
    ));
  } else
    displayBookmarks = <div>There are no articles that were bookmarked.</div>;

  return (
    <div>
      <div>
        <h1>
          {props.user.firstName} {props.user.lastName}
        </h1>
        <h2>{props.user.email}</h2>
        <h3>{props.user.userName}</h3>
        
        <div className="container mt-5">
          <div className="card-deck">{displayBookmarks}</div>
        </div>
        {/* <img src={props.student.imageUrl} alt={props.student.firstName} width="200px" /> */}
      </div>
    </div>
  );
};

export default UserProfileView;
