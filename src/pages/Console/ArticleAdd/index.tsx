import React, { PureComponent } from "react";
import { Card, Form, Input } from "antd";

import MarkdownEditor from "@/components/MarkdownEditor";

const FormItem = Form.Item;

const { TextArea } = Input;

export default class ArticleAdd extends PureComponent<any> {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    return (
      <Card bordered={false}>
        <Form>
          <FormItem {...formItemLayout} label="文章标题">
            <Input placeholder="请输入文章标题" />
          </FormItem>
          <FormItem {...formItemLayout} label="文章内容">
            <MarkdownEditor />
          </FormItem>
        </Form>
      </Card>
    );
  }
}
