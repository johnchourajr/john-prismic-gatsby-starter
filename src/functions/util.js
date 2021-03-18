/**
 * clampBuilder function
 *
 * @param {Number} minFontSize
 * @param {Number} maxFontSize
 */
export function clampBuilder(minFontSize, maxFontSize) {
  const pixelsPerRem = 16;
  const minWidth = 375 / pixelsPerRem;
  const maxWidth = 2630 / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem )`;
}

/**
 * changeTheme function
 *
 * @param {String} foreground
 * @param {String} background
 * @todo need to remove slug
 */
export function changeTheme(foreground, background) {
  if (typeof document !== `undefined`) {
    if (foreground === null && background === null) {
      document.body.classList.remove(`theme`);
      document.body.setAttribute('style', '');
    } else {
      document.body.classList.add(`theme`);
      document.body.setAttribute(
        'style',
        `--theme-background: ${background}; --theme-foreground: ${foreground};`
      );
    }
  }
}

/**
 * changeTheme function
 *
 * @param {String} data
 * @todo need to remove slug
 */
export function hoverChange(data) {
  if (typeof document !== `undefined`) {
    if (data === null) {
      document.body.setAttribute('data-hover', '');
    } else {
      document.body.setAttribute('data-hover', `${data}`);
    }
  }
}

/**
 * stringToSlug function
 *
 * Takes strings and outputs slugs,
 * eg. "This String" into "this-string"
 *
 * @param {String} str
 */
export function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

/**
 * repeatTitle function
 *
 * @param {String} text
 */
export function repeatTitle(text) {
  const str = `${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} `;
  return str;
}

/**
 *
 * @param {Number} i
 * @param {Object} total
 */
export function commaSeparate(i, total) {
  if (i === total.length) {
    return '.';
  } else {
    return ', ';
  }
}

/**
 *
 * @param {String} str
 */
export function parseHtmlEnteties(str) {
  return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}

/**
 *
 * @param {String} str
 */
export function wrapHeadlineInArray(str) {
  const cleanUpHtml = parseHtmlEnteties(str);
  const cleanString = cleanUpHtml.replace('<h1>', '').replace('</h1>', '');
  const regex = /(<\s*em[^>]*>(.*?)<\s*\/\s*em>)|([A-Za-z0-9'<>./]+)|(?:([:\w:]+))/gm;
  const template = `{text: "$1$3$4"},`;
  const objectify = cleanString.replace(regex, template);
  const arrayify = `[${objectify}]`;

  return eval(arrayify); // eslint-disable-line
}
