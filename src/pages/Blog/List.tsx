import React, { Dispatch, useEffect, useState } from "react";
import { connect } from "dva";
import ArticleList from "@/components/ArticleList";
import { Pagination } from "antd";
import { RouteComponentProps } from "dva/router";

interface ListProps
  extends RouteComponentProps<{ categoryId: string | undefined }> {
  dispatch: Dispatch<any>;
  articleList: { list: Array<any>; count: number };
  loading?: boolean;
}

const List: React.FC<ListProps> = ({
  dispatch,
  articleList,
  loading,
  match: {
    params: { categoryId },
  },
}) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number | undefined>(5);
  useEffect(() => {
    dispatch({
      type: "article/fetchArticleList",
      payload: {
        page,
        pageSize,
        category: categoryId,
      },
    });
  }, [page, pageSize, categoryId, dispatch]);
  useEffect(() => {
    dispatch({
      type: "article/fetchHotArticleList",
    });
  }, [dispatch]);
  return (
    <>
      <ArticleList loading={loading} articleList={articleList.list} />
      <Pagination
        style={{ marginTop: 15, textAlign: "right" }}
        current={page}
        pageSize={pageSize}
        pageSizeOptions={["5", "10", "20", "50", "100"]}
        disabled={loading}
        showQuickJumper
        showSizeChanger
        locale={{
          items_per_page: "条/页",
        }}
        showTotal={(total) => `共 ${total} 页`}
        total={articleList.count}
        onChange={(current, size) => {
          setPage(current);
          setPageSize(size);
        }}
        onShowSizeChange={(current, size) => {
          setPage(current);
          setPageSize(size);
        }}
      />
    </>
  );
};

export default connect(({ article, loading }) => ({
  articleList: article.articleList,
  loading: loading.effects["article/fetchArticleList"],
}))(List);
