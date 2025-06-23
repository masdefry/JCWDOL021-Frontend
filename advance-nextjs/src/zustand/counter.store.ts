import { create } from 'zustand';

interface ICounterStoreStateProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const counterStore = create<ICounterStoreStateProps>()((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));
