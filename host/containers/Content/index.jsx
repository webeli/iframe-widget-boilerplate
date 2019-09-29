import React, { useEffect } from 'react';
import feather from 'feather-icons';
import styled from 'styled-components';

import installWidget from './widgetInstaller';

import LoremIpsum from '../LoremIpsum';
import Form from '../Form';

const Container = styled.div`
  max-width: '1200px';
`;

function App () {
  useEffect(() => {
    // initialise icons
    feather.replace();

    // install widget
    installWidget();
  }, []);

  return (
    <Container className='container flex mt-20 mx-auto'>
      <div className='w-1/2 pl-4 pr-24'>
        <Form />
      </div>
      <div className='w-1/2 px-20'>
        <LoremIpsum />
      </div>
    </Container>
  );
}

export default App;
