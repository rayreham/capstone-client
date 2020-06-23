import axios from "axios";

//import { useHistory } from "react-router-dom";


// ACTION TYPES
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const FETCH_USER = "FETCH_USER";

// ACTION CREATORS
const fetchUser = (user) => {
  return {
      type: FETCH_USER,
      payload: user
  }
}

const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  }
}

const removeUser = () => {
  return {
    type: REMOVE_USER
  }
}

// THUNK CREATORS
export const me = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:3000/auth/me", { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

export const fetchUserThunk = (id) => (dispatch) => {
  return axios 
  .get(`/api/users/${id}`)
  .then((res) => res.data)
  .then((user) => dispatch(fetchUser(user)))
  .catch((err) => console.log(err));
};


export const auth = (email, password, method, ownProps) => async dispatch => {
  //   let res;
  //   try {
  //     res = await axios.post(`http://localhost:3000/auth/${method}`, { email, password }, { withCredentials: true })
  //     .then(res =>{
  //       dispatch(getUser(res.data))
  //       this.context.history.push('/signup')
  //     })
  //   }
  //   catch (authError) {
  //     return dispatch(getUser({ error: authError }));
  //   }
  // }
  // //let res;
  //let history = useHistory();
  await axios.post(`http://localhost:3000/auth/${method}`, { email, password }, { withCredentials: true })
    .then(res => {
      dispatch(getUser(res.data))
      // eslint-disable-next-line no-restricted-globals
      ownProps.history.push('/signup')
    }, authError => {
      dispatch(getUser({ error: authError }))
    })
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))
}



export const logout = () => async dispatch => {
  try {
    await axios.delete("http://localhost:5000/auth/logout", { withCredentials: true });
    dispatch(removeUser());
  }
  catch (err) {
    console.error(err);
  }
};

// REDUCER
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case FETCH_USER:
      return action.payload;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}


export default reducer;