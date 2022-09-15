import React from "react";
import { Col, Row, Spin, Tag } from "antd";
import { Link } from "dva/router";
import classNames from "classnames";
import moment from "moment";
import Icon from "@/components/Icon";
import styles from "./index.module.less";

interface ArticleListProps {
  className?: string;
  articleList?: Array<any>;
  loading?: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({
  className,
  articleList,
  loading,
}) => (
  <Spin spinning={loading}>
    <Row className={classNames(className, styles.articleList)}>
      {articleList?.map(
        ({ url, title, category, body, id, publishTime, views, tags }) => (
          <Col key={id} className={styles.articleItem} span={24}>
            <section>
              <div>
                <Link to={url} className={styles.articleTitle}>
                  {title}
                </Link>
              </div>
              <div className={styles.articleTag}>
                {tags.map(({ id: tagId, name, color }) => (
                  <Tag key={tagId} color={color}>
                    <a>{name}</a>
                  </Tag>
                ))}
              </div>
              <article
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: body }}
              />
              <div className={styles.extra}>
                <em>
                  <Icon type="eye" />
                  <span>{views}</span>
                  <Icon type="calendar" />
                  <span>{moment(publishTime).format("YYYY-MM-DD HH:mm")}</span>
                  <Icon type="appstore" />
                  <span>
                    <Link to={category.url}>{category.name}</Link>
                  </span>
                </em>
              </div>
            </section>
          </Col>
        )
      )}
    </Row>
  </Spin>
);

export default ArticleList;
