import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 md:mb-4">
      <label
        htmlFor={props.id || props.name}
        className="block text-gray-700 text-sm md:text-base font-bold mb-1 md:mb-2"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`shadow appearance-none border rounded w-full py-1 md:py-2 px-2 md:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          meta.touched && meta.error ? 'border-red-500' : ''
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs md:text-sm italic">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default TextInput;
