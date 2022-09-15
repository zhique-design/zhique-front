import React, { Component, ComponentProps } from "react";
import classNames from "classnames";
import { Link } from "dva/router";

import { inject, observer } from "mobx-react";
import GlobalStore from "@/layouts/GlobalLayout/stores/GlobalStore";
import styles from "./index.module.less";
import BaseMenu from "../SiderMenu/BaseMenu";
import RightContent from "../GlobalHeader/RightContent";

interface TopNavHeaderProps extends ComponentProps<any> {
  globalStore?: GlobalStore;
}

@inject(...["globalStore"])
@observer
export default class TopNavHeader extends Component<TopNavHeaderProps> {
  render() {
    const { globalStore } = this.props;
    if (!globalStore) return null;

    const { menuTheme } = globalStore;

    return (
      <div
        className={classNames(
          styles.head,
          menuTheme === "light" ? styles.light : ""
        )}
      >
        <div className={classNames(styles.main, styles.wide)}>
          <div className={styles.left}>
            <div className={styles.logo} key="logo" id="logo">
              <Link to="/">
                <h1>断线的风筝</h1>
              </Link>
            </div>
            <div className={styles.menu}>
              <BaseMenu
                {...this.props}
                style={{ border: "none", height: 64 }}
              />
            </div>
          </div>
          <RightContent theme={menuTheme} />
        </div>
      </div>
    );
  }
}
