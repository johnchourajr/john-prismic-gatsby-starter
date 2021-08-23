const React = require("react");
const { Elements } = require("prismic-reactjs");
const { linkResolver } = require("../functions/linkResolver");

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function (type, element, content, children, key) {
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      return (
        <p key={key} className="paragraph-class">
          {children}
        </p>
      );

    // Don't wrap images in a <p> tag
    case Elements.image:
      return <img key={key} src={element.url} alt={element.alt || ""} />;

    // Add a class to hyperlinks
    case Elements.hyperlink:
      return (
        <a
          key={key}
          href={element.data.url || linkResolver(element.data)}
          target={element.data.target}
          rel={element.data.target ? "noopener" : undefined}
          className="link-class"
        >
          {children}
        </a>
      );

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

module.exports = htmlSerializer;
