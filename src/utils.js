export const buildQueryString = (params) => {
  const urlParams = new URLSearchParams();
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      urlParams.append(key, params[key]);
    }
  }
  return urlParams.toString();
}
