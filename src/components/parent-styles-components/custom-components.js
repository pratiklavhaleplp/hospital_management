import React, { memo } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/joy/Typography';
import './styles.css'


const FormParent = memo((props) => {
  return (
    <>
      <Container maxWidth='lg' style={{ height: '70vh' }}>
        {props.children}
      </Container>
    </>
  );
});

const FormChild = memo((props) => {
  return (
    <Container style={{ 'overflowY': 'scroll', maxHeight: '65vh' }} maxWidth='md'>
      {props.children}
    </Container>
  );
});



const FormName = memo((props) => {
  return (
    <Typography level="h3">
      {props.children}
    </Typography>
  );
});

const Lable = memo((props) => {
  return (
    <Typography level="h4">
      <p>{props.children}</p>
    </Typography>
  )
})

const MarginTop10 = memo((props) => {
  const searchBtnAlignCenter = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px'
  }
  return (
    <span style={searchBtnAlignCenter}>
      {props.children}
    </span>
  )
})


export { FormParent, FormChild, FormName, Lable, MarginTop10 };