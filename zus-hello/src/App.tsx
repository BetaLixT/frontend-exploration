import { } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { create } from "zustand";

interface Count {
  clicks: number;
  increase: (by: number) => void;
}

const useCounterStore = create<Count>()((set) => ({
  clicks: 0,
  increase: (by) => set((state) => ({ clicks: state.clicks + by })),
}));

function App() {
  const counter = useCounterStore();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => counter.increase(1)}>
          count is {counter.clicks}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
