import { action, computed, observable } from 'mobx';
import { MenuTheme } from 'antd';
import { MenuMode } from 'antd/lib/menu';

export default class GlobalStore {

  @observable props: any;

  @observable isMenuCollapsed: boolean = false;

  @observable isMobile: boolean = false;

  @observable menuTheme: MenuTheme = 'dark';

  @observable menuMode: MenuMode = 'horizontal';

  @observable documentTitle: string = '断线的风筝';

  constructor(props) {
    this.setProps(props);
  }

  @computed
  get menuData() {
    const { menuData } = this.props;
    return [{ path: '/', name: '首页' }, ...menuData];
  }

  @computed
  get pathname() {
    return this.props.pathname;
  }

  @computed
  get isConsole() {
    return this.props.pathname.startsWith('/console');
  }

  @action
  setProps(props) {
    this.props = props;
  }

  @action
  setMenuCollapsed = (collapsed: boolean) => {
    if (this.isMobile) {
      this.isMenuCollapsed = collapsed;
    }
  }

  @action
  setMobile = (isMobile: boolean) => {
    this.isMobile = isMobile;
  }

  @action
  setDocumentTitle = (documentTitle: string) => {
    this.documentTitle = documentTitle;
  }

  @action
  setMenuTheme = (theme: MenuTheme) => {
    this.menuTheme = theme;
  }

}
