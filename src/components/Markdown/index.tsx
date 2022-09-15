import React from "react";
import ReactMarkdown, { ReactMarkdownPropsBase } from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import Image from "react-zmage";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface MarkdownProps extends ReactMarkdownPropsBase {
  readonly value?: string;
  className?: string;
}
const Markdown: React.FC<MarkdownProps> = ({ value, ...rest }) => (
  <ReactMarkdown
    plugins={[gfm]}
    renderers={{
      root: ({ children, className }) => (
        <article className={className}>{children}</article>
      ),
      code: ({ value: code = "", language = "" }) => (
        <SyntaxHighlighter
          language={language}
          style={docco}
          showLineNumbers
          wrapLines
        >
          {code}
        </SyntaxHighlighter>
      ),
      image: Image,
      heading: ({ level, children }) => (
        <span style={{ fontSize: 10 }}>
          {React.createElement(`h${level}`, {}, children)}
        </span>
      ),
    }}
    {...rest}
  >
    {value || ""}
  </ReactMarkdown>
);

Markdown.defaultProps = {
  className: "markdown-body",
};

export default Markdown;
