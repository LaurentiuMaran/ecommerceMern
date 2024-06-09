import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const validateRequired = (message = 'Required') => value => value ? undefined : message;
const validateMinLength = (min, message = `Must be at least ${min} characters`) => value =>
  value && value.length >= min ? undefined : message;

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput 
        source="name" 
        fullWidth 
        validate={[validateRequired(), validateMinLength(3)]} 
      />
      <NumberInput 
        source="price" 
        fullWidth 
        validate={validateRequired()} 
      />
      <TextInput 
        source="description" 
        fullWidth 
        validate={[validateRequired(), validateMinLength(10)]} 
      />
      <TextInput 
        source="image" 
        fullWidth 
        validate={validateRequired()} 
      />
      <TextInput 
        source="category" 
        fullWidth 
        validate={validateRequired()} 
      />
      <TextInput 
        source="manufacturer" 
        fullWidth 
        validate={validateRequired()} 
      />
      <NumberInput 
        source="stock" 
        fullWidth 
        validate={validateRequired()} 
      />
    </SimpleForm>
  </Edit>
);
