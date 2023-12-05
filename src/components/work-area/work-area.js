import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './styles.css'

const WorkArea = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item className='label-allign' xs={1}>
          <div><label>Name: </label></div>
        </Grid>
        <Grid item xs={5}>
          <TextField className='input-field-allign' id="outlined-basic" label="Name" variant="outlined" />
        </Grid>

        <Grid item className='label-allign gender-label' xs={1.5}>
          <div><label>Gender: </label></div>
        </Grid>
        <Grid item xs={2}>
          <TextField className='input-field-allign' id="outlined-basic" label="Gender" variant="outlined" />
        </Grid>
        <Grid item xs={2.5}></Grid>

        <Grid item className='label-allign dob-label' xs={2}>
          <div><label>Date of Birth: </label></div>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className='input-field-allign' label="Select date" />
          </LocalizationProvider>
        </Grid>
        <Grid item className='label-allign gender-label' xs={1.5}>
          <div><label>Age: </label></div>
        </Grid>
        <Grid item xs={2}>
          <TextField className='input-field-allign' id="outlined-basic" label="Age" variant="outlined" />
        </Grid>
        <Grid item xs={2.5}></Grid>

        <Grid item className='label-allign' xs={1.5}>
          <div><label>Phone No: </label></div>
        </Grid>
        <Grid item xs={4.5}>
          <TextField className='input-field-allign' id="outlined-basic" label="Phone No" variant="outlined" />
        </Grid>
        <Grid item xs={5}></Grid>

        <Grid item className='label-allign' xs={1.5}>
          <div><label>Address: </label></div>
        </Grid>
        <Grid item xs={4.5}>
          <div className='address-height-adjust'>
            <TextField className='input-field-allign' id="outlined-basic" label="Address" variant="outlined" />
          </div>
        </Grid>
        <Grid item className='label-allign gender-label' xs={1.5}>
          <div><label>Pin: </label></div>
        </Grid>
        <Grid item xs={2}>
          <TextField className='input-field-allign' id="outlined-basic" label="Pin" variant="outlined" />
        </Grid>
        <Grid item xs={2.5}></Grid>
        <Grid item className='label-allign' xs={1.5}>
          <div><label>Email Id: </label></div>
        </Grid>
        <Grid item xs={4.5}>
          <div className='address-height-adjust'>
            <TextField className='input-field-allign' id="outlined-basic" label="Email Id" variant="outlined" />
          </div>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
};


export default WorkArea;