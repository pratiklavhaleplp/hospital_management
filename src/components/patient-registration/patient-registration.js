import React from "react";
import { FormParent, FormName, FormChild, Lable, MarginTop10 } from '../parent-styles-components/custom-components';
import { PatientRegistrationConst } from '../utils/constants';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const PatientRegistration = () => {
  return (
    <FormParent>
      <FormName>{PatientRegistrationConst}</FormName>
      <hr />
      <FormChild>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Name:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={5}>
            <TextField
              defaultValue="Name."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={2}><Lable>Gender:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={3}>
            <TextField
              defaultValue="Gender."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Date of Birth:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={5}>
            <TextField
              defaultValue="Date of Birth."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={2}><Lable>Age:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={3}>
            <TextField
              defaultValue="Age."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Phone No:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={5}>
            <TextField
              defaultValue="Phone Number."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={5}></Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Address:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={5}>
            <TextField
              defaultValue="Address."
              size="small"
              style={{ display: 'flex', width: '100%' }}
              multiline
              rows={2}
            />
          </Grid>
          <Grid xs={2}><Lable>Pin:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={3}>
            <TextField
              defaultValue="Pin."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Email Id:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={5}>
            <TextField
              defaultValue="Email Id."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={5}></Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={4.5}></Grid>
          <Grid xs={1.5}>
            <MarginTop10>
              <Button variant="contained" color="success" size="large">Submit</Button>
            </MarginTop10>
          </Grid>
          <Grid xs={1.5}>
            <MarginTop10>
              <Button variant="contained" color="warning" size="large">Reset</Button>
            </MarginTop10>
          </Grid>
          <Grid xs={4.5}></Grid>
        </Grid>
      </FormChild>
    </FormParent>
  );
}

export default PatientRegistration;