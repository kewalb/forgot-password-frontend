import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "65ch" },
      }}
      noValidate
      autoComplete="off"
      style={{ textAlign: "center" }}
    >
      <Typography variant="h4" style={{ textAlign: "center", margin: 25 }}>
        Login
      </Typography>

      <div>
        <TextField
          //   onChange={handleEmailChange}
          required
          id="email-required"
          label="Email"
          type="email"
        />
      </div>
      <div>
        <TextField
          fullWidth
          required
          id="password-required"
          label="Password"
          type="password"
          //   onChange={handlePasswordChange}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          color="success"
          style={{ textAlign: "center", display: "block", margin: "auto" }}
        //   onClick={signIn}
        >
          Login
        </Button>
      </div>
      <Link style={{textDecoration: 'none', color:"inherit", marginTop:'auto'}} to="/reset-password">Forget Password?</Link>
    </Box>
  );
}

export default Login;
