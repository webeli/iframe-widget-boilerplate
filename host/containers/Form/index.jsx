import React from 'react';

import Label from '../../components/Label';

function Form () {
  return (
    <div className='w-full pt-12 px-6 pb-8 bg-gray-300'>
      <div className='form-header mb-4'>
        <p className='text-4xl font-bold'>Write to us</p>
        <p className='font-bold leading-relaxed'>
          Tell us what you are experiencing. The more details you give us, the faster we can assist you.
        </p>
      </div>
      <div className='form-content'>
        <form className='w-full max-w-lg'>
          <div className='flex flex-wrap mb-4'>
            <div className='w-1/2 pr-3'>
              <Label required>First Name</Label>
              <input type='text' placeholder='John' className='w-full rounded pl-2 text-sm h-8' maxLength='25' />
            </div>
            <div className='w-1/2 pl-3'>
              <Label required>Last Name</Label>
              <input type='text' placeholder='Doe' className='w-full rounded pl-2 text-sm h-8' maxLength='25' />
            </div>
          </div>
          <div className='mb-4'>
            <Label required>I would like help with</Label>
            <textarea className='w-full resize-none' rows='8' maxLength='400' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
