import React, { Component } from "react";
import axios from 'axios';


//Search Functionality
const Search = (props) => {
    return(
        <div className="search">
            <input value={props.value} onChange={props.onChange} />
            <button onClick={props.onSearch}>Search</button>
        </div>
    )
}


//Searchbar in the navbar
class SearchbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: "",
            state: "searching",
            articles: this.props.articles,
            order: "default",
            countryInput: "",
            countryResults: []
        }
    }

    handleChange(word) {
        this.setState({word});
        this.props.onSearchChange(word);
        console.log(this.state.word)
        this.componentDidMount(word)
    }

    componentDidMount(word){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}` + this.state.word).then(res => {
            console.log(res);
            this.setState({ word: res.data })
        })
    }

    search(result) {
        this.props.onSearch(this.state.word); {
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`).then.((response) => {
                this.setState({ articles: response.data ["data"], state: "searching"})
        });
    }
        console.log('Result: ')
    }

    pressEnter = (event) => {
        if(event.key) === 'Enter') {
            this.search();
        }
    }





    handleInput = (event) => {
        this.setState({ countryInput: event.target.value});
    }

    handleSearch = () => {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const countryInput = this.state.countryInput;
        const searchUrl = "https://newsapi.org/v2/top-headlines?country=" + countryInput + "&apiKey=" + apiKey;
    
        axios.get(searchUrl).then((response) => {
            const data = response.data.data;
            console.log(data);
            this.setState({ countryResults: data });
        })

        .catch((err) => {
            console.log(err)
        });
    }

//https://newsapi.org/v2/top-headlines?country=us&apiKey=THIS_IS_AN_APIKEY

    render() {
        return (
            <div className = "search" type = "submit">
                <input onWordChange = { event => this.handleChange(event.target.value)} onKeyPress={this.pressEnter} />
                <button onClick={this.search}>Search</button>

                <Search
                    value = { this.state.countryInput }
                    onChange = { this.handleInput }
                    onSearch = { this.handleSearch }
                />
            
            </div>

        );

    }

}

export default Search;
export default SearchbarContainer;

