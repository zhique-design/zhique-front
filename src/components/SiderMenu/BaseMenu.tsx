import React, { Component } from 'react';
import { Menu, MenuProps } from 'antd';
import { Link } from 'dva/router';
import GlobalContext from '../Context/GlobalContext';

export default class BaseMenu extends Component<MenuProps> {

  static contextType = GlobalContext;

  /**
   * 获得菜单的子节点
   * @param menusData 菜单数据
   */
  getNavMenuItems = (menusData?: Array<any>) => {
    if (!menusData) return [];
    return menusData.filter(item => item.name)
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => item);
  };

  /**
   * 渲染子菜单或者菜单
   * @param item
   */
  getSubMenuOrItem = (item: any) => {
    if (item.children && item.children.some(child => child.name)) {
      return (
        <Menu.SubMenu key={item.path} title={item.name}>
          {this.getNavMenuItems(item.children)}
        </Menu.SubMenu>
      );
    }
    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
  };

  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return `/${path || ''}`.replace(/\/+/g, '/');
  };


  getMenuItemPath = item => {
    const itemPath = this.conversionPath(item.path);
    const { target } = item;
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          <span>{item.name}</span>
        </a>
      );
    }
    const { globalStore } = this.context;
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === globalStore.pathname}
        onClick={() => globalStore.setMenuCollapsed(true)}
      >
        <span>{item.name}</span>
      </Link>
    );
  };

  render() {
    const { openKeys, ...rest } = this.props;
    const {
      globalStore: {
        menuData,
        menuTheme,
        menuMode,
        selectedMenuKeys
      }
    } = this.context;
    // let selectedKeys: Array<any> = this.getSelectedMenuKeys();
    // if (!selectedKeys.length && openKeys) {
    //   selectedKeys = [openKeys[openKeys.length - 1]];
    // }
    let props = {};
    if (openKeys) {
      props= { openKeys };
    }
    return (
      <Menu
        key="Menu"
        selectedKeys={selectedMenuKeys}
        theme={menuTheme}
        mode={menuMode}
        {...props}
        {...rest}
      >
        {this.getNavMenuItems(menuData)}
      </Menu>
    );
  }
}
