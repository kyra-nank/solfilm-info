import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const Join = function ({ submitEmail, status }) {

  const [submitFlag, setSubmitFlag] = useState(false);
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const statusMessage = function () {

    if (submitFlag) {
      if (status) {
        return <Typography style={{ marginLeft: "0", color: "green" }} variant="subtitle1">Signup succeeded! Welcome to Solfilm &#127881;</Typography>;
      } else {
        return <Typography style={{ marginLeft: "0" }} color="error" variant="subtitle1">Signup failed! Please try again.</Typography>;
      }
    } else {
      return null;
    }


  };

  return (
    <Box style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <Typography variant="h5" style={{ marginBottom: "2rem", color: "#FFF" }}>CONTRIBUTE & EARN &#128176;</Typography>
      <Typography variant="subtitle1" style={{ marginBottom: "2rem" }}>We’re on a mission to grow the coolest film collection in the world, and we can’t do it without an amazing community. If you’re interested in contributing to Solfilm and earning some SOL, leave your email below!</Typography>

      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <Grid container display="flex" style={{ margin: "0", padding: "0" }}>
          <Grid item xs={12} md={9} style={{ margin: "0", padding: "0" }}>
            <FormControl style={{ width: "98%", height: "100%" }}>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                value={email}
                onChange={handleChange}
                label="Email"

              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} style={{ margin: "0", padding: "0" }}>
            <Button style={styles.buttonStyle} variant="contained" onClick={async () => {
              await submitEmail(email);
              setEmail('');
              setSubmitFlag(true);
            }}>
              Join
            </Button>
          </Grid>
        </Grid>

        {statusMessage()}


      </Box>
    </Box>

  );
};

const styles = {
  buttonStyle: {
    width: "98%",
    backgroundColor: "#00C2CB",
    color: "black",
    margin: "0",
    padding: "0",
    height: "100%",
    minHeight: "40px"
  }
};

function mapStateToProps(state) {
  return { status: state.email.status };
}

export default connect(mapStateToProps, actions)(Join);