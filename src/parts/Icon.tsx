import * as React from 'react';
import { IStyleAwareProps } from '../styled-components';

enum PhotonIcon {
  alert = 'alert',
  block = 'block',
  cancel = 'cancel',
  cog = 'cog',
  direction = 'direction',
  lock = 'lock',
  arrows_ccw = 'arrows-ccw',
}

interface IIconProps extends IStyleAwareProps {
  icon: PhotonIcon;
}

const Icon: React.SFC<IIconProps> = (props) => {
  return <span className={`icon icon-${props.icon} ${props.className}`} />;
};

export { PhotonIcon, Icon };
export default Icon;
