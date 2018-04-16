import { Text } from '../../parts';
import styled from '../../styled-components';

export const AirQualityValueBarLabel = Text.extend`
  flex: 1;
  font-size: ${(props) => props.theme.text.secondarySize};
  text-align: center;
`;

export const AirQualityValueBarLabels = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing};

  > ${AirQualityValueBarLabel} {
    &:nth-child(1) {
      text-align: left;
      color: ${(props) => props.theme.text.airQualityIndexColor.$1};
    }

    &:nth-child(2) {
      color: ${(props) => props.theme.text.airQualityIndexColor.$3};
    }

    &:nth-child(3) {
      text-align: right;
      color: ${(props) => props.theme.text.airQualityIndexColor.$5};
    }
  }
`;
