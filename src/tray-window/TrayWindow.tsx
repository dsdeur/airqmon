import styled, { IStyleAwareProps } from '../styled-components';

import * as React from 'react';

import { AirlyAPIStatus, IAirlyCurrentMeasurement, IArilyNearestSensorMeasurement } from '../airly';
import ErrorBoundary from './ErrorBoundary';
import WindowContent from './WindowContent';
import WindowFooter from './WindowFooter';
import WindowHeader from './WindowHeader';

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
    <div className={`window ${props.className}`}>
      <WindowHeader />
      <ErrorBoundary>
        <WindowContent
          airlyApiStatus={props.airlyApiStatus}
          geolocationError={props.geolocationError}
          availableAppUpdate={props.availableAppUpdate}
          connectionStatus={props.connectionStatus}
          currentMeasurements={props.currentMeasurements}
          nearestStation={props.nearestStation}
        />
      </ErrorBoundary>
      <WindowFooter
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

  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
`;

export default StyledTrayWindow;
