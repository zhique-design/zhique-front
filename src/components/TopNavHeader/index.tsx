import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'dva/router';

import { observer } from 'mobx-react';
import GlobalContext from '../Context/GlobalContext';
import styles from './index.module.less';
import BaseMenu from '../SiderMenu/BaseMenu';
import RightContent from '../GlobalHeader/RightContent';

@observer
export default class TopNavHeader extends Component {

  static contextType = GlobalContext;

  render() {

    const { globalStore: { menuTheme } } = this.context;

    return (
      <div className={classNames(styles.head, menuTheme === 'light' ? styles.light : '')}>
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
          <RightContent theme={menuTheme} />
        </div>
      </div>
    );
  }
}
