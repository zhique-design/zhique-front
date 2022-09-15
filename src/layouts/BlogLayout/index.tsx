import React, { PureComponent } from "react";
import { Col, Row } from "antd";
import styles from "./index.module.less";
import Sider from "./Sider";

export default class BlogLayout extends PureComponent<any> {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.content}>
        <Row gutter={[24, 24]}>
          <Col xl={{ span: 8, push: 16 }} lg={24} md={24} sm={24} xs={24}>
            <Sider />
          </Col>
          <Col xl={{ span: 16, pull: 8 }} lg={24} md={24} sm={24} xs={24}>
            {children}
          </Col>
        </Row>
      </div>
    );
  }
}
