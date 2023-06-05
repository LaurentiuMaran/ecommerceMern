import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CheckboxInput = ({ name, label }) => {
  return (
    <div className="mb-6">
      <Field
        type="checkbox"
        name={name}
        className="form-checkbox text-[indigo-600] h-5 w-5"
        id={name}
      />
      <label htmlFor={name} className="ml-2 text-sm text-gray-700">
        {label}
      </label>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs italic"
      />
    </div>
  );
};

export default CheckboxInput;
