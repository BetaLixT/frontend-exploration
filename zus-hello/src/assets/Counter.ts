import { create } from "zustand";

interface Count {
  clicks: number;
  increase: (by: number) => void;
}

const counter = create<Count>()((set) => ({
  clicks: 0,
  increase: (by) => set((state) => ({ clicks: state.clicks + by })),
}));
