import React, { Component } from 'react';
import GlobalContext from '@/components/Context/GlobalContext';
import Debounce from 'lodash-decorators/debounce';
import classNames from 'classnames';
import { Link } from 'dva/router';
import { observer } from 'mobx-react';
import styles from './index.module.less';
import Icon from '../Icon';

@observer
export default class GlobalHeader extends Component {

  static contextType = GlobalContext;

  componentWillUnmount() {
    // @ts-ignore
    this.triggerResizeEvent.cancel();
  }

  @Debounce(600)
  // eslint-disable-next-line class-methods-use-this
  triggerResizeEvent() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  toggle = () => {
    const { globalStore: { isMenuCollapsed, setMenuCollapsed } } = this.context;
    setMenuCollapsed(!isMenuCollapsed);
    this.triggerResizeEvent();
  };

  render() {
    const { globalStore: { isMenuCollapsed, isMobile } } = this.context;
    return (
      <div className={classNames(styles.header)}>
        {isMobile && (
          <Link to="/" className={styles.logo} key="logo">
            <h1>断线的风筝</h1>
          </Link>
        )}
        <Icon type={isMenuCollapsed ? 'indent' : 'outdent'} className={styles.trigger} onClick={this.toggle}  />
      </div>
    );
  }
}
