import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="Subscribe">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3, mr: 3.5 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label={
                <Typography style={{ fontSize: 15 }}>First Name</Typography>
              }
              size="small"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label={
                <Typography style={{ fontSize: 15 }}>Last Name</Typography>
              }
              name="lastName"
              autoComplete="family-name"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label={
                <Typography style={{ fontSize: 15 }}>Email Address</Typography>
              }
              name="email"
              autoComplete="email"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              label={<Typography style={{ fontSize: 15 }}>Password</Typography>}
              type="password"
              id="password"
              autoComplete="new-password"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label={
                <Typography sx={{ fontSize: 12 }}>
                  I want to receive free signals,promotions and updates via
                  email.
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default Subscribe;
