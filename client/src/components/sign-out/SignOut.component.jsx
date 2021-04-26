import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../custom-button/Button.component';
import { toastSetting } from '../../utils/helper';
import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const SignOut = ({ currentUser, setCurrentUser }) => {
  const history = useHistory();

  const signOut = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`)
      .then((res) => {
        if (res.status === 200) {
          // localStorage.removeItem('user');
          // console.log(document.cookie);
          document.cookie = document.cookie + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          setCurrentUser(null);
          window.setTimeout(() => {
            history.push('/');
          }, 0);
          toast('Logged out successfully!', toastSetting);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, toastSetting);
      });
  };

  return (
    <div className="sign-out">
      <div className="gap-fill" />
      <div className="wrapper d-flex flex-column justify-content-center align-items-center">
        {currentUser && <h5 className="view mb-4 d-lg-none">Hi {currentUser.name}</h5>}
        <div className="my-4">
          <Link to="/account" className="view-account">
            <i className="bi bi-person-lines-fill mr-3" />
            <span className="text my-5">View Profile</span>
          </Link>
        </div>
        <Button name="Sign Out" styleClass="square color lighter" onClick={signOut} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (e) => dispatch(setCurrentUser(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
