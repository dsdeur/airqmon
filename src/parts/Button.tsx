import * as React from 'react';
import { Icon, PhotonIcon } from '.';

interface IButtonProps {
  active?: boolean;
  icon?: PhotonIcon;
  onClick: () => void;
}

const Button: React.SFC<IButtonProps> = ({ active = false, icon = null, ...props }) => {
  return (
    <button
      className={`btn btn-default ${active === true ? 'active' : ''}`}
      onClick={props.onClick}
    >
      {icon === null ? null : <Icon icon={icon} />}
      {props.children}
    </button>
  );
};

export default Button;
