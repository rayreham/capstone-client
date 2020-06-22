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

const saveTrendingArticle = (updatedUser) => {
    return{
        type: SAVE_TRENDING_ARTICLE,
        payload: updatedUser
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
export const saveTrendingArticleThunk = ( article) => (dispatch) => {
    console.log("What was passed down to save TrendingArticleThunk" , article)

    const saveArticle = {
        image: article.urlToImage,
        head_line: article.title,
        src_name: article.source.name,
        author: article.author,
        descrip: article.description,
        article_url: article.url,
        pub_date: article.publishedAt,
        
    }
    return axios
    // .put(`/api/users/${id}` , index)
    .put(`/api/users/getArticle` , saveArticle)
    .then((res) => {
        const data = res.data;

        dispatch(saveTrendingArticle(data))
    })
    // .then((updatedUserBookMark) => {
    //     dispatch(saveTrendingArticle(updatedUserBookMark))
    // })
    .catch((error) => console.log(error))
}


//REDUCER
const reducer = (state = [], action) => {
    switch(action.type){
        case FETCH_TRENDING_ARTICLE:
            return action.payload;
        case SAVE_TRENDING_ARTICLE:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;