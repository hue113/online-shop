import React, { useState } from "react";
import Button from "../custom-button/Button.component";
import CustomForm from "../form/CustomForm.component";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value }); // dynamic setState
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return; // stop whole function
    }
    console.log(e);
    // signUpStart({ displayName, email, password })
  };

  return (
    <div className="section sign-in d-flex flex-column justify-content-center mx-auto">
      <h3 className="mx-auto mt-5 mb-4">Become a member</h3>
      <h5 className="py-3 text-center">
        Become a member - Get a gift on your birthday, exlusive member offers,
        and new product sneak peeks
      </h5>

      <form onSubmit={handleSubmit}>
        <CustomForm
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <CustomForm
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <CustomForm
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <CustomForm
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <div className="row-cols-md-2 gx-5 d-flex">
          {/* <div className="pr-3">
            <Button name="Sign In" styleClass="white square fullWidth" />
          </div> */}
          <div className=" mx-auto">
            <Button
              name="Become A Member"
              link="/register"
              styleClass="square color fullWidth lighter"
            />
          </div>
        </div>
      </form>

      <div className="my-5 py-5 d-flex flex-column">
        <span className="mb-4">
          *Hi there! For testing purpose: I already created one account here: *
        </span>
        <span className="">Email: test@gmail.com</span>
        <span className="">Password: 123456</span>
      </div>
    </div>
  );
};

export default SignUp;
