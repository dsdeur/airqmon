import styled, { IStyleAwareProps } from '../styled-components';

import * as React from 'react';

import { IArilyNearestSensorMeasurement } from '../airly';

import ContentSpacing from '../parts/ContentSpacing';
import Link from '../parts/Link';
import { Text } from '../parts/Text';

interface IStationInfoProps extends IStyleAwareProps {
  station: IArilyNearestSensorMeasurement;
  onClickHandler: () => void;
}

const StationInfo: React.SFC<IStationInfoProps> = (props) => {
  const smallerFontSize = {
    fontSize: `${parseInt(props.theme.text.smallSize, 10) - 1}pt`,
  };

  return (
    <div className={props.className}>
      <ContentSpacing>
        <Link style={smallerFontSize} href="#" onClick={props.onClickHandler}>
          <span className="icon icon-direction" />&nbsp;
          {`${props.station.address.locality}, ${props.station.address.route}`}
        </Link>
        <Text style={smallerFontSize}>
          Distance to station {(props.station.distance / 1000).toFixed(1)} km<br />
        </Text>
      </ContentSpacing>
    </div>
  );
};

const StyledStationInfo = styled(StationInfo)`
  margin-top: ${(props) => props.theme.spacing};
`;

export default StyledStationInfo;
