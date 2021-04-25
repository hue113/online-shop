import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import Button from '../../../components/custom-button/Button.component';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

const Settings = ({ currentUser }) => {
  return (
    <div className="settings">
      <div className="account-settings">
        <h2 className="title bold py-5 mb-5">Account Settings</h2>
        <div className="field mb-5">
          <h4 className="label bold mb-4 mx-2">Display Name</h4>
          <input
            className="input"
            type="text"
            value={currentUser.name}
            // onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="field mb-5">
          <h4 className="label bold mb-4 mx-2">Email</h4>
          <input className="input" type="text" value={currentUser.email} />
        </div>
        <div className="field mb-5">
          <h4 className="label bold mb-4 mx-2">My Address</h4>
          <div className="d-flex justify-content-between mb-4">
            <div className="half">
              <h5 className="sub-label mx-2">Country</h5>
              <input className="input" type="text" value={currentUser.address.country} />
            </div>
            <div className="half">
              <h5 className="sub-label mx-2">State/Province</h5>
              <input className="input" type="text" value={currentUser.address.state} />
            </div>
          </div>
          <div className="mb-4">
            <h5 className="sub-label mx-2">Address Line</h5>
            <input
              className="input"
              type="text"
              value={currentUser.address.addressLine}
            />
          </div>
          <div className="mb-4">
            <h5 className="sub-label mx-2">Postal Code</h5>
            <input className="input" type="text" value={currentUser.address.postal} />
          </div>
        </div>
        <div className="py-4 mb-3 text-md-right text-sm-center">
          <Button name="Save Settings" styleClass="round color lighter" />
        </div>
      </div>

      <div className="password-settings">
        <h2 className="title bold py-5 mb-5">Password Change</h2>
        <div className="field mb-5">
          <h4 className="label bold mb-4 mx-2">Current Password</h4>
          <input className="input" type="password" value={currentUser.name} />
        </div>
        <div className="field mb-5">
          <h4 className="label bold mb-4 mx-2">New Password</h4>
          <input className="input" type="password" value={currentUser.name} />
        </div>
        <div className="field mb-5">
          <h4 className="label bold mb-4 mx-2">Confirm New Password</h4>
          <input className="input" type="password" value={currentUser.name} />
        </div>
      </div>
      <div className="py-4 text-md-right text-sm-center">
        <Button name="Save Change" styleClass="round color lighter" />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Settings);
