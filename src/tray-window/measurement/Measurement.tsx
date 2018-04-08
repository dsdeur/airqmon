import * as React from 'react';
import {
  CONTAMINATION_NORM_VALUES,
  CONTAMINATION_THRESHOLDS,
  Contaminants,
  getContaminationThresholdIndex,
} from '../../contamination';
import { CenteredText } from '../../parts';
import styled, { IStyleAwareProps } from '../../styled-components';
import MeasurementReading, { IMeasurementReadingProps } from './MeasurementReading';
import { Unit } from './MeasurementReadingUnit';

export const formatters: { [key: string]: (val: number) => string } = {
  significant: (val) => val.toFixed(0),
  toFixed2: (val) => val.toFixed(2),
  toFixed1: (val) => val.toFixed(1),
};

const CONTAMINANT_DESCRIPTIONS = {
  [Contaminants.PM1]: 'PM1',
  [Contaminants.PM10]: 'PM10',
  [Contaminants.PM25]: 'PM2.5',
};

const CONTAMINANT_UNITS = {
  [Contaminants.PM1]: Unit.PM,
  [Contaminants.PM10]: Unit.PM,
  [Contaminants.PM25]: Unit.PM,
};

const CONTAMINANT_FORMATTERS = {
  [Contaminants.PM1]: formatters.significant,
  [Contaminants.PM10]: formatters.significant,
  [Contaminants.PM25]: formatters.significant,
};

const MeasurementDescription = CenteredText.extend`
  text-transform: uppercase;
  color: ${(props) => props.theme.text.darkColor};
  font-size: ${(props) => props.theme.text.secondarySize};
`;

interface IMeasurementNormProps extends IStyleAwareProps {
  contaminationThresholdIndex?: number;
}

const MeasurementNormComponent: React.SFC<IMeasurementNormProps> = (props) => {
  return <CenteredText className={props.className}>{props.children}</CenteredText>;
};

const MeasurementNorm = styled(MeasurementNormComponent)`
  font-size: ${(props) => props.theme.text.secondarySize};
  color: ${(props) =>
    Number.isInteger(props.contaminationThresholdIndex)
      ? props.theme.text.airQualityIndexColor[`$${Math.min(props.contaminationThresholdIndex, 5)}`]
      : props.theme.text.primaryColor};
`;

interface IMeasurementProps extends IMeasurementReadingProps, IStyleAwareProps {
  contaminant?: Contaminants;
  description?: string;
  norm?: number;
}

const Measurement: React.SFC<IMeasurementProps> = ({
  contaminant,
  reading,
  description = CONTAMINANT_DESCRIPTIONS[contaminant],
  formatter = CONTAMINANT_FORMATTERS[contaminant],
  norm = CONTAMINATION_NORM_VALUES[contaminant],
  unit = CONTAMINANT_UNITS[contaminant],
  ...props
}) => {
  let normContent: JSX.Element = null;
  if (contaminant && CONTAMINATION_THRESHOLDS[contaminant]) {
    normContent = (
      <MeasurementNorm
        contaminationThresholdIndex={getContaminationThresholdIndex(contaminant, reading)}
      >
        {(reading / norm * 100).toFixed(0)}%
      </MeasurementNorm>
    );
  }

  return (
    <div className={props.className}>
      <MeasurementReading reading={reading} unit={unit} formatter={formatter}>
        {normContent}
      </MeasurementReading>
      <MeasurementDescription>{description}</MeasurementDescription>
    </div>
  );
};

const StyledMeasurement = styled(Measurement)`
  flex-basis: 50%;
  flex-direction: row;
  margin-top: 8px;
`;

export { IMeasurementProps };
export default StyledMeasurement;
