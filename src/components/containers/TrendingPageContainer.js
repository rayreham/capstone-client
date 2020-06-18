import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchTrendingArticlesThunk} from "../../thunks";
import {TrendingPageView} from "../views";

class TrendingPageContainer extends Component {

    componentDidMount(){
        this.props.fetchTrendingArticles();
        console.log("list of states in the store" , this.props.trendingArticles)
    }

    render()
    {
        return(<TrendingPageView trendingArticles={this.props.trendingArticles}/>);
    }
 
}

const mapState = (state) => {
    return{
        trendingArticles: state.trendingArticles
    }
}

const mapDispatch = (dispatch) => {
    return{
        fetchTrendingArticles: () => dispatch(fetchTrendingArticlesThunk())
    }
}

export default connect(mapState, mapDispatch)(TrendingPageContainer);

