import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin';

const validateRequired = (message = 'Required') => value => value ? undefined : message;

export const OrderEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput 
        source="address.fullName" 
        label="Name" 
        fullWidth 
        disabled 
        validate={validateRequired()} 
      />
      <NumberInput 
        source="totalPrice" 
        fullWidth 
        validate={validateRequired()} 
      />
      <SelectInput
        source="status"
        fullWidth
        choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'processing', name: 'Processing' },
          { id: 'delivered', name: 'Delivered' },
          { id: 'cancelled', name: 'Cancelled' },
        ]}
        validate={validateRequired()}
      />
    </SimpleForm>
  </Edit>
);
