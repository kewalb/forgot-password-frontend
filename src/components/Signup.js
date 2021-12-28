import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";


function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        const data = {
            name,
            email, 
            password
        }
        console.log(data)
        fetch("https://forgot-password-backend.herokuapp.com/user/signup", {
            method: "post",
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
              },
            
        }).then((response) => {
           response.json()
        }).catch(error => {
            console.log(error)
        })
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
      console.log(e.target.value)
        setPassword(e.target.value)
    }

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
          Please fill out the sign up form...
        </Typography>
        <div>
          <TextField required id="name-required" label="Name" type="text" onChange={handleNameChange}/>
        </div>
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
          <TextField
            fullWidth
            required
            id="password-required"
            label="Password"
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <Button variant="outlined" color="success" style={{textAlign: "center", display: "block", margin:"auto" }} onClick={signIn}>
            Sign Up
          </Button>
        </div>
      </Box>
  );
}

export default Signup;
