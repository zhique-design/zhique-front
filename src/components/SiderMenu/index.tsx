import React from "react";
import { Drawer } from "antd";
import SiderMenu from "@/components/SiderMenu/SiderMenu";
import { observer, inject } from "mobx-react";
import GlobalStore from "@/layouts/GlobalLayout/stores/GlobalStore";

interface SiderMenuWrapperProps {
  globalStore?: GlobalStore;
}

const SiderMenuWrapper: React.FC<SiderMenuWrapperProps> = observer(
  ({ globalStore }) => {
    if (!globalStore) return null;
    const { isMenuCollapsed, setMenuCollapsed, isMobile } = globalStore;

    return isMobile ? (
      <Drawer
        visible={!isMenuCollapsed}
        placement="left"
        onClose={() => setMenuCollapsed(true)}
        style={{
          padding: 0,
          height: "100vh",
        }}
      >
        <SiderMenu collapsed={isMobile ? false : isMenuCollapsed} />
      </Drawer>
    ) : (
      <SiderMenu collapsed={isMenuCollapsed} />
    );
  }
);

export default inject(...["globalStore"])(SiderMenuWrapper);
