import { BASE_URL } from "@/constants";
import { ALLOWED_QUERY_PARAMS } from "@/shared/constants";

export const getUrlWithParams = (queryParams: Record<string, string>) => {
  const parsedQueryParams = Object.entries(queryParams);
  let url = BASE_URL;
  parsedQueryParams.forEach((parsedQueryParam) => {
    const [key, value] = parsedQueryParam;
    const apiQueryParam = ALLOWED_QUERY_PARAMS[key] || null;
    if (apiQueryParam) {
      url += `${apiQueryParam}=${value}&`;
    }
  });
  return url;
};
