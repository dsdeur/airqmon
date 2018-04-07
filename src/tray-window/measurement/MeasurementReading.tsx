import * as React from 'react';

import MeasurementReadingUnit, { Unit } from './MeasurementReadingUnit';
import styled, { IStyleAwareProps } from '../../styled-components';
import { CenteredText } from '../../parts';

export interface IMeasurementReadingProps extends IStyleAwareProps {
  formatter?: (val: number) => string;
  reading?: number;
  unit?: Unit;
}

const MeasurementReading: React.SFC<IMeasurementReadingProps> = ({
  formatter,
  reading,
  unit,
  ...props
}) => (
  <div className={props.className}>
    <CenteredText>
      {reading ? (formatter ? formatter(reading) : reading) : 'n/a'}
      {reading && unit ? <MeasurementReadingUnit unit={unit} /> : null}
      {props.children}
    </CenteredText>
  </div>
);

const StyledMeasurementReading = styled(MeasurementReading)`
  > ${CenteredText} & {
    font-size: calc(${(props) => props.theme.text.primarySize} + 1pt);
  }
`;

export default StyledMeasurementReading;
