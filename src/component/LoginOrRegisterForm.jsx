import React, { useEffect, useState } from "react";
import {  Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
        loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
        registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(
    () => {
      if (isLoading) {
        return;
      }
      if (user) {
        navigate("/");
      }
    },
      [user, isLoading, navigate]
  );

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: "3em",
          width: "40em",
          margin: 'auto',
          }}
      >
        <Typography
          variant="body1"
          sx={{
            marginBottom: "1em",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {loginOrRegister === "login" ? "Login " : "Register"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />
        <br />
        <br />
        <TextField
          label="password"
          type="Password"
          variant="outlined"
          fullWidth
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />
        <br />
        <br />
        <Button
          variant="contained"
          fullWidth
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>
        <br />
        <br />
        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">Don't Have an Account yet ?</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">Back to Login</Typography>
          </Link>
        )}
      </Paper>
    </Box>
  );
};

export default LoginOrRegisterForm;
