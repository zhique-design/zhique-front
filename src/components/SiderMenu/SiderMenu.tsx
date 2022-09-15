import React, { useState } from "react";
import { Layout } from "antd";
import classNames from "classnames";
import { observer, inject } from "mobx-react";
import { SiderProps } from "antd/lib/layout/Sider";
import { Link } from "dva/router";
import GlobalStore from "@/layouts/GlobalLayout/stores/GlobalStore";
import BaseMenu from "./BaseMenu";

import styles from "./index.module.less";

const { Sider } = Layout;

interface SiderMenuProps extends SiderProps {
  globalStore?: GlobalStore;
}

const SiderMenu: React.FC<SiderMenuProps> = observer(
  ({ globalStore, ...rest }) => {
    if (!globalStore) return null;
    const { isMenuCollapsed, menuData, menuTheme } = globalStore;

    const [openKeys, setOpenKeys] = useState<Array<any>>([]);

    return (
      <Sider
        trigger={null}
        collapsible
        breakpoint="lg"
        width={256}
        className={classNames(
          styles.sider,
          menuTheme === "light" ? styles.light : ""
        )}
        {...rest}
      >
        <div className={styles.logo}>
          <Link to="/">
            <h1>断线的风筝</h1>
          </Link>
        </div>
        <BaseMenu
          key="Menu"
          mode="inline"
          style={{ padding: "16px 0", width: "100%" }}
          onOpenChange={(data) => {
            // 判断是否有多个菜单展开
            const flag =
              data.filter((openKey) =>
                menuData.some((item) => item.path === openKey)
              )?.length > 1;
            setOpenKeys(flag ? [data.pop()] : [...data]);
          }}
          openKeys={isMenuCollapsed ? [] : openKeys}
        />
      </Sider>
    );
  }
);

export default inject(...["globalStore"])(SiderMenu);
