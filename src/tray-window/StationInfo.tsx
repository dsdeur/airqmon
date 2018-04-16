import * as React from 'react';
import { IArilyNearestSensorMeasurement } from '../airly';
import { ContentSpacing, Icon, Link, PhotonIcon, CenteredText } from '../parts';
import styled, { IStyleAwareProps } from '../styled-components';

interface IStationInfoProps extends IStyleAwareProps {
  station: IArilyNearestSensorMeasurement;
  onClickHandler: () => void;
}

const StationInfo: React.SFC<IStationInfoProps> = ({ station, ...props }) => {
  return (
    <ContentSpacing className={props.className}>
      <CenteredText>
        <Link href="#" onClick={props.onClickHandler}>
          <Icon icon={PhotonIcon.direction} />
          {`${station.address.locality}, ${station.address.route}`}
        </Link>
      </CenteredText>
      <CenteredText>Distance to station {(station.distance / 1000).toFixed(1)} km</CenteredText>
    </ContentSpacing>
  );
};

const StyledStationInfo = styled(StationInfo)`
  margin-top: calc(${(props) => props.theme.spacing} * 2);

  > ${CenteredText} {
    font-size: ${(props) => props.theme.text.smallSize};
  }
`;

export default StyledStationInfo;
