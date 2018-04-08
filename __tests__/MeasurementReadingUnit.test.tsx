import * as React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import MeasurementReadingUnit, {
  Unit,
} from '../src/tray-window/measurement/MeasurementReadingUnit';
import { LightTheme } from '../src/theme';

describe('<MeasurementReadingUnit />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PERCENT} />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct unit for Unit.PERCENT', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PERCENT} />).dive();
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders correct unit for Unit.PM', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PM} />).dive();
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders correct unit for Unit.PRESSURE_PA', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.PRESSURE_PA} />).dive();
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders correct unit for Unit.TEMP_C', () => {
    const wrapper = shallow(<MeasurementReadingUnit unit={Unit.TEMP_C} />).dive();
    expect(wrapper.text()).toMatchSnapshot();
  });
});
