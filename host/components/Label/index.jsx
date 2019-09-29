import React from 'react';

function Label (props) {
  const { required, children } = props;

  return (
    <label className='block mb-1 text-sm'>
      {required && <span className='inline-block text-red-500 mr-1'>*</span>}
      {children}
    </label>
  );
}

export default Label;
