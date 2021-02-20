import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import '@/assets/icon/iconfont.css';

interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  type: string;
}

const Icon: React.FC<IconProps> = ({ type, className, ...rest }) => (
  <i className={classNames('zhique-icon', `zhique-icon-${type}`, className)} {...rest} />
);

export default Icon;
