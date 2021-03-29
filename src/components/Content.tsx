import React from "react";

export const HTMLContent = ({
  content,
  className,
}: {
  content: string;
  className: string;
}) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
    style={{ whiteSpace: "pre-wrap" }}
  />
);

const Content = ({
  content,
  className,
}: {
  content: React.ReactNode;
  className: string;
}) => (
  <div className={className} style={{ whiteSpace: "pre-wrap" }}>
    {content}
  </div>
);

export default Content;
