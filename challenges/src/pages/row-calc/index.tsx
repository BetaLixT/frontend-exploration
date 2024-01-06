import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { render } from "react-dom";
import Row, { OnValueChange } from "./components/row";
import { createRoot } from "react-dom/client";

type RowData = {
  id: string;
};

export default function RowCalculate() {
  const [sum, updateSum] = useState(0);
  const [valueMap, updateValueMap] = useState<Map<string, number>>(
    new Map<string, number>(),
  );
  const [dat, updateData] = useState<RowData[]>([]);
  const [currentId, updateCurrentId] = useState(0);

  const listParentId = "values-to-compute";
  var listParent: HTMLElement;

  useEffect(() => {
    listParent = document.getElementById(listParentId)!;
  });

  useEffect(() => {
    console.log("sum", sum);
  }, [sum]);

  useEffect(() => {
    var s = 0;
    for (var val of valueMap) {
      s += val[1];
    }
    console.log("updating sum", valueMap, s);
    updateSum(s);
  }, [valueMap]);

  const updater = useCallback(
    (id: string, a: number) => {
      console.log("updated", a, id);
      updateValueMap(new Map(valueMap.set(id, a)));
    },
    [valueMap],
  );

  // const createValueChangeHandler = function(id: string): OnValueChange {
  //   return function(a: number): void {
  //     updater(id, a);
  //   };
  // };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Calculate <span className="text-[hsl(280,100%,70%)]">Rows</span>{" "}
            {sum}
          </h1>
          <button
            className="bg-light-brand-500 dark:bg-dark-brand-500 text-light-brandfg-500 dark:text-brandfg-500 fill-light-brandfg-500 dark:fill-brandfg-500 hover:bg-light-brand-400 dark:hover:bg-dark-brand-400 hover:text-light-brandfg-400 dark:hover:text-dark-brandfg-400 rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out"
            onClick={() => {
              const idn = currentId;
              updateCurrentId(idn + 1);
              const id = `${listParentId}-${idn}`;
              updateData((dat) => [
                ...dat,
                {
                  id: id,
                } as RowData,
              ]);
            }}
          >
            Add
          </button>
          <div>
            <ul id={listParentId}>
              {dat.map((val) => (
                <Row id={val.id} onValueChange={updater} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
