import { shallow } from 'enzyme';
import * as React from 'react';
import { LightTheme } from '../src/theme';
import MeasurementReading from '../src/tray-window/measurement/MeasurementReading';
import MeasurementReadingUnit, {
  Unit,
} from '../src/tray-window/measurement/MeasurementReadingUnit';
import { shallowWithTheme } from './test-helpers';
import { wrap } from 'module';
import { CenteredText } from '../src/parts';

function getWrapper({ props = {}, children = null } = {}) {
  return shallowWithTheme(
    <MeasurementReading {...props}>{children}</MeasurementReading>,
    LightTheme,
  ).dive();
}

describe('<MeasurementReading />', () => {
  const reading = 1.23;
  const formatter = jest.fn((val) => val.toFixed(0));

  afterEach(() => {
    formatter.mockClear();
  });

  it('renders correctly', () => {
    const wrapper = getWrapper({ props: { reading, formatter } });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(CenteredText)).toHaveLength(1);
  });

  it('calls provided formatter', () => {
    const wrapper = getWrapper({ props: { reading, formatter } });

    expect(formatter).toHaveBeenCalledTimes(1);
    expect(formatter).toHaveBeenCalledWith(reading);
  });

  it('renders correctly without formatter', () => {
    const wrapper = getWrapper({ props: { reading } });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders passed children', () => {
    const wrapper = getWrapper({ props: { reading }, children: <div>A children node</div> });

    expect(wrapper).toMatchSnapshot();
  });

  it('Does not render <MeasurementReadingUnit /> if unit is not provided', () => {
    const wrapper = getWrapper({ props: { reading } });

    expect(wrapper.find(MeasurementReadingUnit)).toHaveLength(0);
  });

  it('Renders <MeasurementReadingUnit /> if unit is provided', () => {
    const wrapper = getWrapper({ props: { reading, unit: Unit.PRESSURE_PA } });

    expect(wrapper.find(MeasurementReadingUnit)).toHaveLength(1);
  });
});
