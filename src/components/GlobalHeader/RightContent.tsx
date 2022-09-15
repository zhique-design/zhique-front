import React from "react";
import classNames from "classnames";

import { MenuTheme } from "antd";

import styles from "./index.module.less";

type RightContentProps = {
  theme?: MenuTheme;
};

const RightContent: React.FC<RightContentProps> = ({ theme }) => {
  const className = classNames(styles.right, {
    [styles.dark]: theme === "dark",
  });
  return <div className={className}>搜索框</div>;
};

export default RightContent;
