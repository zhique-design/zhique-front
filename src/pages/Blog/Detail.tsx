import React, { Component, Dispatch } from "react";
import { RouteComponentProps } from "dva/router";
import { connect } from "dva";
import ArticleDetail from "@/components/ArticleDetail";
import { Card } from "antd";

interface ArticleDetailProps
  extends RouteComponentProps<{ articleId: string | undefined }> {
  dispatch: Dispatch<any>;
  articleDetail: any;
  loading?: boolean;
}

@connect(({ article, loading }) => ({
  articleDetail: article.articleDetail,
  loading: loading.effects["article/fetchArticleById"],
}))
export default class Detail extends Component<ArticleDetailProps> {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { articleId },
      },
    } = this.props;
    dispatch({
      type: "article/fetchArticleById",
      payload: articleId,
    });
  }

  componentDidUpdate(prevProps: Readonly<ArticleDetailProps>) {
    const {
      dispatch,
      match: {
        params: { articleId },
      },
    } = this.props;

    const {
      match: {
        params: { articleId: prevArticleId },
      },
    } = prevProps;

    if (articleId !== prevArticleId) {
      dispatch({
        type: "article/fetchArticleById",
        payload: articleId,
      });
    }
  }

  render() {
    const { articleDetail, loading } = this.props;
    return (
      <Card bordered={false} loading={loading}>
        <ArticleDetail articleDetail={articleDetail} />
      </Card>
    );
  }
}
