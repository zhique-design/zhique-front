import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'dva/router';

import GlobalContext from '../Context/GlobalContext';
import styles from './index.module.less';
import BaseMenu from '../SiderMenu/BaseMenu';

export default class TopNavHeader extends Component {

  static contextType = GlobalContext;

  render() {

    const { globalStore } = this.context;

    return (
      <div className={classNames(styles.head, globalStore.theme === 'light' ? styles.light : '')}>
        <div className={classNames(styles.main, styles.wide)}>
          <div className={styles.left}>
            <div className={styles.logo} key="logo" id="logo">
              <Link to="/">
                <h1>断线的风筝</h1>
              </Link>
            </div>
            <div style={{ maxWidth: 1200 }}>
              <BaseMenu {...this.props} style={{ border: 'none', height: 64 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
