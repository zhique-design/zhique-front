import React from 'react';
import { BasicProps } from 'antd/lib/layout/layout';

import Icon from '@/components/Icon';
import police from '@/assets/images/police.png';

interface GlobalFooterProps extends BasicProps {

}

const GlobalFooter: React.FC<GlobalFooterProps> = () => (
  <footer>
    <span>
      Copyright
      &nbsp;
      <Icon type="copyright" />
      &nbsp;
      2018~
      {new Date().getFullYear()}
      &nbsp;
      <a href="https://www.xuzhao.xin"><strong>xuzhao</strong></a>
      &nbsp;
      All Rights Reserved.
    </span>
    <span>
      <a href={process.env.ICP_URL} target="_blank" rel="noopener noreferrer">{process.env.ICP_CODE}</a>
      <a
        style={{
          background: `url(${police}) no-repeat`,
          paddingLeft: '22px'
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={process.env.POLICE_ICP_URL}
      >
        {process.env.POLICE_ICP_CODE}
      </a>
    </span>
  </footer>
);

export default GlobalFooter;
