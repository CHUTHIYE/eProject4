import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
  { text: 'Products', icon: <ShoppingCartIcon />, path: '/admin/products' },
  { text: 'Orders', icon: <ReceiptIcon />, path: '/admin/orders' },
  { text: 'Users', icon: <PeopleIcon />, path: '/admin/customers' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        '& .MuiDrawer-paper': {
          width: isOpen ? 250 : 80,
          background: 'linear-gradient(180deg, #2c3e50, #34495e)',
          color: '#ecf0f1',
          overflowX: 'hidden',
          transition: 'width 0.3s ease',
          marginTop: '64px', // Thêm margin-top
        },
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: isOpen ? 'flex-end' : 'center',
          padding: '10px',
        }}
      >
        <IconButton onClick={toggleSidebar} sx={{ color: '#fff' }}>
          {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{
              display: 'flex',
              justifyContent: isOpen ? 'flex-start' : 'center',
              padding: '10px',
              '&:hover': {
                backgroundColor: '#1abc9c',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#bdc3c7' }}>{item.icon}</ListItemIcon>
            {isOpen && <ListItemText primary={item.text} sx={{ color: '#fff' }} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
