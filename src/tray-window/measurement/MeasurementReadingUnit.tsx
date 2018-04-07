import * as React from 'react';
import styled, { IStyleAwareProps } from '../../styled-components';

export enum Unit {
  PM = 'PM',
  TEMP_C = 'TEMP_C',
  PRESSURE_PA = 'PRESSURE_PA',
  PERCENT = 'PERCENT',
}

interface IMeasurementReadingUnitProps extends IStyleAwareProps {
  unit: Unit;
}

const MeasurementReadingUnit: React.SFC<IMeasurementReadingUnitProps> = (props) => {
  const content = {
    [Unit.PM]: (
      <>
        μg/m<sup>3</sup>
      </>
    ),
    [Unit.TEMP_C]: (
      <>
        <sup>&deg;</sup>C
      </>
    ),
    [Unit.PRESSURE_PA]: 'hPA',
    [Unit.PERCENT]: '%',
  }[props.unit];

  return <div className={props.className}>{content}</div>;
};

const StyledMeasurementReadingUnit = styled(MeasurementReadingUnit)`
  display: inline;

  &::before {
    content: ' ';
    white-space: pre;
  }
`;

export default StyledMeasurementReadingUnit;
