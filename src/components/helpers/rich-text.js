import React from "react";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../../gatsby/html-serializer";

function RichTextHelper({ render }) {
  return <RichText render={render} htmlSerializer={htmlSerializer} />;
}

export default RichTextHelper;
