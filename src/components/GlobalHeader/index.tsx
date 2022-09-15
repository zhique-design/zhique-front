import React, { Component } from "react";
import Debounce from "lodash-decorators/debounce";
import classNames from "classnames";
import { Link } from "dva/router";
import { inject, observer } from "mobx-react";
import GlobalStore from "@/layouts/GlobalLayout/stores/GlobalStore";
import styles from "./index.module.less";
import Icon from "../Icon";

interface GlobalHeaderProps {
  globalStore?: GlobalStore;
}

@inject(...["globalStore"])
@observer
export default class GlobalHeader extends Component<GlobalHeaderProps> {
  componentWillUnmount() {
    // @ts-ignore
    this.triggerResizeEvent.cancel();
  }

  @Debounce(600)
  // eslint-disable-next-line class-methods-use-this
  triggerResizeEvent() {
    const event = document.createEvent("HTMLEvents");
    event.initEvent("resize", true, false);
    window.dispatchEvent(event);
  }

  toggle = () => {
    const { globalStore } = this.props;
    if (globalStore) {
      const { isMenuCollapsed, setMenuCollapsed } = globalStore;
      setMenuCollapsed(!isMenuCollapsed);
      this.triggerResizeEvent();
    }
  };

  render() {
    const { globalStore } = this.props;
    if (!globalStore) return null;
    const { isMenuCollapsed, isMobile } = globalStore;
    return (
      <div className={classNames(styles.header)}>
        {isMobile && (
          <Link to="/" className={styles.logo} key="logo">
            <h1>断线的风筝</h1>
          </Link>
        )}
        <Icon
          type={isMenuCollapsed ? "indent" : "outdent"}
          className={styles.trigger}
          onClick={this.toggle}
        />
      </div>
    );
  }
}
