import React from "react";
import { BackTop, Layout } from "antd";
import GlobalFooter from "@/components/GlobalFooter";
import styles from "./index.module.less";

const { Footer } = Layout;

const FooterView: React.FC = () => (
  <Footer className={styles.footer}>
    <GlobalFooter />
    <BackTop />
  </Footer>
);

export default FooterView;
