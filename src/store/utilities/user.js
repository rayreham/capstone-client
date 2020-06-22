import axios from "axios"

//ACTION TYPE
const FETCH_USER = "FETCH_USER";

//ACTION CREATORS
const fetchUser = (user) => {
    return {
        type: FETCH_USER,
        payload: user
    }
}

//THUNK CREATOR
export const fetchUserThunk = (id) => (dispatch) => {
    return axios 
    .get(`/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => dispatch(fetchUser(user)))
    .catch((err) => console.log(err));
};



//REDUCER
const reducer = (state = {}, action ) => {
    switch(action.type){
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
}


export default reducer;