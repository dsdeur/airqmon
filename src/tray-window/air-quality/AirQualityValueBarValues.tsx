import * as React from 'react';
import { Text } from '../../parts';
import styled, { IStyleAwareProps } from '../../styled-components';

interface IAQValueBarValueProps extends IStyleAwareProps {
  caqi: number;
}

const AirQualityValueBarValueElement: React.SFC<IAQValueBarValueProps> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const AirQualityValueBarValue = styled(AirQualityValueBarValueElement)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 0.075em;
  padding: 0.075em 0.45em;
  background-color: ${(props) => props.theme.text.airQualityIndexColor[`$${props.caqi}`]};
`;

export const AirQualityValueBarValues = Text.extend`
  display: flex;
  font-size: ${(props) => props.theme.text.secondarySize};
  height: 2em;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.text.lightColor};

  > ${AirQualityValueBarValue} {
    &:first-child {
      border-radius: ${(props) => props.theme.borderRadius} 0 0
        ${(props) => props.theme.borderRadius};
      text-align: left;
    }

    &:last-child {
      margin-right: 0.075em;
      border-radius: 0 ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius}
        0;
      text-align: center;
    }
  }
`;
