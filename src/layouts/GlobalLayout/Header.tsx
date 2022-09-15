import React, { Component, ComponentProps } from "react";
import { Layout } from "antd";
import { observer, inject } from "mobx-react";

import TopNavHeader from "@/components/TopNavHeader";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalStore from "./stores/GlobalStore";

const { Header } = Layout;

interface HeaderViewProps extends ComponentProps<any> {
  globalStore?: GlobalStore;
}

@inject(...["globalStore"])
@observer
export default class HeaderView extends Component<HeaderViewProps> {
  render() {
    const { globalStore } = this.props;
    if (!globalStore) return null;
    const { isMobile } = globalStore;
    return (
      <Header style={{ padding: 0 }}>
        {!isMobile ? <TopNavHeader {...this.props} /> : <GlobalHeader />}
      </Header>
    );
  }
}
