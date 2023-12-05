import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StartIcon from '@mui/icons-material/Start';
import './ribbon.css';


const Ribbon = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer('top', false)}
      onKeyDown={toggleDrawer('top', false)}
    >
      <List>
        <ListItem key={'Add Patient'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={'Add Patient'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'Book Appointment'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary={'Book Appointment'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Change Status'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StartIcon />
            </ListItemIcon>
            <ListItemText primary={'Change Status'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['Front Desk', 'Role 1', 'Role 2'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer('top', true)}>{anchor}</Button>
          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};


export default Ribbon;