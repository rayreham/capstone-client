import React from 'react';
import { Link } from "react-router-dom";

const UserProfileView = (props) => {
    return (
        <div>
            <h1>{props.user.firstName} {props.user.lastName}</h1>
            <h2>{props.user.email}</h2>
            <h3>{props.user.userName}</h3>
            {/* <img src={props.student.imageUrl} alt={props.student.firstName} width="200px" /> */}
            
        </div>
    )
}

export default UserProfileView;