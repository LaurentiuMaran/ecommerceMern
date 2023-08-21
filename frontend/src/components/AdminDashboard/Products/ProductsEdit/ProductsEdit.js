import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth />
      <NumberInput source="price" fullWidth />
      <TextInput source="description" fullWidth />
      <TextInput source="image" fullWidth />
      <TextInput source="category" fullWidth />
      <TextInput source="manufacturer" fullWidth />
      <NumberInput source="stock" fullWidth />
    </SimpleForm>
  </Edit>
);
