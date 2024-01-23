import React from 'react';
import { FormParent, FormName, FormChild, Lable, MarginTop10 } from '../parent-styles-components/custom-components';
import { PatientSearchConst } from '../utils/constants';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function PatientSearch() {
  return (
    <FormParent>
      <FormName>{PatientSearchConst}</FormName>
      <hr />
      <FormChild>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Name:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="Name."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={2}><Lable>Phone No:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="Phone No."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>MRN No:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="MRN No."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={2}><Lable>Date Of Visit:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="Date of visit."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Diagnosis:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="Diagnosis."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={2}><Lable>Surgery:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="Surgery."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={2}><Lable>Investigations:</Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={4}>
            <TextField
              defaultValue="Investigations."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={12}>
            <MarginTop10>
              <Button variant="contained" color="success" size="large">Search</Button>
            </MarginTop10>
          </Grid>
        </Grid>
      </FormChild>
    </FormParent>
  );
}

export default PatientSearch;
