import * as React from 'react';
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="user" />
      <TextField source="status" />
      <NumberField source="totalPrice" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
