import { Effect } from "dva";
import { Reducer } from "redux";
import { getResponseList } from "@/utils/request";
import {
  queryArticleList,
  queryHotArticleList,
  queryRecommendArticleList,
  queryArticleById,
  submitArticle,
} from "@/services/blog/article";

interface ArticleModelState {
  articleList: {
    list: Array<any>;
    count: number;
  };
  hotArticleList: Array<any>;
  recommendArticleList: Array<any>;
  articleDetail: any;
}

interface ArticleModelType {
  namespace: "article";
  state: ArticleModelState;
  effects: {
    fetchArticleList: Effect;
    fetchArticleById: Effect;
    fetchHotArticleList: Effect;
    fetchRecommendArticleList: Effect;
    submitArticle: Effect;
  };
  reducers: {
    saveArticleList: Reducer<ArticleModelState>;
    saveHotArticleList: Reducer<ArticleModelState>;
    saveRecommendArticleList: Reducer<ArticleModelState>;
    saveArticleDetail: Reducer<ArticleModelState>;
  };
}

const BlogModal: ArticleModelType = {
  namespace: "article",
  state: {
    articleList: { list: [], count: 0 },
    hotArticleList: [],
    recommendArticleList: [],
    articleDetail: {},
  },
  effects: {
    *fetchArticleList({ payload, callback }, { call, put }) {
      const response = yield call(queryArticleList, payload);
      yield put({
        type: "saveArticleList",
        payload: {
          list: getResponseList(response),
          count: response.count,
        },
      });
      if (callback) callback();
    },
    *fetchArticleById({ payload, callback }, { call, put }) {
      const response = yield call(queryArticleById, payload);
      yield put({
        type: "saveArticleDetail",
        payload: response,
      });
      if (callback) callback(response);
    },
    *fetchHotArticleList({ payload, callback }, { call, put }) {
      const response = yield call(queryHotArticleList, payload);
      yield put({
        type: "saveHotArticleList",
        payload: getResponseList(response),
      });
      if (callback) callback();
    },
    *fetchRecommendArticleList({ payload, callback }, { call, put }) {
      const response = yield call(queryRecommendArticleList, payload);
      yield put({
        type: "saveRecommendArticleList",
        payload: getResponseList(response),
      });
      if (callback) callback();
    },
    *submitArticle({ payload, callback }, { call }) {
      const response = yield call(submitArticle, payload);
      if (callback) callback(response);
    },
  },
  reducers: {
    saveArticleList(state, action) {
      return {
        ...state,
        articleList: action.payload,
      };
    },
    saveArticleDetail(state, action) {
      return {
        ...state,
        articleDetail: action.payload,
      };
    },
    saveHotArticleList(state, action) {
      return {
        ...state,
        hotArticleList: action.payload,
      };
    },
    saveRecommendArticleList(state, action) {
      return {
        ...state,
        recommendArticleList: action.payload,
      };
    },
  },
};

export default BlogModal;
