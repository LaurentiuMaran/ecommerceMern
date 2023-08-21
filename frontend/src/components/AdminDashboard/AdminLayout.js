import * as React from 'react';
import { Layout, AppBar } from 'react-admin';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const CustomAppBar = (props) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <AppBar {...props} sx={{ backgroundColor: 'black', color: 'white' }}>
      <Button color="inherit" onClick={goHome}>
        Home
      </Button>
    </AppBar>
  );
};

const AdminLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

export default AdminLayout;
