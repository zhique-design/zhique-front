import React, { useContext } from 'react';
import { Drawer } from 'antd';
import SiderMenu from '@/components/SiderMenu/SiderMenu';
import { observer } from 'mobx-react';
import GlobalContext from '../Context/GlobalContext';

const SiderMenuWrapper: React.FC = () => {

  const {
    globalStore: {
      isMenuCollapsed,
      setMenuCollapsed
    }
  } = useContext(GlobalContext);

  return (
    <Drawer
      visible={!isMenuCollapsed}
      placement="left"
      onClose={() => setMenuCollapsed(true)}
      style={{
        padding: 0,
        height: '100vh',
      }}
    >
      <SiderMenu />
    </Drawer>
  );
};

export default observer(SiderMenuWrapper);
