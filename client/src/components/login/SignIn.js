import {
  Link,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
  Avatar,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

// Define the Login component
const Login = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Initialize state for login data
  const [loginData, setLoginData] = useState({
    artist_id: "", // Change emp_id to artist_id
    password: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/login`,
        loginData
      );

      if (response && response.data && response.data.access_token) {
        console.log("Login successful!");
        localStorage.setItem("token", response.data.access_token); // Store token in localStorage
        navigate("/home");
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  // Return the JSX for the Login component
  return (
    <div>
      <Header />
      {/* JSX code for login form */}
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                type="text"
                name="artist_id" // Change emp_id to artist_id
                value={loginData.artist_id} // Change emp_id to artist_id
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="artist_id" // Change emp_id to artist_id
                label="User Id"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={loginData.password}
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

// Export the Login component
export default Login;
