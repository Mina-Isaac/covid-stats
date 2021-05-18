import { useMemo } from "react";
import { useAppSelector } from "./store/hooks";
import { selectCaseHistory, selectIncidenceHistory } from "./store/dataReducer";
import { selectDrawnStats } from "./store/settingsSlice";

function useConsolidatedData() {
  const drawnStats = useAppSelector(selectDrawnStats);
  const caseHistory = useAppSelector(selectCaseHistory);
  const incidenceHistory = useAppSelector(selectIncidenceHistory);

  const consolidatedData = useMemo(() => {
    type ConsolidatedPoint = Record<keyof typeof drawnStats, number> & {
      date: string;
    };

    const result: ConsolidatedPoint[] = [];
    if (caseHistory && incidenceHistory) {
      caseHistory.forEach(({ date, cases }, i) => {
        const incidence = +incidenceHistory[i]?.weekIncidence.toFixed(2);
        result.push({ date: date.slice(5, 10), cases, incidence });
      });
    }
    return result;
  }, [caseHistory, incidenceHistory]);

  return consolidatedData;
}

function generateYDataKeys(StatTypes: { [key: string]: boolean }) {
  const yDataKeys: { key: string; name: string }[] = [];
  Object.keys(StatTypes).forEach((key) => {
    if (StatTypes[key]) {
      const name = key.charAt(0).toUpperCase() + key.slice(1);
      yDataKeys.push({ key, name });
    }
  });
  return yDataKeys;
}

export { generateYDataKeys, useConsolidatedData };
