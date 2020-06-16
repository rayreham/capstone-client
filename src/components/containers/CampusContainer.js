import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCampusThunk,
  deleteCampusThunk,
  enrollStudentThunk,
} from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteCampus(id);
    this.props.history.push("/campuses");
  };

  handleEnrollStudent = (campusId, studentId) => {
    this.props.enrollStudent(campusId, studentId);
  };

  render() {
    return (
      <CampusView
        campus={this.props.campus}
        handleDelete={this.handleDelete}
        handleEnrollStudent={this.handleEnrollStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    enrollStudent: (campusId, studentId) =>
      dispatch(enrollStudentThunk(campusId, studentId)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
