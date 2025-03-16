import cardInfo from "../../../data/cardInfo.json";
import React, { createContext, useContext } from "react";
import { PlanInfo } from "../../../types";

const PlanContext = createContext<PlanInfo[] | undefined>(undefined);

export const usePlan = () => useContext(PlanContext);

function PlanProvider({ children }: { children: React.ReactNode }) {
  const planData = cardInfo;

  return (
    <PlanContext.Provider value={planData.plans}>
      {children}
    </PlanContext.Provider>
  );
}

export default PlanProvider;
