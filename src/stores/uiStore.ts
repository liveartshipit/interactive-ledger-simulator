import { create } from 'zustand';

interface UIState {
  sidebarOpen: boolean;
  activeSection: string;
  searchQuery: string;
  toggleSidebar: () => void;
  setActiveSection: (section: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  activeSection: 'ledger',
  searchQuery: '',
  
  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  },
  
  setActiveSection: (section) => {
    set({ activeSection: section });
  },
  
  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },
}));
