import styled, { IStyleAwareProps } from '../styled-components';

import * as React from 'react';

import { AirlyAPIStatus, IAirlyCurrentMeasurement, IArilyNearestSensorMeasurement } from '../airly';
import ErrorBoundary from './ErrorBoundary';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

interface ITrayWindowProps extends IStyleAwareProps {
  airlyApiStatus?: AirlyAPIStatus;
  geolocationError?: PositionError;
  availableAppUpdate?: { version: string; url: string };
  connectionStatus: boolean;
  currentMeasurements?: IAirlyCurrentMeasurement;
  isAutoRefreshEnabled: boolean;
  lastUpdateDate?: Date;
  nearestStation?: IArilyNearestSensorMeasurement;
  onQuitClickHandler: () => void;
  onRefreshClickHandler: () => void;
  onPreferencesClickHandler: () => void;
}

const TrayWindow: React.SFC<ITrayWindowProps> = (props) => {
  return (
    <div className={props.className}>
      <Header />
      <ErrorBoundary>
        <Content
          airlyApiStatus={props.airlyApiStatus}
          geolocationError={props.geolocationError}
          availableAppUpdate={props.availableAppUpdate}
          connectionStatus={props.connectionStatus}
          currentMeasurements={props.currentMeasurements}
          nearestStation={props.nearestStation}
        />
      </ErrorBoundary>
      <Footer
        lastUpdateDate={props.lastUpdateDate}
        isAutoRefreshEnabled={props.isAutoRefreshEnabled}
        onQuitClick={props.onQuitClickHandler}
        onRefreshClick={props.onRefreshClickHandler}
        onPreferencesClickHandler={props.onPreferencesClickHandler}
      />
    </div>
  );
};

const StyledTrayWindow = styled(TrayWindow)`
  position: absolute;
  top: 5px;

  border-top-left-radius: ${(props) => props.theme.border.radius};
  border-top-right-radius: ${(props) => props.theme.border.radius};

  font-size: ${(props) => props.theme.text.primarySize};
  color: ${(props) => props.theme.text.primaryColor};
`;

export default StyledTrayWindow;
