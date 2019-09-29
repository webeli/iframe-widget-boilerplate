import React from 'react';
import styled from 'styled-components';

const BadgeIcon = styled.div`
  border: 0.25rem solid #fff;
  width: 72px;
  height: 72px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
`;

const BadgeConent = styled.div`
  width: 11.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
`;

function Badge () {
  return (
    <div className='flex items-center cursor-pointer p-2 animated fadeIn'>
      <BadgeConent className='bg-green-800 py-3 px-6 w-48 -mr-4 rounded-l-lg'>
        <p className='text-white font-medium tracking-wide'>Chat with us!</p>
      </BadgeConent>
      <BadgeIcon className='bg-green-800 border-white rounded-full flex items-center justify-center'>
        <i className='h-6 w-6' data-feather='message-square' fill='#fff' stroke='#fff' />
      </BadgeIcon>
    </div>
  );
}

export default Badge;
