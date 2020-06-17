import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { AddUserProfileFormView } from "../views";
//import { addProfileThunk } from "../../thunks";

class AddUserProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      isValidUsername: false,
      imageUrl: "",
      bookmark: [/*array of bookmarked articles */],
      errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.username === "username") {
      this.setState({ username: e.target.value }, this.validateUsername);
    } else {
      this.setState({
        [e.target.username]: e.target.value,
      });
    }
  };

  validateUsername = () => {
    const { username } = this.state;
    let errors = { ...this.state.errors };
    // set a valid boolean to true
    let isValidUsername = true;
    // check if the value is valid
    if (username.length < 2) {
      // if not, set the value to false and add error message
      isValidUsername = false;
      errors.username = "Invalid username";
    }
    //
    // setstate with isValidName
    if (isValidUsername) {
      errors.username = "valid username";
    }
    this.setState({ isValidUsername, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidUsername) this.props.addUserProfile(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidUsername ? "" : this.state.errors.username}
        <AddUserProfileFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          username={this.state.username}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addUserProfile: (UserProfile) => dispatch(addUserProfileThunk(UserProfile, ownProps)),
  };
};

AddUserProfileFormContainer.propTypes = {
  addUserProfile: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddUserProfileFormContainer);
