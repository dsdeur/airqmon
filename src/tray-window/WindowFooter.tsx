import styled, { IStyleAwareProps } from '../styled-components';

import * as React from 'react';

import { ipcRenderer } from 'electron';

import { formatDateTo24Time } from '../helpers';
import IPC_EVENTS from '../ipc-events';

import Link from './Link';
import { textMixin } from '../style-mixins';

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

  const FooterText = styled.div`
    ${textMixin};
    margin-top: 10px;
    padding-left: 10px;
    font-size: ${parseInt(props.theme.text.smallSize, 10) - 1}px;
    float: left;
  `;

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
        <div className="btn-group">
          <button
            className={'btn btn-default' + (props.isAutoRefreshEnabled ? ' active' : '')}
            onClick={props.onRefreshClick}
          >
            <span className="icon icon-arrows-ccw" title="Background fetch" />
          </button>
          <button className="btn btn-default">
            <span
              className="icon icon-cog"
              title="Preferences"
              onClick={props.onPreferencesClickHandler}
            />
          </button>
          <button className="btn btn-default" onClick={props.onQuitClick}>
            <span className="icon icon-cancel" title="Quit" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const StyledWindowFooter = styled(WindowFooter)`
  box-shadow: none;
`;

export default StyledWindowFooter;
