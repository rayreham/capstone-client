import React, {Component} from "react"
import {connect} from "react-redux";
import {fetchUserThunk} from "../../thunks";

import {UserProfileView} from "../views";

class UserProfileContainer extends Component {

    componentDidMount(){
        console.log("in comp did mount of user container" , this.props.match.params.id)
        this.props.fetchUser(this.props.match.params.id);
    }

    render(){
        console.log("user being passed down" , this.props.user)
          return <UserProfileView user={this.props.user}/>
        // return<h1>Hello from User Profile Container!</h1>
    }
}

const mapState = (state) => {
    return {
        user: state.user,
    };
}

const mapDispatch = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUserThunk(id))
    }
}

export default connect(mapState, mapDispatch)(UserProfileContainer)

