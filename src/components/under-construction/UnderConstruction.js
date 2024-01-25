import React from 'react';

function UnderConstruction() {
  const backgroundStyle = {
    backgroundColor: '#252a31',
    display: 'flex',
    width: '100vw',
    height: '85vh',
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const fontStyle = {
    fontSize: '6rem',
    fontWeight: '400'
  }
  return (
    <div style={backgroundStyle}>
      <div style={fontStyle}>UNDER</div>
      <div style={fontStyle}>DEVELOPMENT</div>
    </div >
  );
}

export default UnderConstruction;
