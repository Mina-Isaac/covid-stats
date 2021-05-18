const BASE_URL = "https://api.corona-zahlen.org/districts/";

export interface Params {
  AGS: string;
  dayCount: number;
}

function getCaseURL({ AGS, dayCount }: Params) {
  return `${BASE_URL}${AGS}/history/cases/${dayCount}`;
}

function getIncidenceURL({ AGS, dayCount }: Params) {
  return `${BASE_URL}${AGS}/history/incidence/${dayCount}`;
}

export { getCaseURL, getIncidenceURL };
