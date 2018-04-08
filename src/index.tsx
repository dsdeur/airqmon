import { injectGlobal } from './styled-components';
import * as React from 'react';
import { render } from 'react-dom';

import viewer from './analytics';
import { App } from './app';

const keys = require('../keys.json');

viewer.screenview('Tray window', 'Airqmon').send();

injectGlobal`
  @font-face {
    font-family: -apple-system, BlinkMacSystemFont, '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', sans-serif;
    font-size: 1.1em;
    line-height: 1.5;
  }
`;

render(<App airlyToken={keys.airly} />, document.getElementById('app'));
