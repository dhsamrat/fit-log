"use client";

import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { IMuscle } from "@/types/muscle.type";

interface IMuscleContext {
  plan: IMuscle[];
  setPlan: Dispatch<SetStateAction<IMuscle[]>>;
  save: IMuscle[];
  setSave: Dispatch<SetStateAction<IMuscle[]>>;
}

export const MuscleContext = createContext<IMuscleContext | undefined>(
  undefined
);

const MuscleProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IMuscle[]>([]);
  const [save, setSave] = useState<IMuscle[]>([]);

  return (
    <MuscleContext.Provider
      value={{
        plan,
        setPlan,
        save,
        setSave,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};

export default MuscleProvider;