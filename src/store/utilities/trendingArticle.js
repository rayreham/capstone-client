import axios from "axios"

//ACTION TYPE
const FETCH_TRENDING_ARTICLE = "FETCH_TRENDING_ARTICLE"

//ACTION CREATORS
const fetchTrendingArticle = (articles) => {
    console.log("in action creator log the articles fetched from api" , articles)
    return{ 
        type: FETCH_TRENDING_ARTICLE,
        payload: articles
    }
}


//THUNK CREATOR
export const fetchTrendingArticlesThunk = () => (dispatch) => {
    
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const trendingUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

    return axios
     .get(trendingUrl)
    .then((response) => {
        const data = response.data.articles;

        dispatch(fetchTrendingArticle(data))
    })
    .catch((err) => console.log(err));
}

//REDUCER
const reducer = (state = [], action) => {
    switch(action.type){
        case FETCH_TRENDING_ARTICLE:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;