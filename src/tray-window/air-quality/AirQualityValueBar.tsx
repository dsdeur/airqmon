import * as React from 'react';
import styled from 'styled-components';

import { CAQI_MIN_VAL, CAQI_MAX_VAL, CAQI_INDEX, ICAQIMetadata, getCAQIMeta } from '../../caqi';
import {
  BASE_SPACING,
  TEXT_COLOR_CAQI_1,
  TEXT_COLOR_CAQI_3,
  TEXT_COLOR_CAQI_5,
  BORDER_COLOR,
  BORDER_RADIUS,
  smallFont,
  getTextColorForCAQI,
} from '../../styles';

interface IAirQualityValueBarProps {
  airQualityIndex: number;
  className?: string;
}

interface IAirQualityValueBarState {
  hasRefs: boolean;
  elBoundingBox?: ClientRect;
  overlayElBoundingBox?: ClientRect;
  minCAQI: ICAQIMetadata;
  medCAQI: ICAQIMetadata;
  maxCAQI: ICAQIMetadata;
}

const AirQualityValueBarValues = styled.div`
  display: flex;
  background-color: ${BORDER_COLOR};
  border-radius: ${BORDER_RADIUS};
  ${smallFont};
  color: #eaeaea;

  div {
    flex: 1;
    margin: 1px 0 1px 1px;
    padding: 1px 6px;

    &:first-child {
      border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
      text-align: left;
    }

    &:last-child {
      margin-right: 1px;
      border-radius: 0 ${BORDER_RADIUS} ${BORDER_RADIUS} 0;
      text-align: center;
    }
  }
`;

const AirQualityValueBarDescription = styled.div`
  display: flex;
  margin-top: ${BASE_SPACING / 2}px;
  ${smallFont};

  div {
    flex: 1;
    text-align: center;

    &:nth-child(1) {
      text-align: left;
      color: ${TEXT_COLOR_CAQI_1};
    }

    &:nth-child(2) {
      color: ${TEXT_COLOR_CAQI_3};
    }

    &:nth-child(3) {
      text-align: right;
      color: ${TEXT_COLOR_CAQI_5};
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 35px;
  line-height: 2.25;
  color: #eaeaea;
  font-weight: 400;
  text-align: center;
  border-radius: ${BORDER_RADIUS};
  border: 1px solid ${BORDER_COLOR};
  box-shadow: 2px 2px 8px 0px rgba(153, 153, 153, 0.5);
  transition: left 0.33s linear;
`;

class AirQualityValueBar extends React.Component<
  IAirQualityValueBarProps,
  IAirQualityValueBarState
> {
  private valueBarNode: HTMLDivElement;
  private overlayNode: HTMLDivElement;

  constructor(props: IAirQualityValueBarProps) {
    super(props);

    this.state = {
      hasRefs: false,
      minCAQI: getCAQIMeta(CAQI_MIN_VAL),
      medCAQI: getCAQIMeta((CAQI_MIN_VAL + CAQI_MAX_VAL) / 2 + 1),
      maxCAQI: getCAQIMeta(CAQI_MAX_VAL + 1),
    };
  }

  componentDidMount(): void {
    const elBoundingBox = this.valueBarNode.getBoundingClientRect();

    this.setState({
      hasRefs: true,
      elBoundingBox,
      overlayElBoundingBox: this.overlayNode.getBoundingClientRect(),
    });
  }

  getOverlayStyle(): {
    visible: 'hidden' | 'visible';
    top: number;
    left: number;
  } {
    let top: number = 0;
    let left: number = 0;

    if (this.state.hasRefs) {
      const ratio: number =
        (this.valueBarNode.childElementCount - 1) / this.valueBarNode.childElementCount;

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

  render() {
    const airQualityMeta = getCAQIMeta(Math.round(this.props.airQualityIndex));

    const caqiValueBlocks = CAQI_INDEX.reduce((acc, currentValue, currentIndex) => {
      return [
        ...acc,
        <div key={currentValue.index} style={{ color: getTextColorForCAQI(currentValue.index) }}>
          {currentIndex == 0 ? currentValue.values.min : null}
          {currentIndex == CAQI_INDEX.length - 1 ? `${currentValue.values.min}+` : null}
        </div>,
      ];
    }, []);

    return (
      <div className={this.props.className}>
        <AirQualityValueBarValues
          ref={(node) => {
            this.valueBarNode = node;
          }}
        >
          {caqiValueBlocks}
        </AirQualityValueBarValues>
        <AirQualityValueBarDescription>
          <div>{this.state.minCAQI.labels.airQuality}</div>
          <div>{this.state.medCAQI.labels.airQuality}</div>
          <div>{this.state.maxCAQI.labels.airQuality}</div>
        </AirQualityValueBarDescription>
        <Overlay
          style={{ ...this.getOverlayStyle(), color: getTextColorForCAQI(airQualityMeta.index) }}
          ref={(node) => {
            this.overlayNode = node;
          }}
        >
          {this.props.airQualityIndex.toFixed(0)}
        </Overlay>
      </div>
    );
  }
}

const AirQualityValueBarStyled = styled(AirQualityValueBar)`
  position: relative;
  margin-top: ${BASE_SPACING}px;
`;

export default AirQualityValueBarStyled;
