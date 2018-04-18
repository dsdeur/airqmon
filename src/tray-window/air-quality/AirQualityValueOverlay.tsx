import * as React from 'react';

import styled, { IStyleAwareProps } from '../../styled-components';
import { getCAQIMeta, CAQI_INDEX_VALUES } from '../../caqi';

const MAX_LEFT = 234; // px

interface IAQValueOverlayProps extends IStyleAwareProps {
  airQualityIndex: number;
  ratio: number;
}

class AirQualityValueOverlay extends React.Component<IAQValueOverlayProps> {
  constructor(props: IAQValueOverlayProps) {
    super(props);
  }

  render() {
    const airQualityIndex = Math.round(this.props.airQualityIndex);
    const airQualityMeta = getCAQIMeta(airQualityIndex);
    const left = `${
      airQualityIndex >= 125
        ? MAX_LEFT
        : this.props.airQualityIndex * MAX_LEFT * this.props.ratio / 100
    }px`;

    return (
      <StyledAirQualityValueOverlayElement caqi={airQualityMeta.index} style={{ left }}>
        {airQualityIndex}
      </StyledAirQualityValueOverlayElement>
    );
  }
}

interface IAirQualityValueOverlayElement
  extends IStyleAwareProps,
    React.HTMLAttributes<HTMLDivElement> {
  caqi: CAQI_INDEX_VALUES;
}

const AirQualityValueOverlayElement: React.SFC<IAirQualityValueOverlayElement> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

const StyledAirQualityValueOverlayElement = styled(AirQualityValueOverlayElement)`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 2.5rem;
  height: 2.25rem;
  top: -0.35rem;
  color: ${(props) => props.theme.text.lightColor};
  font-size: 1.05em;
  font-weight: 400;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
  box-shadow: 2px 2px 8px 0px rgba(153, 153, 153, 0.5);
  transition: left 0.33s linear;
  background-color: ${(props) => props.theme.text.airQualityIndexColor[`$${props.caqi}`]};
`;

export default AirQualityValueOverlay;
