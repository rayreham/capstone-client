import React from 'react';
import PropTypes from 'prop-types'


function ArticleContainer(props){
    return <div className="articleloaded">
              {props.articles.length > 0 ?
                  props.articles.map((article, index) => {
                    return (<div className="article" key={index}>
                              <img src={article.images.downsized.url} alt="article" height={150}></img>
                           </div>)
                  })
                :
                <p>Loading</p>
              }
           </div>
}

ArticleContainer.propTypes = {
  articles:PropTypes.array.isRequired
}

export default ArticleContainer;

