import * as React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import MeasurementReadingUnit, {
  Unit,
} from '../src/tray-window/measurement/MeasurementReadingUnit';

const testTheme = {
  text: {
    primarySize: '10pt',
  },
};

describe('MeasurementReadingUnit', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MeasurementReadingUnit theme={testTheme} unit={Unit.PERCENT} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('measurement__unit')).toBe(true);
  });

  it('renders correct unit for Unit.PERCENT', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PERCENT} />);
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders correct unit for Unit.PM', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PM} />);
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders correct unit for Unit.PRESSURE_PA', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PRESSURE_PA} />);
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders correct unit for Unit.TEMP_C', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.TEMP_C} />);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
