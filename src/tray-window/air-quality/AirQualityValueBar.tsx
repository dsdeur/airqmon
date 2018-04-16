import * as React from 'react';
import { CAQI_INDEX, CAQI_MAX_VAL, CAQI_MIN_VAL, getCAQIMeta } from '../../caqi';
import styled, { IStyleAwareProps } from '../../styled-components';
import AirQualityValueOverlay from './AirQualityValueOverlay';
import { AirQualityValueBarValue, AirQualityValueBarValues } from './AirQualityValueBarValues';
import { AirQualityValueBarLabels, AirQualityValueBarLabel } from './AirQualityValueBarLabel';

const MIN_CAQI_META = getCAQIMeta(CAQI_MIN_VAL);
const MED_CAQI_META = getCAQIMeta((CAQI_MIN_VAL + CAQI_MAX_VAL) / 2 + 1);
const MAX_CAQI_META = getCAQIMeta(CAQI_MAX_VAL + 1);

interface IAQValueBarProps extends IStyleAwareProps {
  airQualityIndex: number;
}

const AirQualityValueBar: React.SFC<IAQValueBarProps> = (props) => {
  const aqValueBarValues = CAQI_INDEX.reduce((acc, currentValue, currentIndex) => {
    return [
      ...acc,
      <AirQualityValueBarValue key={currentValue.index} caqi={currentValue.index}>
        {currentIndex == 0 ? currentValue.values.min : null}
        {currentIndex == CAQI_INDEX.length - 1 ? `${currentValue.values.min}+` : null}
      </AirQualityValueBarValue>,
    ];
  }, []);

  return (
    <div className={props.className}>
      <AirQualityValueBarValues>{aqValueBarValues}</AirQualityValueBarValues>
      <AirQualityValueOverlay
        airQualityIndex={props.airQualityIndex}
        ratio={(CAQI_INDEX.length - 1) / CAQI_INDEX.length}
      />
      <AirQualityValueBarLabels>
        <AirQualityValueBarLabel>{MIN_CAQI_META.labels.airQuality}</AirQualityValueBarLabel>
        <AirQualityValueBarLabel>{MED_CAQI_META.labels.airQuality}</AirQualityValueBarLabel>
        <AirQualityValueBarLabel>{MAX_CAQI_META.labels.airQuality}</AirQualityValueBarLabel>
      </AirQualityValueBarLabels>
    </div>
  );
};

const AirQualityValueBarStyled = styled(AirQualityValueBar)`
  position: relative;
  margin-top: ${(props) => props.theme.spacing};
  margin-bottom: ${(props) => props.theme.spacing};
`;

export default AirQualityValueBarStyled;
