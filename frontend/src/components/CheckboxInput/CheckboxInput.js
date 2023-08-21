import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CheckboxInput = ({ name, label }) => {
  return (
    <div className="mb-4 md:mb-6">
      <Field
        type="checkbox"
        name={name}
        className="form-checkbox text-[indigo-600] h-4 w-4 md:h-5 md:w-5"
        id={name}
      />
      <label htmlFor={name} className="ml-2 text-xs md:text-sm text-gray-700">
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
