import * as React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="category" />
      <TextField source="manufacturer" />
      <NumberField source="price" />
      <NumberField source="stock" />
    </Datagrid>
  </List>
);
