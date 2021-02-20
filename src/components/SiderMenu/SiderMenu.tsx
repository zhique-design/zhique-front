import React, { useContext, useState } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';
import GlobalContext from '../Context/GlobalContext';
import BaseMenu from './BaseMenu';

import styles from './index.module.less';

const { Sider } = Layout;

const SiderMenu: React.FC = () => {

  const {
    globalStore: {
      isMenuCollapsed,
      menuData,
      menuTheme
    }
  } = useContext(GlobalContext);

  const [openKeys, setOpenKeys] = useState<Array<any>>([]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={isMenuCollapsed}
      breakpoint="lg"
      width={256}
      className={classNames(styles.sider, menuTheme === 'light' ? styles.light : '')}
    >
      <BaseMenu
        key="Menu"
        mode="inline"
        style={{ padding: '16px 0', width: '100%' }}
        onOpenChange={data => {
          // 判断是否有多个菜单展开
         const flag = data.filter(openKey => menuData.some(item => item.path === openKey))?.length > 1;
          setOpenKeys(flag ? [data.pop()] : [...data]);
        }}
        openKeys={isMenuCollapsed ? [] : openKeys}
      />
    </Sider>
  );
};


export default SiderMenu;
