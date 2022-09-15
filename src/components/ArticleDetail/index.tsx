import React from "react";
import { Breadcrumb, Tag } from "antd";
import moment from "moment";
import { Link } from "dva/router";
import "github-markdown-css/github-markdown.css";
import styles from "./index.module.less";
import Markdown from "../Markdown";

interface ArticleContentProps {
  articleDetail: any;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  articleDetail: {
    title,
    breadcrumb,
    body,
    publishTime,
    category,
    views,
    tags,
    prevArticle,
    nextArticle,
  },
}) => (
  <div className={styles.articleDetail}>
    <div className={styles.articleHeader}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        {breadcrumb?.map(({ name, url }) => (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{name}</Link>
          </Breadcrumb.Item>
        ))}
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.articleTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.articleMeta}>
        <div>
          发表时间:
          {moment(publishTime).format("YYYY-MM-DD HH:mm")}
        </div>
        <div>
          文章分类：
          <Link to={category?.url || "#"}>{category?.name}</Link>
        </div>
        <div>
          访问量：
          {views}
        </div>
      </div>
    </div>
    <Markdown value={body} />
    <div className={styles.articleFooter}>
      <div>
        文章标签：
        {tags?.map((tag) => (
          <Tag key={tag.id} color={tag.color}>
            {tag.name}
          </Tag>
        ))}
      </div>
      <div className={styles.articlePagination}>
        <div>
          {prevArticle && (
            <Link to={prevArticle.url}>
              上一篇：
              {prevArticle.title}
            </Link>
          )}
        </div>
        <div>
          {nextArticle && (
            <Link to={nextArticle.url}>
              下一篇：
              {nextArticle.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ArticleContent;
