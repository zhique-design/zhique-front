import React, { useEffect } from "react";
import { connect } from "dva";
import styles from "./index.module.less";

const Console: React.FC<any> = ({ children, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: "account/fetchCurrentUser",
    });
  }, [dispatch]);
  return <div className={styles.content}>{children}</div>;
};

export default connect()(Console);
