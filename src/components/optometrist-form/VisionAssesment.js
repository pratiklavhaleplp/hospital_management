import React from 'react';
import { FormParent, FormName, FormChild, Lable } from '../parent-styles-components/custom-components';
import { VisionAssessment } from '../utils/constants';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';


function VisionAssesment() {
  return (
    <FormParent>
      <FormName>{VisionAssessment}</FormName>
      <hr />
      <FormChild>
        <Grid maxHeight={'4rem'} container spacing={1}>
          <Grid xs={0.7}><Lable>C/o: </Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={2}>
            <TextField
              defaultValue="Name."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={1}><Lable>Since: </Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={2}>
            <TextField
              defaultValue="Name."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={1}><Lable>HOPI: </Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={2}>
            <TextField
              defaultValue="Name."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
          <Grid xs={1.3}><Lable>Past h/o: </Lable></Grid>
          <Grid display={'flex'} alignItems={'center'} xs={2}>
            <TextField
              defaultValue="Name."
              size="small"
              style={{ display: 'flex', width: '100%' }}
            />
          </Grid>
        </Grid>
      </FormChild>
    </FormParent>
  );
}

export default VisionAssesment;
