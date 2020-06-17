'use strict';

const shouldAddResourceHints = options => {
  return !(options.prefetch.test.length === 0 &&
           options.preload.test.length === 0);
};

const mimeType = (entry) => {
  if (/\.css$/.test(entry)) return 'style';
  if (/\.woff$/.test(entry)) return 'font';
  if (/\.png$/.test(entry)) return 'image';
  return 'script';
}

const createResourceHint = (rel, href) => {
  return {
    tagName: 'link',
    selfClosingTag: true,
    attributes: {
      rel: rel,
      href: href,
      as: mimeType(href)
    }
  };
};

module.exports = {
  shouldAddResourceHints,
  createResourceHint
};
