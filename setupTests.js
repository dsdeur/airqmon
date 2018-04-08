const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('jest-styled-components');

Enzyme.configure({ adapter: new Adapter() });
