import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { unregistred, registred } from "../features/auth/registSlice";


export default function Header() {
  const [value, setValue] = useState(1);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch()

  return (
    <AppBar position="sticky" sx={{ background: "black" }}>
      <Toolbar>
        <Typography>User</Typography>
        <Box display="flex" marginLeft={"auto"} marginRight="auto">
          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            textColor="inherit"
          >
            <Tab
              LinkComponent={Link}
              to="/topCollections"
              label="Top Collections"
            />
            <Tab
              LinkComponent={Link}
              to="/LastCollections"
              label="Last Collections"
            />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <React.Fragment>
              <Button
                onClick={() => dispatch(unregistred())}
                LinkComponent={Link}
                to="/auth"
                color="inherit"
              >
                Login
              </Button>
              <Button
                onClick={() => dispatch(registred())}
                LinkComponent={Link}
                to="/auth"
                color="inherit"
              >
                SignUp
              </Button>
            </React.Fragment>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(logout())}
              LinkComponent={Link}
              to="/auth"
              color="inherit"
            >
              LogOut
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
