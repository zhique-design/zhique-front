import React, { useContext, useState } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import { SiderProps } from 'antd/lib/layout/Sider';
import { Link } from 'dva/router';
import GlobalContext from '../Context/GlobalContext';
import BaseMenu from './BaseMenu';

import styles from './index.module.less';

const { Sider } = Layout;

const SiderMenu: React.FC<SiderProps> = props => {

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
      breakpoint="lg"
      width={256}
      className={classNames(styles.sider, menuTheme === 'light' ? styles.light : '')}
      {...props}
    >
      <div className={styles.logo}>
        <Link to="/">
          <h1>断线的风筝</h1>
        </Link>
      </div>
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


export default observer(SiderMenu);
