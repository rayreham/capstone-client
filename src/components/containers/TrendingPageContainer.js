import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchTrendingArticlesThunk, saveTrendingArticleThunk} from "../../thunks";
import {TrendingPageView} from "../views";

class TrendingPageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentArticleSelected : {}
        }
    }

    componentDidMount(){
        this.props.fetchTrendingArticles();
 
    }


    handleClick = (e , index) => {
        e.preventDefault();

        this.props.saveTrendingArticle(this.props.trendingArticles[index] , this.props.userLoggedInId)
        alert("adding to bookmark");

    }

    handleReadFullArticleClick = (e, index) => {
        this.setState({currentArticleSelected: this.props.trendingArticles[index]})
  
    }

    notifyClick = (e) => {
        e.preventDefault();
 
        alert("clickd read more");

    }

    render()
    {
        return(<TrendingPageView trendingArticles={this.props.trendingArticles} bookmarkArticles={this.props.bookmarkArticles} readFullArticleClick={this.handleReadFullArticleClick} handleClick={this.handleClick} currentArticleSelected={this.state.currentArticleSelected}/>);
    }
 
}

const mapState = (state) => {
    return{
       trendingArticles:state.articles.trendingArticles, 
       bookmarkArticles:state.articles.bookmarkArticles,
       userLoggedInId:state.user.id
    }
}

const mapDispatch = (dispatch) => {
    return{
        fetchTrendingArticles: () => dispatch(fetchTrendingArticlesThunk()),
        
        saveTrendingArticle: (article , userId) => dispatch(saveTrendingArticleThunk(article ,userId))
    }
}

export default connect(mapState, mapDispatch)(TrendingPageContainer);

