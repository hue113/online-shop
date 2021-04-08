import React, { useState } from "react";
import Button from "../custom-button/Button.component";
import CustomForm from "../form/CustomForm.component";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials; // destructure

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value }); // dynamic setState
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // emailSignInStart(email, password);

    // try{
    //     await auth.signInWithEmailAndPassword(email, password)
    //     this.setState({ email: '', password: ''})       // clear form
    // } catch(error) {
    //     console.log(error)
    // }
  };

  return (
    <div className="section sign-in d-flex flex-column justify-content-center mx-auto">
      <h3 className="mx-auto mt-5 mb-4">Sign In</h3>
      <h5 className="py-3 mx-auto">Sign in with your email and password</h5>

      <form onSubmit={handleSubmit}>
        <CustomForm
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <CustomForm
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          label="Password"
          required
        />

        <div className="row-cols-md-2 gx-5 d-flex">
          <div className="pr-3">
            <Button name="Sign In" styleClass="white square fullWidth" />
          </div>
          <div className="">
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

export default SignIn;
