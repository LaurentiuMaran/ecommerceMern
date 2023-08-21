import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  DateField,
} from 'react-admin';

export const OrderShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="user" />
      <TextField source="status" />
      <NumberField source="totalPrice" />
      <DateField source="createdAt" />
    </SimpleShowLayout>
  </Show>
);
