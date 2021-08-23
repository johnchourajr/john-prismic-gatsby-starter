import React from "react";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../../gatsby/html-serializer";
import { SerializeLink } from "./serialize-link";

function RichTextHelper({ render }) {
  return (
    <RichText
      render={render}
      htmlSerializer={htmlSerializer}
      serializeHyperlink={SerializeLink}
    />
  );
}

export default RichTextHelper;
