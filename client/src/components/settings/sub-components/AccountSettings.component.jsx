import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { toast } from 'react-toastify';

import Button from '../../custom-button/Button.component';
import { toastSetting2 } from '../../../utils/helper';
import { updateUserInfo } from '../../../redux/user/user.actions';

const AccountSettings = ({ user, updateUserInfo }) => {
  const [address, setAddress] = useState({
    country: user.address.country,
    state: user.address.state,
    addressLine: user.address.addressLine,
    postal: user.address.postal,
  });
  const { country, state, addressLine, postal } = address;
  const [generalInfo, setGeneralInfo] = useState({
    name: user.name,
    email: user.email,
  });
  const { name, email } = generalInfo;
  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z0-9 _]*$/.test(name) || name.length === 0) {
      toast.error(
        'Please provide a display name, with no special characters',
        toastSetting2,
      );
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error('Email is not valid', toastSetting2);
      return;
    }
    const validatePostal = postal.replace(/ /g, '');
    console.log(validatePostal);
    if (validatePostal.length !== 6) {
      toast.error('Postal code is not valid', toastSetting2);
      return;
    }
    const user = {
      name: generalInfo.name,
      email: generalInfo.email,
      address: {
        ...address,
        postal: validatePostal,
      },
    };
    console.log(user);
    updateUserInfo(user);
  };

  return (
    <div className="account-settings">
      <h2 className="title bold py-5 mb-5">Account Settings</h2>
      <div className="field mb-5">
        <h4 className="label bold mb-4 mx-2">Display Name</h4>
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          onChange={handleGeneralChange}
        />
      </div>
      <div className="field mb-5">
        <h4 className="label bold mb-4 mx-2">Email</h4>
        <input
          className="input"
          type="text"
          name="email"
          value={email}
          onChange={handleGeneralChange}
        />
      </div>
      <div className="field mb-5">
        <h4 className="label bold mb-4 mx-2">My Address</h4>
        <div className="half-wrapper d-flex justify-content-between mb-4">
          <div className="half mr-3">
            <h5 className="sub-label mx-2">Country</h5>
            <input
              className="input"
              type="text"
              name="country"
              value={country}
              onChange={handleAddressChange}
            />
          </div>
          <div className="half">
            <h5 className="sub-label mx-2">State/Province</h5>
            <input
              className="input"
              type="text"
              name="state"
              value={state}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <h5 className="sub-label mx-2">Address Line</h5>
          <input
            className="input"
            type="text"
            name="addressLine"
            value={addressLine}
            onChange={handleAddressChange}
          />
        </div>
        <div className="mb-4">
          <h5 className="sub-label mx-2">Postal Code</h5>
          <input
            className="input"
            type="text"
            name="postal"
            value={postal.toUpperCase()}
            onChange={handleAddressChange}
          />
        </div>
      </div>
      <div className="py-4 mb-3 text-md-right text-sm-center" onClick={handleSubmit}>
        <Button name="Save Settings" styleClass="round color lighter" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUserInfo: (e) => dispatch(updateUserInfo(e)),
});
export default connect(null, mapDispatchToProps)(AccountSettings);

// export default AccountSettings;
