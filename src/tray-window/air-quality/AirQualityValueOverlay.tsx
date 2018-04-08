import * as React from 'react';

import styled, { IStyleAwareProps, IDOMRefProvider } from '../../styled-components';

interface IAQValueOverlayProps extends IStyleAwareProps, React.HTMLAttributes<HTMLDivElement> {
  caqi: number;
  visibility: 'visible' | 'hidden';
  top: number;
  left: number;
}

class AirQualityValueOverlay extends React.Component<IAQValueOverlayProps>
  implements IDOMRefProvider {
  private _ref: HTMLDivElement;

  constructor(props: IAQValueOverlayProps) {
    super(props);
  }

  get ref() {
    return this._ref;
  }

  render() {
    return (
      <div ref={(node) => (this._ref = node)} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

const StyledAirQualityValueOverlay = styled(AirQualityValueOverlay)`
  position: absolute;
  width: 35px;
  color: ${(props) => props.theme.text.lightColor};
  font-size: calc(${(props) => props.theme.text.primarySize} + 0.1em);
  line-height: 2.25;
  font-weight: 400;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
  box-shadow: 2px 2px 8px 0px rgba(153, 153, 153, 0.5);
  transition: left 0.33s linear;
  background-color: ${(props) => props.theme.text.airQualityIndexColor[`$${props.caqi}`]};
  visibility: ${(props) => props.visibility};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export default StyledAirQualityValueOverlay;
