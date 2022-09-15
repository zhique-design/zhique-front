import React, { Dispatch, useEffect } from "react";
import { connect } from "dva";

import { Card, Tooltip } from "antd";
import { Link } from "dva/router";

import Icon from "@/components/Icon";
import styles from "./index.module.less";

interface SiderViewProps {
  dispatch: Dispatch<any>;
  hotArticleList: Array<any>;
  recommendArticleList: Array<any>;
}

const SiderView: React.FC<SiderViewProps> = ({
  hotArticleList,
  recommendArticleList,
  dispatch,
}) => {
  useEffect(() => {
    dispatch({
      type: "article/fetchHotArticleList",
    });
    dispatch({
      type: "article/fetchRecommendArticleList",
    });
  }, [dispatch]);
  return (
    <>
      {hotArticleList?.length > 0 && (
        <Card
          title={<strong>热门文章</strong>}
          className={styles.siderCard}
          bordered={false}
        >
          <ul className={styles.articleList}>
            {hotArticleList?.map(({ url, id, views, title }, index) => (
              <li key={id}>
                <Link className={styles[`top${index + 1}`]} to={url}>
                  <div>
                    <Tooltip title={title}>
                      <div className={styles.articleTitle}>{title}</div>
                    </Tooltip>
                    <div className={styles.views}>
                      <Icon type="eye" />
                      <span>{views}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      )}
      {recommendArticleList?.length > 0 && (
        <Card
          title={<strong>推荐文章</strong>}
          className={styles.siderCard}
          bordered={false}
        >
          <ul className={styles.articleList}>
            {recommendArticleList?.map(({ url, id, views, title }, index) => (
              <li key={id}>
                <Link className={styles[`top${index + 1}`]} to={url}>
                  <div>
                    <Tooltip title={title}>
                      <div className={styles.articleTitle}>{title}</div>
                    </Tooltip>
                    <div className={styles.views}>
                      <Icon type="eye" />
                      <span>{views}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default connect(({ article }) => ({
  hotArticleList: article.hotArticleList,
  recommendArticleList: article.recommendArticleList,
}))(SiderView);
