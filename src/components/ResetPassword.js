import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

function ResetPassword() {
  const [email, setEmail] = useState();

  const resetPassword = () => {
    if (!email) {
      alert("enter your email");
    } else {
      const data = { email };
      fetch("https://forgot-password-backend.herokuapp.com/user/forgot-password", {
        method: "post",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          alert("Check your email");
        })
        .catch((error) => console.log(error));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
        Please Enter your Email to reset your password...
      </Typography>
      <div>
        <TextField
          onChange={handleEmailChange}
          required
          id="email-required"
          label="Email"
          type="email"
        />
      </div>
      <div>
        <Button
          variant="outlined"
          color="success"
          style={{ textAlign: "center", display: "block", margin: "auto" }}
          onClick={resetPassword}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}

export default ResetPassword;
