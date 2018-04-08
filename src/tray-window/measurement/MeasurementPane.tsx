import * as React from 'react';
import { IAirlyCurrentMeasurement } from '../../airly';
import { Contaminants } from '../../contamination';
import styled, { IStyleAwareProps } from '../../styled-components';
import Measurement, { formatters } from './Measurement';
import { Unit } from './MeasurementReadingUnit';
import { ContentSpacing } from '../../parts';

interface IMeasurementPaneProps extends IStyleAwareProps {
  measurement?: IAirlyCurrentMeasurement;
}

const MeasurementPane: React.SFC<IMeasurementPaneProps> = (props) => {
  const { measurement: { pm25, pm10, pm1, temperature, pressure, humidity } } = props;

  return (
    <ContentSpacing className={props.className}>
      <Measurement
        contaminant={Contaminants.PM25}
        reading={pm25}
        formatter={formatters.significant}
      />
      <Measurement
        contaminant={Contaminants.PM10}
        reading={pm10}
        formatter={formatters.significant}
      />
      <Measurement
        contaminant={Contaminants.PM1}
        reading={pm1}
        formatter={formatters.significant}
      />
      <Measurement
        description="Temperature"
        unit={Unit.TEMP_C}
        reading={temperature}
        formatter={formatters.toFixed2}
      />
      <Measurement
        description="Pressure"
        unit={Unit.PRESSURE_PA}
        reading={pressure / 100}
        formatter={formatters.toFixed1}
      />
      <Measurement
        description="Humidity"
        unit={Unit.PERCENT}
        reading={humidity}
        formatter={formatters.toFixed2}
      />
    </ContentSpacing>
  );
};

const StyledMeasurementPane = styled(MeasurementPane)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default StyledMeasurementPane;
