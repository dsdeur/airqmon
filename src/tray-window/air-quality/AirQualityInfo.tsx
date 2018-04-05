import * as React from 'react';
import styled from 'styled-components';

import { getCAQIMeta } from '../../caqi';
import AirQualityValueBar from './AirQualityValueBar';
import { summary, BASE_SPACING, smallFont } from '../../styles';

const AirQuality = styled.div`
  ${summary};
  margin-top: 0;
`;

const AirQualityLabel = styled.div`
  ${summary};
  text-align: left;
`;

const AirQualityAdvisory = styled.div`
  ${summary};
  ${smallFont};
  text-align: left;
  margin-top: ${BASE_SPACING / 2}px;
  font-weight: 500;
`;

const AirQualityDescription = styled.div`
  ${summary};
  ${smallFont};
  text-align: left;
  margin-top: ${BASE_SPACING / 2}px;
`;

interface IAirQualityInfo {
  airQualityIndex: number;
  className?: string;
}

const AirQualityInfo: React.SFC<IAirQualityInfo> = (props) => {
  const airQualityMeta = getCAQIMeta(Math.round(props.airQualityIndex));

  return (
    <div className={props.className}>
      <AirQuality>
        <AirQualityLabel>Common Air Quality Index (CAQI)</AirQualityLabel>
        <AirQualityValueBar airQualityIndex={props.airQualityIndex} />
        <AirQualityLabel>Advisory</AirQualityLabel>
        <AirQualityAdvisory>{airQualityMeta.advisory}</AirQualityAdvisory>
        <AirQualityDescription>{airQualityMeta.description}</AirQualityDescription>
      </AirQuality>
    </div>
  );
};

const AirQualityInfoStyled = styled(AirQualityInfo)`
  display: flex;
  align-items: center;
`;

export default AirQualityInfoStyled;
