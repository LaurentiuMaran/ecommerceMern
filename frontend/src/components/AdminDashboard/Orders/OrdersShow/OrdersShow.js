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
      <TextField source="address.fullName" label="Name" fullWidth disabled />
      <TextField source="status" fullWidth />
      <NumberField source="totalPrice" fullWidth />
      <TextField source="address.address" fullWidth />
      <TextField source="address.country" fullWidth />
      <TextField source="address.state" fullWidth />
      <DateField source="createdAt" fullWidth />
    </SimpleShowLayout>
  </Show>
);
