import React from "react";
import MetaTags from "react-meta-tags";

import Layout from "../../components/layout/Layout.component";
import SignIn from "../../components/sign-in/SignIn.component";

const LogIn = () => {
  return (
    <div className="log-in">
      <MetaTags>
        <title>Login | Shine </title>
        <meta name="description" content="Login Shine Online Shop" />
      </MetaTags>

      <Layout>
        <div className="container">
          <div className="row mx-3">
            <SignIn />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LogIn;
