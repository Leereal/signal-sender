import React from 'react';
import './Sidebar.css';
import Logo from '../../images/logo_main.png';
import { Button } from '@mui/material';
import PostSignal from '../PostSignal/PostSignal';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <aside className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="LoginButton">
        <Button
          variant="outlined"
          style={{
            height: '25px',
          }}
        >
          Login
        </Button>
      </div>
      <Button
        variant="outlined"
        style={{
          height: '25px',
          width: '80px',
        }}
        onClick={handleOpen}
      >
        Post
      </Button>
      <PostSignal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
    </aside>
  );
};

export default Sidebar;
