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
  const AirQualityDescription = Text.extend`
    font-size: ${(props) => props.theme.text.secondarySize};
    margin-top: calc(${(props) => props.theme.spacing} / 2);
  `;

  const AirQualityAdvisory = AirQualityDescription.extend`
    font-weight: 500;
  `;

  const Header = Text.extend`
    font-weight: 400;
  `;

  const airQualityMeta = getCAQIMeta(Math.round(props.airQualityIndex));

  return (
    <ContentSpacing className={props.className}>
      <Header>Common Air Quality Index (CAQI)</Header>
      <AirQualityValueBar airQualityIndex={props.airQualityIndex} />
      <Header>Advisory</Header>
      <AirQualityAdvisory>{airQualityMeta.advisory}</AirQualityAdvisory>
      <AirQualityDescription>{airQualityMeta.description}</AirQualityDescription>
    </ContentSpacing>
  );
};

const StyledAirQualityInfo = styled(AirQualityInfo)`
  display: block;
`;

export default StyledAirQualityInfo;
