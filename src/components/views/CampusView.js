import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import {
  StudentNameListContainer,
  AddStudentToCampusContainer,
} from "../containers";

const CampusView = (props) => {
  return (
    <>
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>

      <p>{props.campus.description}</p>

      <StudentNameListContainer students={props.campus.students} />

      <AddStudentToCampusContainer
        campusId={props.campus.id}
        handleEnrollStudent={props.handleEnrollStudent}
      />

      <Link className="edit-link" to={`/campuses/${props.campus.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.campus.id)}>
        Delete
      </button>
    </>
  );
};

export default CampusView;
