import { useState } from "react";

interface ExpandableTextProp {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ maxChars = 100, children }: ExpandableTextProp) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}
      {!expanded && "... "}{" "}
      <button onClick={toggle}>{expanded ? "Less" : "More"}</button>
    </p>
  );
};

export default ExpandableText;
