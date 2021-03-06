import React, { Component } from 'react';
import { Layout } from 'antd';
import TopNavHeader from '@/components/TopNavHeader';
import GlobalContext from '@/components/Context/GlobalContext';
import GlobalHeader from '@/components/GlobalHeader';
import { observer } from 'mobx-react';

const { Header } = Layout;

@observer
export default class HeaderView extends Component {

  static contextType = GlobalContext;

  render() {
    const { globalStore: { isMobile } } = this.context;

    return (
      <Header style={{ padding: 0 }}>
        {!isMobile ? <TopNavHeader {...this.props} /> : <GlobalHeader />}
      </Header>
    );
  }
}
