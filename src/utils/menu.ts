import pathToRegexp from 'path-to-regexp';

export const urlToList = (url: string) => {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((_, index) => `/${urllist.slice(0, index + 1).join('/')}`);
};

export const getMenuMatches = (flatMenuKeys: Array<string>, path: string) =>
  flatMenuKeys.filter(item => item && pathToRegexp(item).test(path));
