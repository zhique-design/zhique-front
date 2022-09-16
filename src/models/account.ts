import { Effect } from "dva";
import { Reducer } from "redux";
import { queryCurrentUser } from "@/services/account";

interface AccountModelState {
  currentUser: any;
}

interface AccountModelType {
  namespace: "account";
  state: AccountModelState;
  effects: {
    fetchCurrentUser: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<AccountModelState>;
  };
}

const BlogModal: AccountModelType = {
  namespace: "account",
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrentUser(_, { call, put }) {
      const response = yield call(queryCurrentUser);
      yield put({
        type: "saveCurrentUser",
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
};

export default BlogModal;
