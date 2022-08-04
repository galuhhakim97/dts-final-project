import { color } from "@mui/system";
import React from "react";

import LoginOrRegisterForm from "../component/LoginOrRegisterForm";

export default function Login() {
  return (
    <div style={{
        width: '100%',
        height: '1200px',
        background: 'lightgrey',
        padding: '15em'

    }}>
      <LoginOrRegisterForm loginOrRegister={"login"} />
    </div>
  );
}
