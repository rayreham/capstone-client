import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { fetchAllUserProfilesThunk, deleteUserProfileThunk } from "../../thunks";
//import { AllUserProfileView } from "../views";


// Smart container;
class AllUserProfilesContainer extends Component {
    componentDidMount() {
      this.props.fetchAllUserProfiles();
    }
  
    handleDelete = (id) => {
      this.props.deleteUserProfile(id);
    };
  
    render() {
      return (
        <AllUserProfilesView
          allUserProfiles={this.props.allUserProfiles}
          hello={this.props.hello}
          handleDelete={this.handleDelete}
        />
      );
    }
  }
  
  // Map state to props;
  const mapState = (state) => {
    return {
      hello: "hello world!!!",
      allUserProfiles: state.allUserProfiles,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      fetchAllUserProfiles: () => dispatch(fetchAllUserProfilesThunk()),
      deleteUserProfile: (id) => dispatch(deleteUserProfileThunk(id)),
    };
  };
  
  // Type check props;
  AllUserProfilesContainer.propTypes = {
    allUserProfiles: PropTypes.array.isRequired,
    fetchAllUserProfiles: PropTypes.func.isRequired,
    deleteUserProfile: PropTypes.func.isRequired,
  };
  
  // Export our store-connected container by default;
  export default connect(mapState, mapDispatch)(AllUserProfilesContainer);
  

