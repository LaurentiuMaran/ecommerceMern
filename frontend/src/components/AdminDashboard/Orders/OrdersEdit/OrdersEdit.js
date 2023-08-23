import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
} from 'react-admin';

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="user" fullWidth disabled />
      <NumberInput source="totalPrice" fullWidth />
      <SelectInput
        source="status"
        fullWidth
        choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'processing', name: 'Processing' },
          { id: 'shipped', name: 'Shipped' },
          { id: 'delivered', name: 'Delivered' },
          { id: 'cancelled', name: 'Cancelled' },
        ]}
      />
    </SimpleForm>
  </Edit>
);
