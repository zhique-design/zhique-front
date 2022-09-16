import React, { PureComponent } from "react";
import Editor from "wrap-md-editor";

export default class MarkdownEditor extends PureComponent<any> {
  render() {
    return (
      <Editor
        config={{
          markdown: `# test`,
        }}
      />
    );
  }
}
