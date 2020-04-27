import Highlight from "react-highlight.js";
import CodeIcon from "../../svgs/code.svg";

function Block({ node, children }) {
  if (node.style === "blockquote") {
    return (
      <blockquote className="relative p-4 mb-4 text-xl italic border-l-4 quote">
        {/* <div aria-hidden="true">&ldquo;</div> */}
        {children}
      </blockquote>
    );
  }

  if (node.style === "h2") {
    return (
      <h3 className="text-3xl text-brand2 font-bold mt-12 mb-4">{children}</h3>
    );
  }

  if (node.style === "h3") {
    return (
      <h3 className="text-2xl text-sea font-bold mt-4 mb-4">{children}</h3>
    );
  }

  if (node.style === "separator") {
    return (
      <div
        className="my-8 w-full bg-brand-200 relative flex justify-center"
        style={{ height: "2px" }}
      >
        <div
          className="absolute bg-background px-4 separator-icon-container"
          style={{ top: "-16px" }}
        >
          <CodeIcon height="32px" width="32px" />
        </div>
      </div>
    );
  }

  return <p className="mb-4 leading-relaxed">{children}</p>;
}

function Code({ node }) {
  return (
    <div className="mb-4" style={{ maxWidth: "90vw" }}>
      <Highlight language={node.language}>{node.code}</Highlight>
    </div>
  );
}

function Codesandbox({ node }) {
  const { embedCode } = node;

  return (
    <div
      className="mb-4"
      dangerouslySetInnerHTML={{
        __html: embedCode,
      }}
    ></div>
  );
}

export default {
  types: {
    block: Block,
    code: Code,
    codesandbox: Codesandbox,
  },
  list: (props) => {
    return <ol className="list-inside list-decimal">{props.children}</ol>;
  },
  listItem: (props) => {
    return <li className="mb-2">{props.children}</li>;
  },
  marks: {
    code: (props) => <code>{props.children}</code>,
  },
};
