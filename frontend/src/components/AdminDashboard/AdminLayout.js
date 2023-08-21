import * as React from 'react';
import { AppBar, Layout } from 'react-admin';
import { Button, Box } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const CustomAppBar = (props) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <AppBar {...props} sx={{ backgroundColor: 'black', color: 'white' }}>
      <Box display="flex" justifyContent="space-between" width="100%">
        <div></div>{' '}
        <Button color="inherit" onClick={goHome}>
          <HomeIcon />
        </Button>
      </Box>
    </AppBar>
  );
};

const AdminLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

export default AdminLayout;
