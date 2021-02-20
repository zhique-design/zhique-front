import React, { PureComponent, Dispatch } from 'react';
import { RouteComponentProps } from 'dva/router';
import { connect } from 'dva';
import ArticleContent from '@/components/ArticleContent';

interface ArticleDetailProps extends RouteComponentProps<{ articleId: string | undefined}> {
  dispatch: Dispatch<any>;
  articleDetail: any;
  loading?: boolean;
}

@connect(({ article, loading }) => ({
  articleDetail: article.articleDetail,
  loading: loading.effects['article/fetchArticleById'],
}))
export default class ArticleDetail extends PureComponent<ArticleDetailProps> {

  componentDidMount() {
    const {
      dispatch,
      match: { params: { articleId } }
    } = this.props;
    dispatch({
      type: 'article/fetchArticleById',
      payload: articleId,
    });
  }

  componentDidUpdate(prevProps: Readonly<ArticleDetailProps>) {
    const {
      dispatch,
      match: { params: { articleId } }
    } = this.props;

    const {
      match: { params: { articleId: prevArticleId } }
    } = prevProps;

    if (articleId !== prevArticleId) {
      dispatch({
        type: 'article/fetchArticleById',
        payload: articleId,
      });
    }
  }

  render() {
    const { articleDetail, loading } = this.props;
    return (
      <ArticleContent articleDetail={articleDetail} loading={loading} />
    );
  }

}
