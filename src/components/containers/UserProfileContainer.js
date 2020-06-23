import React, {Component} from "react"
import {connect} from "react-redux";
import {fetchUserThunk} from "../../thunks";

import {UserProfileView} from "../views";

class UserProfileContainer extends Component {

    componentDidMount(){
        // this.props.fetchUser(this.props.match.params.id);
        this.props.fetchUser(this.props.user.id);

    }

    render(){

          return <UserProfileView user={this.props.user}/>

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

