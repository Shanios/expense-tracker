import { useLocalStorage } from "./useLocalStorage";

export function useBudget() {
  const [budget, setBudget] = useLocalStorage("budget", 0);

  return {
    budget,
    setBudget
  };
}
