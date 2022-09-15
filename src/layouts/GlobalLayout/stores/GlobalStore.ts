import { action, computed, observable } from "mobx";
import { MenuTheme } from "antd";

export default class GlobalStore {
  @observable props: any;

  @observable isMenuCollapsed = true;

  @observable isMobile = false;

  @observable menuTheme: MenuTheme = "dark";

  @observable menuMode: any = "horizontal";

  @observable documentTitle = "断线的风筝";

  constructor(props) {
    this.setProps(props);
  }

  getFlatMenuKeys = (menus: Array<any>) => {
    let keys: Array<any> = [];
    menus.forEach((item) => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      }
      keys.push({ path: item.path, tree: item.tree });
    });
    return keys;
  };

  @computed
  get menuData() {
    const { menuData } = this.props;
    return [{ path: "/", name: "首页" }, ...menuData];
  }

  @computed
  get selectedMenuKeys() {
    // if (this.isConsole) return [];
    const selectedMenu = this.flatMenuKeys.find(
      (item) => item.path === this.pathname
    );
    return selectedMenu?.tree || [];
  }

  @computed
  get flatMenuKeys() {
    return this.getFlatMenuKeys(this.menuData);
  }

  @computed
  get pathname() {
    return this.props.pathname;
  }

  // @computed
  // get isConsole() {
  //   return this.props.pathname.startsWith("/console");
  // }

  @action
  setProps(props) {
    this.props = props;
  }

  @action
  setMenuCollapsed = (collapsed: boolean) => {
    if (this.isMobile) {
      this.isMenuCollapsed = collapsed;
    }
  };

  @action
  setMobile = (isMobile: boolean) => {
    if (isMobile !== this.isMobile) {
      this.isMobile = isMobile;
    }
  };

  @action
  setDocumentTitle = (documentTitle: string) => {
    this.documentTitle = documentTitle;
  };

  @action
  setMenuTheme = (theme: MenuTheme) => {
    this.menuTheme = theme;
  };
}
