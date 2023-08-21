import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Toolbar,
  SaveButton,
} from 'react-admin';
import { Button, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const CustomToolbar = (props) => {
  const navigate = useNavigate();

  return (
    <Toolbar {...props}>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <SaveButton />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/admin/products')}
          style={{ marginLeft: '20rem' }}
        >
          Cancel
        </Button>
      </Box>
    </Toolbar>
  );
};

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source="name" fullWidth label="Product Name" />
      <NumberInput source="price" fullWidth label="Product Price" />
      <TextInput
        source="description"
        fullWidth
        label="Product Description"
        multiline
      />
      <TextInput source="image" label="Image URL" fullWidth />
      <TextInput source="category" fullWidth label="Product Category" />
      <TextInput source="manufacturer" fullWidth label="Manufacturer" />
      <NumberInput source="stock" fullWidth label="Stock" />
    </SimpleForm>
  </Create>
);
