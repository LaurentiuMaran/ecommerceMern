import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="user" />
      <NumberInput source="totalPrice" />
    </SimpleForm>
  </Edit>
);
