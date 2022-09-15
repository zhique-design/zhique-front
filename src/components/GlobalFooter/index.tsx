import React from "react";
import { BasicProps } from "antd/lib/layout/layout";

import Icon from "@/components/Icon";

type GlobalFooterProps = BasicProps;

const GlobalFooter: React.FC<GlobalFooterProps> = () => (
  <footer>
    <span>
      Copyright &nbsp;
      <Icon type="copyright" />
      &nbsp; 2018~
      {new Date().getFullYear()}
      &nbsp;
      <a href="https://www.xuzhao.xin">
        <strong>xuzhao</strong>
      </a>
      &nbsp; All Rights Reserved.
    </span>
  </footer>
);

export default GlobalFooter;
