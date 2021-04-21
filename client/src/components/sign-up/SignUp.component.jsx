import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../custom-button/Button.component';
import CustomForm from '../form/CustomForm.component';
import validator from 'validator';
import { setCurrentUser } from '../../redux/user/user.actions';

const SignUp = ({ setCurrentUser }) => {
  const [userCredentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = userCredentials;
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value }); // dynamic setState
  };

  const handleSubmit = async (e) => {
    console.log(userCredentials);
    e.preventDefault();
    if (!/^[a-zA-Z0-9]*$/.test(name) || name.length === 0) {
      toast.error('Please provide a display name, with no special characters', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error('Please provide a valid email', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (password !== passwordConfirm) {
      toast.error("Passwords don't match, please try again", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (password.length < 8 || passwordConfirm.length < 8) {
      toast.error('Password: Be 8 or more characters long', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/users/checkemail/${email}`)
      .then((res) => {
        if (res.data.data !== 0) {
          console.log(res);
          toast.error('Email already exists, please choose a different email.', {
            position: toast.POSITION.TOP_CENTER,
          });
          return;
        } else
          return axios.post(`api/v1/users/signup`, userCredentials).then((res) => {
            // console.log(res);
            if (res.status === 201) {
              console.log('enter');
              setCurrentUser(res.data.user);
              setCredentials({ name: '', email: '', password: '', passwordConfirm: '' });
              toast.success(
                'Account successfully created. Thank you for your registration!',
                { position: toast.POSITION.TOP_CENTER },
              );
              localStorage.setItem('user', JSON.stringify(res.data.user));
              window.setTimeout(() => {
                history.push('/');
              }, 2000);
            }
          });
      })
      .catch((e) => {
        console.log(e);
        toast.error('Error happened!', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="section sign-in d-flex flex-column justify-content-center mx-auto">
      <h3 className="mx-auto mt-5 mb-4">Become a member</h3>
      <h5 className="py-3 text-center">
        Become a member - Get a gift on your birthday, exlusive member offers, and new
        product sneak peeks
      </h5>

      <form onSubmit={handleSubmit}>
        <CustomForm
          type="text"
          name="name"
          value={name}
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
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <div className="row-cols-md-2 pt-4 d-flex">
          <div className=" mx-auto">
            <Button
              onClick={handleSubmit}
              name="Become A Member"
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
        <span className="">Password: 123456</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (e) => dispatch(setCurrentUser(e)),
});

export default connect(null, mapDispatchToProps)(SignUp);
