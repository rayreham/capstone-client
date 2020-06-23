import React from "react";

const AuthFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail } = props;

  return (
    <div>
      {/*LOGIN*/}
      {/* <h3>LOG IN</h3> */}
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""}
      <form onSubmit={handleSubmit} name={name}>

        {/*email*/}
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>

        {/*password*/}
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>



  </div>
  
  );
};

export default AuthFormView;