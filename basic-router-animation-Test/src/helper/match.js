const match = (pathname) => {
  const RouteMatch = /(about|html|node)/;

  return RouteMatch.test(pathname);
}

export default match;
