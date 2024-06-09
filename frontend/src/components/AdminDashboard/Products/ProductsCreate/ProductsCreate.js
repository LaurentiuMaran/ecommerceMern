import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const validateRequired = (message = 'Required') => value => value ? undefined : message;
const validateMinLength = (min, message = `Must be at least ${min} characters`) => value =>
  value && value.length >= min ? undefined : message;

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput 
        source="name" 
        fullWidth 
        label="Product Name" 
        validate={[validateRequired(), validateMinLength(3)]} 
      />
      <NumberInput 
        source="price" 
        fullWidth 
        label="Product Price" 
        validate={validateRequired()} 
      />
      <TextInput
        source="description"
        fullWidth
        label="Product Description"
        multiline
        validate={[validateRequired(), validateMinLength(10)]}
      />
      <TextInput 
        source="image" 
        label="Image URL" 
        fullWidth 
        validate={validateRequired()} 
      />
      <TextInput 
        source="category" 
        fullWidth 
        label="Product Category" 
        validate={validateRequired()} 
      />
      <TextInput 
        source="manufacturer" 
        fullWidth 
        label="Manufacturer" 
        validate={validateRequired()} 
      />
      <NumberInput 
        source="stock" 
        fullWidth 
        label="Stock" 
        validate={validateRequired()} 
      />
    </SimpleForm>
  </Create>
);
