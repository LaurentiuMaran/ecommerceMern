import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
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
