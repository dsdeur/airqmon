import * as React from 'react';
import { CAQI_INDEX, CAQI_MAX_VAL, CAQI_MIN_VAL, ICAQIMetadata, getCAQIMeta } from '../../caqi';
import styled, { IStyleAwareProps } from '../../styled-components';
import { Text } from '../../parts';

interface IAQValueBarValueProps extends IStyleAwareProps {
  caqi: number;
}

const AQValueBarValueComponent: React.SFC<IAQValueBarValueProps> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

const AQValueBarValue = styled(AQValueBarValueComponent)`
  flex: 1;
  margin: 1px 0 1px 1px;
  padding: 1px 6px;
  color: ${(props) => props.theme.text.airQualityIndexColor[`$${props.caqi}`]};
`;

const AQValueBarValues = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.text.lightColor};

  > ${AQValueBarValue} {
    &:first-child {
      border-radius: ${(props) => props.theme.borderRadius} 0 0
        ${(props) => props.theme.borderRadius};
      text-align: left;
    }

    &:last-child {
      margin-right: 1px;
      border-radius: 0 ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius}
        0;
      text-align: center;
    }
  }
`;

const AQValueBarLabel = Text.extend`
  flex: 1;
  text-align: center;
`;

const AQValueBarLabels = styled.div`
  display: flex;
  margin-top: calc(${(props) => props.theme.spacing} / 2);

  > ${AQValueBarLabel} {
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

interface IAQValueOverlayInlineStyle {
  visible: 'hidden' | 'visible';
  top: number;
  left: number;
}

interface IAQValueOverlayProps extends IStyleAwareProps, React.HTMLAttributes<HTMLDivElement> {
  caqi: number;
  style?: any;
}

class AQValueOverlayComponent extends React.Component<IAQValueOverlayProps> {
  private _ref: HTMLDivElement;

  constructor(props: IAQValueOverlayProps) {
    super(props);
  }

  get ref() {
    return this._ref;
  }

  render() {
    return (
      <div ref={(div) => (this._ref = div)} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

const AQValueOverlay = styled(AQValueOverlayComponent)`
  position: absolute;
  width: 35px;
  line-height: 2.25;
  color: ${(props) => props.theme.text.lightColor};
  font-weight: 400;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.border};
  box-shadow: 2px 2px 8px 0px rgba(153, 153, 153, 0.5);
  transition: left 0.33s linear;
  background-color: ${(props) => props.theme.text.airQualityIndexColor[`$${props.caqi}`]};
`;

interface IAQValueBarProps extends IStyleAwareProps {
  airQualityIndex: number;
}

interface IAQValueBarState {
  hasRefs: boolean;
  elBoundingBox?: ClientRect;
  overlayElBoundingBox?: ClientRect;
  minCAQI: ICAQIMetadata;
  medCAQI: ICAQIMetadata;
  maxCAQI: ICAQIMetadata;
}

class AirQualityValueBar extends React.Component<IAQValueBarProps, IAQValueBarState> {
  private valueBarRef: HTMLDivElement;
  private overlayRef: HTMLDivElement;

  constructor(props: IAQValueBarProps) {
    super(props);

    this.state = {
      hasRefs: false,
      minCAQI: getCAQIMeta(CAQI_MIN_VAL),
      medCAQI: getCAQIMeta((CAQI_MIN_VAL + CAQI_MAX_VAL) / 2 + 1),
      maxCAQI: getCAQIMeta(CAQI_MAX_VAL + 1),
    };

    this.setValueBarRef = this.setValueBarRef.bind(this);
    this.setOverlayRef = this.setOverlayRef.bind(this);
  }

  componentDidMount(): void {
    const elBoundingBox = this.valueBarRef.getBoundingClientRect();

    this.setState({
      hasRefs: true,
      elBoundingBox,
      overlayElBoundingBox: this.overlayRef.getBoundingClientRect(),
    });
  }

  getOverlayStyle(): IAQValueOverlayInlineStyle {
    let top: number = 0;
    let left: number = 0;

    if (this.state.hasRefs) {
      const ratio: number =
        (this.valueBarRef.childElementCount - 1) / this.valueBarRef.childElementCount;

      top = (this.state.elBoundingBox.height - this.state.overlayElBoundingBox.height) / 2;
      left =
        this.props.airQualityIndex >= 125
          ? this.state.elBoundingBox.width - this.state.overlayElBoundingBox.width
          : (this.state.elBoundingBox.width * ratio - this.state.overlayElBoundingBox.width) *
            this.props.airQualityIndex /
            100;
    }

    return {
      visible: this.state.hasRefs ? 'visible' : 'hidden',
      top,
      left,
    };
  }

  setValueBarRef(node) {
    this.valueBarRef = node;
  }

  setOverlayRef(node) {
    this.overlayRef = node.ref;
  }

  render() {
    const airQualityMeta = getCAQIMeta(Math.round(this.props.airQualityIndex));

    const aqValueBarValues = CAQI_INDEX.reduce((acc, currentValue, currentIndex) => {
      return [
        ...acc,
        <AQValueBarValue key={currentValue.index} caqi={currentValue.index}>
          {currentIndex == 0 ? currentValue.values.min : null}
          {currentIndex == CAQI_INDEX.length - 1 ? `${currentValue.values.min}+` : null}
        </AQValueBarValue>,
      ];
    }, []);

    return (
      <div className={this.props.className}>
        <AQValueBarValues innerRef={this.setValueBarRef}>{aqValueBarValues}</AQValueBarValues>
        <AQValueBarLabels>
          <AQValueBarLabel>{this.state.minCAQI.labels.airQuality}</AQValueBarLabel>
          <AQValueBarLabel>{this.state.medCAQI.labels.airQuality}</AQValueBarLabel>
          <AQValueBarLabel>{this.state.maxCAQI.labels.airQuality}</AQValueBarLabel>
        </AQValueBarLabels>
        <AQValueOverlay
          style={this.getOverlayStyle()}
          caqi={airQualityMeta.index}
          innerRef={this.setOverlayRef}
        >
          {this.props.airQualityIndex.toFixed(0)}
        </AQValueOverlay>
      </div>
    );
  }
}

const AirQualityValueBarStyled = styled(AirQualityValueBar)`
  position: relative;
  margin-top: ${(props) => props.theme.spacing};
`;

export default AirQualityValueBarStyled;
