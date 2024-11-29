import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Notifications from '@mui/icons-material/Notifications';
import { LogoutOutlined, Settings } from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const userMenu = (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      PaperProps={{
        style: {
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <MenuItem onClick={handleMenuClose}>
        <Settings /> Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <LogoutOutlined /> Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
      style={{
        background: 'linear-gradient(90deg, #4a90e2, #50c9c3)',
        color: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: 1201,
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '20px' }}>
          Admin Dashboard
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <IconButton>
            <Notifications style={{ fontSize: '24px', color: '#fff' }} />
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Avatar />
          </IconButton>
          {userMenu}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
