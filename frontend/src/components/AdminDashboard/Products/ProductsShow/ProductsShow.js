import * as React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';

export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <NumberField source="price" />
      <TextField source="description" />
      <TextField source="image" />
      <TextField source="category" />
      <TextField source="manufacturer" />
      <NumberField source="stock" />
    </SimpleShowLayout>
  </Show>
);
