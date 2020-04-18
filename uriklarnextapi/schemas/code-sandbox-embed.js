// youtube.js
import React from "react";

const Preview = ({ value }) => {
  const { embedCode } = value;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: embedCode,
      }}
    ></div>
  );
};

export default {
  name: "codesandbox",
  type: "object",
  title: "Codesandbox Embed",
  fields: [
    {
      name: "embedCode",
      type: "text",
      title: "Codesandbox embed code",
    },
  ],
  preview: {
    select: {
      embedCode: "embedCode",
    },
    component: Preview,
  },
};
