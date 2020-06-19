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

        //saveTrendingArticle(this.props.trendingArticles[index])
        alert("adding to bookmark");

    }

    render()
    {
        console.log("access article by index" , this.props.trendingArticles[1])
        return(<TrendingPageView trendingArticles={this.props.trendingArticles} handleClick={this.handleClick}/>);
    }
 
}

const mapState = (state) => {
    return{
        trendingArticles: state.trendingArticles
    }
}

const mapDispatch = (dispatch) => {
    return{
        fetchTrendingArticles: () => dispatch(fetchTrendingArticlesThunk()),
        //in save trendingarticlethunk, might need to pass in the user id that it came from
        saveTrendingArticle: (article) => dispatch(saveTrendingArticleThunk(article))
    }
}

export default connect(mapState, mapDispatch)(TrendingPageContainer);

