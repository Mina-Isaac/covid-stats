export interface CaseDataPoint {
  cases: number;
  date: string;
}

export interface IncidenceDataPoint {
  weekIncidence: number;
  date: string;
}

interface APIResponse<
  AGS extends string,
  DataPoint extends CaseDataPoint | IncidenceDataPoint
> {
  data: {
    [key in AGS]: {
      ags: AGS;
      name: string;
      history: DataPoint[];
    };
  };
  meta: {
    source: string;
    contact: string;
    info: string;
    lastUpdate: string;
    lastCheckedForUpdate: string;
  };
  error: never;
}

export interface ErrorResponse {
  code: number;
  error: string;
  message: string;
  data: never;
}

export type CaseAPIResponse = APIResponse<string, CaseDataPoint>;
export type IncidenceAPIResponse = APIResponse<string, IncidenceDataPoint>;
