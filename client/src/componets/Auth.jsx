import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { unregistred, registred } from "../features/auth/registSlice";
import { useNavigate } from "react-router-dom";

export default function Auth(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [isRegistred, setisRegistred] = useState(props);
  const isRegistred = useSelector((state) => state.regist.isRegistred);
  const naviagte = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const auth = async (type) => {
    const res = await axios
      .post(`/api/users/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const switchType = ()=>{
    if (isRegistred){
      dispatch(unregistred())
    } if(!isRegistred){
      dispatch(registred());
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isRegistred) {
      auth("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(login()))
        .then(() => naviagte("/userCollections"))
        .then((data) => console.log(data));
    } else {
      auth("login")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(login()))
        .then(() => naviagte("/userCollections"))
        .then((data) => console.log(data))
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="15px 15px 15px 20px #ccc"
          padding={4}
          margin="auto"
          marginTop={6}
          borderRadius={5}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            {isRegistred ? "SignUp" : "Login"}
          </Typography>
          {isRegistred && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button type="submit" color="inherit">
            Submit
          </Button>
          <Button color="inherit" onClick={switchType}>
            {isRegistred ? "Login" : "SignUp"}?
          </Button>
        </Box>
      </form>
    </div>
  );
}
