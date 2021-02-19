import React, { Component } from 'react';
import { Layout } from 'antd';
import TopNavHeader from '@/components/TopNavHeader';
import GlobalContext from '@/components/Context/GlobalContext';

const { Header } = Layout;

export default class HeaderView extends Component {

  static contextType = GlobalContext;

  render() {
    const { globalStore } = this.context;
    return (
      <Header>
        {!globalStore.isMobile ? (
          <TopNavHeader
            {...this.props}
          />
          ) : null}
      </Header>
    );
  }
}
