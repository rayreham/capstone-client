import axios from "axios"

//ACTION TYPE
const FETCH_TRENDING_ARTICLE = "FETCH_TRENDING_ARTICLE"
const SAVE_TRENDING_ARTICLE = "SAVE_TRENDING_ARTICLE"

//Im sending in the article in params, but i need to update the user based on their id

//ACTION CREATORS
const fetchTrendingArticle = (articles) => {
    console.log("in action creator log the articles fetched from api" , articles)
    return{ 
        type: FETCH_TRENDING_ARTICLE,
        payload: articles
    }
}

const saveTrendingArticle = (trendingArticle) => {
    return{
        type: SAVE_TRENDING_ARTICLE,
        payload: trendingArticle
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

//new request thunk onclick that would be passed, and the object .put("/users/`${id}`" , articleInfo).
export const saveTrendingArticleThunk = ({/*userId*/} , article) => (dispatch) => {

    return axios
    // .put(`/api/users/${id}` , index)
    .put(`/api/users/` , article)
    .then((res) => console.log(res.data))
    .then((updatedUserBookMark) => {
        dispatch(saveTrendingArticle(updatedUserBookMark))
    })
    .catch((error) => console.log(error))
}


//REDUCER
const reducer = (state = [], action) => {
    switch(action.type){
        case FETCH_TRENDING_ARTICLE:
            return action.payload;
        // case SAVE_TRENDING_ARTICLE:
        //     return state.map((user) => 
        //     user.id === ac)
        default:
            return state;
    }
}

export default reducer;