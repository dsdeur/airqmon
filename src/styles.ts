import styled, { css } from 'styled-components';

export const BASE_SPACING = 8;
export const BG_COLOR = '#ffffff';
export const BG_COLOR_DARK = '#ececec';
export const BORDER_COLOR = '#c2c0c2';
export const BORDER_RADIUS = '6px';
export const TEXT_COLOR_BASE = '#333';
export const TEXT_COLOR_CAQI_1 = '#79bc6a';
export const TEXT_COLOR_CAQI_2 = '#bbcf4c';
export const TEXT_COLOR_CAQI_3 = '#eec20b';
export const TEXT_COLOR_CAQI_4 = '#f29305';
export const TEXT_COLOR_CAQI_5 = '#e8416f';
export const TEXT_COLOR_ERROR = '#cc0000';
export const FONT_SIZE_M = '10pt';
export const FONT_SIZE_S = '8pt';
export const FONT_SIZE_BASE = FONT_SIZE_M;

export const baseFont = css`
  font-size: ${FONT_SIZE_BASE};
  color: ${TEXT_COLOR_BASE};
`;

export const smallFont = css`
  ${baseFont};
  font-size: ${FONT_SIZE_S};
`;

export const baseBorder = css`
  border: 1px solid ${BORDER_COLOR};
`;

export const summary = css`
  text-align: center;
  margin-top: ${BASE_SPACING}px;
  padding-left: ${BASE_SPACING}px;
  padding-right: ${BASE_SPACING}px;
  font-weight: 300;
  ${baseFont};
`;

export const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const getTextColorForCAQI = (caqi: 0 | 1 | 2 | 3 | 4): string => {
  switch (caqi) {
    case 0:
      return TEXT_COLOR_CAQI_1;
    case 1:
      return TEXT_COLOR_CAQI_2;
    case 2:
      return TEXT_COLOR_CAQI_3;
    case 3:
      return TEXT_COLOR_CAQI_4;
    case 4:
      return TEXT_COLOR_CAQI_5;
  }
};
