import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchTrendingArticlesThunk, saveTrendingArticleThunk} from "../../thunks";
import {TrendingPageView} from "../views";

class TrendingPageContainer extends Component {

    componentDidMount(){
        this.props.fetchTrendingArticles();
        console.log("list of states in the store" , this.props.trendingArticles)


    }


    handleClick = (e , index) => {
        e.preventDefault();
        //this.props.sendArticle({this.props.trendingArticles[1]})
        //this.props.sendArticle(this.props.trendingArticles[index])

        //sending correct article indeces, now just need to make the thunk, and pass this to the thunk
        console.log("the article index clicked" , index)
        console.log("the article index clicked" , this.props.trendingArticles[index])

        this.props.saveTrendingArticle(this.props.trendingArticles[index])
        alert("adding to bookmark");

    }

    notifyClick = (e) => {
        e.preventDefault();
        //this.props.sendArticle({this.props.trendingArticles[1]})
        //this.props.sendArticle(this.props.trendingArticles[index])

        console.log("read more was pressed" , e.target)
        //saveTrendingArticle(this.props.trendingArticles[index])
        alert("clickd read more");

    }

    render()
    {
        return(<TrendingPageView trendingArticles={this.props.trendingArticles} notifyClick={this.notifyClick} handleClick={this.handleClick}/>);
    }
 
}

const mapState = (state) => {
    return{
        trendingArticles: state.trendingArticles
    }
}

const mapDispatch = (dispatch) => {
    console.log()
    return{
        fetchTrendingArticles: () => dispatch(fetchTrendingArticlesThunk()),
        //in save trendingarticlethunk, might need to pass in the user id that it came from
        
        saveTrendingArticle: (article) => dispatch(saveTrendingArticleThunk(article))
    }
}

export default connect(mapState, mapDispatch)(TrendingPageContainer);

