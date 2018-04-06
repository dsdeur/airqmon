import { injectGlobal } from './styled-components';
import * as React from 'react';
import { render } from 'react-dom';

import viewer from './analytics';
import { App } from './app';

const keys = require('../keys.json');

viewer.screenview('Tray window', 'Airqmon').send();

injectGlobal`
  @font-face {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, '.SFNSDisplay-Regular', 'Helvetica Neue', Helvetica, sans-serif;
  }
`;

render(<App airlyToken={keys.airly} />, document.getElementById('app'));
