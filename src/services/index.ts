import { getCaseURL, getIncidenceURL, Params } from "../constants";
import {
  CaseAPIResponse,
  ErrorResponse,
  IncidenceAPIResponse,
} from "../store/types";
import cache from "./cache";

const service = {
  cacheAge: 24,

  async fetchCaseData({
    AGS,
    dayCount,
  }: Params): Promise<CaseAPIResponse | ErrorResponse> {
    const key = `cases/${AGS}/${dayCount}`;

    if (cache.has(key) && !cache.isExpired(key, this.cacheAge))
      return cache.get(key) as CaseAPIResponse | ErrorResponse;
    else {
      const caseData: CaseAPIResponse | ErrorResponse = await fetch(
        getCaseURL({ AGS, dayCount })
      ).then((res) => res.json());

      cache.set(key, caseData);
      return caseData;
    }
  },

  async fetchIncidenceData({
    AGS,
    dayCount,
  }: Params): Promise<IncidenceAPIResponse | ErrorResponse> {
    const key = `incidence/${AGS}/${dayCount}`;

    if (cache.has(key) && !cache.isExpired(key, this.cacheAge))
      return cache.get(key) as IncidenceAPIResponse | ErrorResponse;
    else {
      const caseData: IncidenceAPIResponse | ErrorResponse = await fetch(
        getIncidenceURL({ AGS, dayCount })
      ).then((res) => res.json());

      cache.set(key, caseData);
      return caseData;
    }
  },
};

export default service;
