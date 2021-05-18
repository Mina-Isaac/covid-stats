import { CaseAPIResponse, IncidenceAPIResponse, ErrorResponse } from "../store/types";

type APIResponse = CaseAPIResponse | IncidenceAPIResponse | ErrorResponse;

const cacheHolder = new Map<string, [APIResponse, number]>();

const cacheHelper = {
  has(key: string) {
    return cacheHolder.has(key);
  },

  set(key: string, value: APIResponse) {
    return cacheHolder.set(key, [value, Date.now()]);
  },

  get(key: string) {
    return cacheHolder.get(key)?.[0];
  },

  isExpired(key: string, hours: number) {
    const timestamp = cacheHolder.get(key)?.[1];
    if (timestamp === undefined) return true;

    return (Date.now() - timestamp) / (1000 * 60 * 60) > hours;
  },
};

export default cacheHelper;
