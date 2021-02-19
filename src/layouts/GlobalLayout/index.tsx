import React, { Component, Dispatch } from 'react';
import { Layout } from 'antd';
import { ContainerQuery } from 'react-container-query';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { connect } from 'dva';
import GlobalContext from '@/components/Context/GlobalContext';
import GlobalStore from '@/components/Store/GlobalStore';
import Header from '@/layouts/GlobalLayout/Header';

const { Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

interface GlobalLayoutProps {
  dispatch: Dispatch<any>;
  menuData: Array<any>;
}

@connect(({ global }) => ({
  menuData: global.menuData,
}))
export default class GlobalLayout extends Component<GlobalLayoutProps> {

  globalStore: GlobalStore;

  constructor(props) {
    super(props);
    this.globalStore = new GlobalStore({
      menuData: props.menuData,
      pathname: props.location.pathname
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/initBlog',
    });
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    this.globalStore.setProps({
      menuData: nextProps.menuData,
      pathname: nextProps.location.pathname
    });
  }

  render() {

    const { children } = this.props;
    const { documentTitle } = this.globalStore;
    return (
      <DocumentTitle title={documentTitle}>
        <ContainerQuery query={query}>
          {params => (
            <GlobalContext.Provider value={{ globalStore: this.globalStore }}>
              <Layout>
                <Layout style={{ minHeight: '100vh' }} className={classNames(params)}>
                  <Header />
                  <Content style={{ margin: 24 }}>{children}</Content>
                </Layout>
              </Layout>
            </GlobalContext.Provider>
          )}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}
