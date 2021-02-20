import React, { Component } from 'react';
import { Col, Row } from 'antd';
import styles from './index.module.less';

export default class Blog extends Component {

  render() {
    return (
      <div className={styles.content}>
        <Row gutter={24}>
          <Col xl={{ span: 8, push: 16 }} lg={24} md={24} sm={24} xs={24}>
            123
          </Col>
          <Col xl={{ span: 16, pull: 8 }} lg={24} md={24} sm={24} xs={24}>
            456
          </Col>
        </Row>
      </div>
    );
  }
}
