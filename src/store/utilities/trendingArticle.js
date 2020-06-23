import axios from "axios"

//ACTION TYPE
const FETCH_TRENDING_ARTICLE = "FETCH_TRENDING_ARTICLE"
const SAVE_TRENDING_ARTICLE = "SAVE_TRENDING_ARTICLE"

//ACTION CREATORS
const fetchTrendingArticle = (articles) => {
    return{ 
        type: FETCH_TRENDING_ARTICLE,
        payload: articles
    }
}

const saveTrendingArticle = (updatedUser) => {
    return{
        type: SAVE_TRENDING_ARTICLE,
        payload: updatedUser
    }
}


//THUNK CREATOR
export const fetchTrendingArticlesThunk = () => async(dispatch) => {
    
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const trendingUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
  
    const allArticles = await axios.get(trendingUrl);
    const trending = allArticles.data.articles;

    dispatch(fetchTrendingArticle(trending));

}


//new request thunk onclick that would be passed, and the object .put("/users/`${id}`" , articleInfo).
export const saveTrendingArticleThunk = (article , userId) => (dispatch) => {
    const saveArticle = {
        imageUrl: article.urlToImage,
        headline: article.title,
        source: article.source.name,
        author: article.author,
        description: article.description,
        articleUrl: article.url,
        publishedAt: article.publishedAt,        
    }
    return axios
    .put(`/api/users/${userId}/addBookmark` , saveArticle)
   // .put(`/api/users/getArticle` , saveArticle)
    .then((res) => {
        const data = res.data;

        dispatch(saveTrendingArticle(data))
    })
    .catch((error) => console.log(error))
}

const initState = {trendingArticles:[] , bookmarkedArticle:[]};

//REDUCER
const reducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_TRENDING_ARTICLE:
            return {...state, 
                trendingArticles:action.payload}
        case SAVE_TRENDING_ARTICLE:
            return {...state, bookmarkedArticle:[...state.bookmarkedArticle , action.payload]} 
        default:
            return state;
    }
}

export default reducer;

