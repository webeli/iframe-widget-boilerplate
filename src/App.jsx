import React, { useEffect } from 'react';
import feather from 'feather-icons';

import Badge from './containers/Badge';

function App () {
  useEffect(() => {
    window.xprops.setFrameClass('badge-simple');
    feather.replace();
    console.log('Widget: Application Mounted...');
  }, []);

  return <Badge />;
}

export default App;
