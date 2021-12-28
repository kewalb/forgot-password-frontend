import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import {useHistory, useParams } from "react-router-dom";

function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const{ token} = useParams();
  console.log(token)
  const history = useHistory()
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const changePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("enter matching password again");
    } else {
      const data = { password: newPassword, token };
      fetch("https://forgot-password-backend.herokuapp.com/user/new-password", {
        method: "post",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          alert("password changed successfully");
          history.pushState("/login")
        })
        .catch((error) => console.log(error));
    }
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
        Reset your password...
      </Typography>

      <div>
        <TextField
          onChange={handlePasswordChange}
          required
          id="old-password-required"
          label="New password"
          type="password"
        />
      </div>
      <div>
        <TextField
          fullWidth
          required
          id="confirm-password-required"
          label="Confirm password"
          type="password"
          onChange={handleConfirmChange}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          color="success"
          style={{ textAlign: "center", display: "block", margin: "auto" }}
          onClick={changePassword}
        >
          Change password
        </Button>
      </div>
    </Box>
  );
}

export default ResetPasswordForm;
