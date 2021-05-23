import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../custom-button/Button.component';
import CustomForm from '../form/CustomForm.component';
import { toastSetting } from '../../utils/helper';
import { setCurrentUser } from '../../redux/user/user.actions';

const SignIn = ({ setCurrentUser }) => {
  const history = useHistory();
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, userCredentials)
      .then((res) => {
        if (res.status === 200) {
          setCurrentUser(res.data.user);
          // set token in cookies
          document.cookie = `jwt=${res.data.token}`;
          // console.log(`jwt=${res.data.token}`);
          toast(` Hi ${res.data.user.name}! Welcome back!`, toastSetting);
          // localStorage.setItem('user', JSON.stringify(res.data));
          window.setTimeout(() => {
            history.push('/');
          }, 100);
        } else if (res.status === 400) {
          toast.error(res.data.message, toastSetting);
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, toastSetting);
      });
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

        <div className="row-cols-md-2 pt-4 d-flex">
          <div className="pr-3">
            <Button
              name="Sign In"
              styleClass="white square fullWidth"
              onClick={(e) => handleSubmit(e)}
            />
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
          * Hi there! For testing purpose: I already created one account. But you can also
          create your own new account. *
        </span>
        <span className="">Email: test@gmail.com</span>
        <span className="">Password: 12345678</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (e) => dispatch(setCurrentUser(e)),
});

export default connect(null, mapDispatchToProps)(SignIn);
