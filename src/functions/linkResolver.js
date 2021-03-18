export const linkResolver = (doc) => {
  // URL for a product type
  if (doc.type === 'post') {
    return `/${doc.uid}`;
  }

  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }

  // Backup for all other types
  return '/';
};
