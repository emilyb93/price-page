import cardInfo from "../../../data/cardInfo.json";
import React, { createContext, useContext, useState } from "react";
import { PlanInfo } from "../../../types";

interface PlanProviderValue {
  planInfo: PlanInfo[];
  setPlanInfo: React.Dispatch<React.SetStateAction<PlanInfo[]>>;
}
const PlanContext = createContext<PlanProviderValue | undefined>(undefined);

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
};

function PlanProvider({ children }: { children: React.ReactNode }) {
  const [planInfo, setPlanInfo] = useState(cardInfo.plans);

  return (
    <PlanContext.Provider value={{ planInfo, setPlanInfo }}>
      {children}
    </PlanContext.Provider>
  );
}

export default PlanProvider;
