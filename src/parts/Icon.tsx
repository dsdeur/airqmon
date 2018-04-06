import * as React from 'react';
import styled, { IStyleAwareProps } from '../styled-components';

enum PhotonIcon {
  alert = 'alert',
  block = 'block',
  direction = 'direction',
  lock = 'lock',
}

interface IIconProps extends IStyleAwareProps {
  icon: PhotonIcon;
}

const Icon: React.SFC<IIconProps> = (props) => {
  return <span className={`icon icon-${props.icon} ${props.className}`} />;
};

const StyledIcon = styled(Icon)`
  margin-right: 4px;
`;

export { PhotonIcon, StyledIcon as Icon };
export default StyledIcon;
