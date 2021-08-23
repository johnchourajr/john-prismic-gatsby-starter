import React from "react";
import { RichText } from "prismic-reactjs";
import { SerializeLink } from "./serialize-link";

function RichTextHelper({ render }) {
  return <RichText render={render} serializeHyperlink={SerializeLink} />;
}

export default RichTextHelper;
