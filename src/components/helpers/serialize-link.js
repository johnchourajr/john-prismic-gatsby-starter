import React from "react";
import { linkResolver } from "../../functions/linkResolver";
import Link from "./link";

export const SerializeLink = (type, element, content, children, index) => {
  if (element.data.link_type === "Document") {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    );
  } else if (element.data.link_type === "Web") {
    return (
      <a id={element.data.id} href={element.data.url}>
        {content}
      </a>
    );
  } else return null;
};
