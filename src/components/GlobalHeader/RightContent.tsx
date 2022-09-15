import React from "react";
import classNames from "classnames";

import { MenuTheme } from "antd";

import HeaderSearch from "../HeaderSearch";

import styles from "./index.module.less";

type RightContentProps = {
  theme?: MenuTheme;
};

const RightContent: React.FC<RightContentProps> = ({ theme }) => {
  const className = classNames(styles.right, {
    [styles.dark]: theme === "dark",
  });
  return (
    <div className={className}>
      <HeaderSearch
        className={classNames(styles.action, styles.search)}
        options={[
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>,
            value: "umi ui",
          },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: "Ant Design",
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: "Pro Table",
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: "Pro Layout",
          },
        ]}
      />
    </div>
  );
};

export default RightContent;
