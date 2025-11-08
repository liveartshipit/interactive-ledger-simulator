import { create } from 'zustand';

export interface LedgerEntry {
  id: string;
  type: 'asset' | 'liability';
  name: string;
  value: number;
  timestamp: number;
}

interface LedgerState {
  entries: LedgerEntry[];
  currency: string;
  exchangeRate: number;
  addEntry: (entry: Omit<LedgerEntry, 'id' | 'timestamp'>) => void;
  removeEntry: (id: string) => void;
  clearEntries: () => void;
  setCurrency: (currency: string) => void;
  setExchangeRate: (rate: number) => void;
  getTotalAssets: () => number;
  getTotalLiabilities: () => number;
  getBalance: () => number;
  isBalanced: () => boolean;
}

export const useLedgerStore = create<LedgerState>((set, get) => ({
  entries: [],
  currency: 'USD',
  exchangeRate: 1,
  
  addEntry: (entry) => {
    const newEntry: LedgerEntry = {
      ...entry,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };
    set((state) => ({ entries: [...state.entries, newEntry] }));
  },
  
  removeEntry: (id) => {
    set((state) => ({
      entries: state.entries.filter((entry) => entry.id !== id),
    }));
  },
  
  clearEntries: () => {
    set({ entries: [] });
  },
  
  setCurrency: (currency) => {
    set({ currency });
  },
  
  setExchangeRate: (rate) => {
    set({ exchangeRate: rate });
  },
  
  getTotalAssets: () => {
    const { entries, exchangeRate } = get();
    return entries
      .filter((entry) => entry.type === 'asset')
      .reduce((sum, entry) => sum + entry.value * exchangeRate, 0);
  },
  
  getTotalLiabilities: () => {
    const { entries, exchangeRate } = get();
    return entries
      .filter((entry) => entry.type === 'liability')
      .reduce((sum, entry) => sum + entry.value * exchangeRate, 0);
  },
  
  getBalance: () => {
    return get().getTotalAssets() - get().getTotalLiabilities();
  },
  
  isBalanced: () => {
    const balance = get().getBalance();
    return Math.abs(balance) < 0.01;
  },
}));
