import React from "react";

import Layout from "../../components/SignLayout/Layout";
import Text from "../../components/Text/Text";
import Form from "../../components/Form/Form";
import classes from "./SignUp.module.css";
const SignUp = () => {
  return (
    <div className={classes.content}>
      <Layout className={classes.box}>
        <Text title="Sign up" />
        <Form />
      </Layout>
    </div>
  );
};
export default SignUp;
