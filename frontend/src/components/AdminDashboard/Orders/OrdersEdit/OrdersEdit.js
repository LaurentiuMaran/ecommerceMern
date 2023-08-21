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
      <TextInput disabled source="id" />
      <TextInput source="user" />
      <NumberInput source="totalPrice" />
      <SelectInput
        source="status"
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
