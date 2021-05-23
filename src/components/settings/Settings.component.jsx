import React from 'react';

import AccountSettings from './sub-components/AccountSettings.component';
import PasswordSettings from './sub-components/PasswordSettings.component';

const Settings = ({ user }) => {
  // console.log(currentUser);

  return (
    <div className="settings">
      <AccountSettings user={user} />
      <PasswordSettings />
    </div>
  );
};

export default Settings;
