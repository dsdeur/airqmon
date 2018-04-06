import { ipcRenderer } from 'electron';
import * as React from 'react';
import { formatDateTo24Time } from '../helpers';
import IPC_EVENTS from '../ipc-events';
import { Button, Link, PhotonIcon, Text } from '../parts';
import styled, { IStyleAwareProps } from '../styled-components';

interface IWindowFooterProps extends IStyleAwareProps {
  lastUpdateDate?: Date;
  isAutoRefreshEnabled: boolean;
  onRefreshClick: () => void;
  onPreferencesClickHandler: () => void;
  onQuitClick: () => void;
}

const WindowFooter: React.SFC<IWindowFooterProps> = (props) => {
  function handleExtLinkClick(url: string, event: MouseEvent) {
    event.preventDefault();
    ipcRenderer.send(IPC_EVENTS.OPEN_BROWSER_FOR_URL, url);
  }

  const lastUpdate: string = props.lastUpdateDate
    ? `, last update at ${formatDateTo24Time(props.lastUpdateDate)}`
    : null;

  const FooterText = Text.extend`
    margin-top: 10px;
    padding-left: 10px;
    font-size: ${(props) => props.theme.text.smallSize};
    float: left;
  `;

  const ButtonGroup = styled.div.attrs({
    className: 'btn-group',
  })``;

  return (
    <footer className={`toolbar ${props.className}`}>
      <FooterText>
        Powered by&nbsp;
        <Link href="#" onClick={handleExtLinkClick.bind(this, 'https://developer.airly.eu')}>
          Airly
        </Link>
        {lastUpdate}
      </FooterText>
      <div className="toolbar-actions pull-right">
        <ButtonGroup>
          <Button
            active={props.isAutoRefreshEnabled}
            onClick={props.onRefreshClick}
            icon={PhotonIcon.arrows_ccw}
          />
          <Button onClick={props.onPreferencesClickHandler} icon={PhotonIcon.cog} />
          <Button onClick={props.onQuitClick} icon={PhotonIcon.cancel} />
        </ButtonGroup>
      </div>
    </footer>
  );
};

const StyledWindowFooter = styled(WindowFooter)`
  box-shadow: none;
`;

export default StyledWindowFooter;
