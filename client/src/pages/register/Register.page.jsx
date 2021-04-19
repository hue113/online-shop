import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";
import SignUp from "../../components/sign-up/SignUp.component";

const Register = () => {
  return (
    <div className="log-in">
      <MetaTags>
        <title>Register | Shine </title>
        <meta name="description" content="Register Shine Online Shop" />
      </MetaTags>

      <Layout>
        <div className="container">
          <div className="row mx-3">
            <SignUp />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Register;
