import * as React from 'react';
import styled from 'styled-components';
import { getCAQIMeta } from '../../caqi';
import { ContentSpacing, Text } from '../../parts';
import AirQualityValueBar from './AirQualityValueBar';

interface IAirQualityInfo {
  airQualityIndex: number;
  className?: string;
}

const AirQualityInfo: React.SFC<IAirQualityInfo> = (props) => {
  const AirQuality = ContentSpacing.extend`
    margin-top: 0;
  `;

  const AirQualityDescription = Text.extend`
    font-size: ${(props) => props.theme.text.secondarySize};
    margin-top: calc(${(props) => props.theme.spacing} / 2);
  `;

  const AirQualityAdvisory = AirQualityDescription.extend`
    font-weight: 500;
  `;

  const airQualityMeta = getCAQIMeta(Math.round(props.airQualityIndex));

  return (
    <AirQuality className={props.className}>
      <Text>Common Air Quality Index (CAQI)</Text>
      <AirQualityValueBar airQualityIndex={props.airQualityIndex} />
      <Text>Advisory</Text>
      <AirQualityAdvisory>{airQualityMeta.advisory}</AirQualityAdvisory>
      <AirQualityDescription>{airQualityMeta.description}</AirQualityDescription>
    </AirQuality>
  );
};

const StyledAirQualityInfo = styled(AirQualityInfo)`
  display: flex;
  align-items: center;
`;

export default StyledAirQualityInfo;
