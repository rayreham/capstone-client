import React, { Component } from 'react';
import axios from 'axios';
import ArticleContainer from './ArticleContainer';


const apiKey = process.env.REACT_APP_NEWS_API_KEY;

class SearchBarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: "",
            articles: [],
            limit: 10
        }
    }

    handleInput = function(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { searchInput, limit } = this.state;
        const endpoint = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiKey}`
        const articles = await axios.get(endpoint)
        this.setState({articles: articles.data.data})
    }

    async componentDidMount(){
        const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        const articles = await axios.get(endpoint)
        this.setState({articles: articles.data.data})
    }

    render(){
        return <div className = "searchField">
                <div className = "searchBar">
                    <form className = "searchForm" onSubmit = { this.handleSubmit}>
                        <div className = "formRow">
                            <label>Enter a search word:</label>
                            <input type = "text" value = { this.state.searchInput} onChange = { this.handleInput("searchInput")}/>
                        </div>
                        <div className = "formRow">
                            <label>Number of articles to return:</label>
                            <input classname = "select-limit" type = "number" value = { this.state.limit } onChange = { this.handleInpt("limit")}/>
                        </div>


                    </form>
                </div>
                <ArticleContainer articles = { this.state.articles}/>
                </div>
    }
}

export default SearchBarContainer