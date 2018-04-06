import * as React from 'react';
import { IArilyNearestSensorMeasurement } from '../airly';
import { ContentSpacing, Icon, Link, PhotonIcon, Text } from '../parts';
import styled, { IStyleAwareProps } from '../styled-components';

interface IStationInfoProps extends IStyleAwareProps {
  station: IArilyNearestSensorMeasurement;
  onClickHandler: () => void;
}

const StationInfo: React.SFC<IStationInfoProps> = ({ station, ...props }) => {
  return (
    <div className={props.className}>
      <ContentSpacing>
        <Link href="#" onClick={props.onClickHandler}>
          <Icon icon={PhotonIcon.direction} />
          {`${station.address.locality}, ${station.address.route}`}
        </Link>
        <Text>Distance to station {(station.distance / 1000).toFixed(1)} km</Text>
      </ContentSpacing>
    </div>
  );
};

const StyledStationInfo = styled(StationInfo)`
  margin-top: ${(props) => props.theme.spacing};

  > ${ContentSpacing} & {
    > ${Text}, > ${Link} {
      font-size: ${(props) => props.theme.text.smallSize};
    }
  }
`;

export default StyledStationInfo;
