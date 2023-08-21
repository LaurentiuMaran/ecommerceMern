import * as React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <NumberField source="price" />
      <TextField source="category" />
      <TextField source="manufacturer" />
      <NumberField source="stock" />
    </Datagrid>
  </List>
);
