import { FormEvent, useEffect, useState } from "react";

// type in function(in: number)
export type OnValueChange = (id: string, a: number) => void;

export default function Row(props: {
  id: string;
  onValueChange: OnValueChange;
}) {
  const [value, updateValue] = useState(0);

  const [inputValue, updateInputValue] = useState<number | undefined>();
  const onFormInput = function(e: FormEvent<HTMLInputElement> | undefined) {
    if (e) {
      if (e.currentTarget.value == "") {
        updateInputValue(undefined);
      } else {
        updateInputValue(+e.currentTarget.value);
      }
    }
  };

  const [operation, updateOper] = useState(1);
  const onOperInput = function(e: FormEvent<HTMLSelectElement> | undefined) {
    if (e) {
      if (e.currentTarget.value == "add") {
        updateOper(1);
      } else {
        updateOper(-1);
      }
    }
  };

  const [isEnabled, updateEnabled] = useState(true);

  useEffect(() => {
    updateValue(isEnabled ? operation * (inputValue ?? 0) : 0);
  }, [inputValue, operation, isEnabled]);

  // TODO: remove
  useEffect(() => {
    props.onValueChange(props.id, value);
    console.log(value);
  }, [value]);

  return (
    <div className="container my-1 flex text-white" id={props.id}>
      <select
        name="operation"
        id="operation-select"
        className="bg-light-bg-500 dark:bg-dark-bg-500 text-light-bgfg-500 dark:text-bgfg-500 fill-light-bgfg-500 dark:fill-bgfg-500 focus:ring-light-brand-500 dark:focus:ring-dark-brand-500 mx-1 rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out focus:outline-none focus:ring"
        onInput={onOperInput}
        disabled={!isEnabled}
      >
        <option value="add">+</option>
        <option value="sub">-</option>
      </select>
      <input
        type="number"
        disabled={!isEnabled}
        className="bg-light-bg-500 dark:bg-dark-bg-500 text-light-bgfg-500 dark:text-bgfg-500 fill-light-bgfg-500 dark:fill-bgfg-500 focus:ring-light-brand-500 dark:focus:ring-dark-brand-500 mx-1 rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out focus:outline-none focus:ring"
        onInput={onFormInput}
        value={inputValue}
      ></input>
      <button
        className="bg-light-brand-500 dark:bg-dark-brand-500 text-light-brandfg-500 dark:text-brandfg-500 fill-light-brandfg-500 dark:fill-brandfg-500 hover:bg-light-brand-400 dark:hover:bg-dark-brand-400 hover:text-light-brandfg-400 dark:hover:text-dark-brandfg-400 mx-1 rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out"
        onClick={() => {
          updateEnabled(!isEnabled);
        }}
      >
        {isEnabled ? "Disable" : "Enable"}
      </button>
      <button className="bg-light-danger-500 dark:bg-dark-danger-500 text-light-dangerfg-500 dark:text-dangerfg-500 fill-light-dangerfg-500 dark:fill-dangerfg-500 hover:bg-light-danger-400 dark:hover:bg-dark-danger-400 hover:text-light-dangerfg-400 dark:hover:text-dark-dangerfg-400 mx-1 rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out">
        Delete
      </button>
    </div>
  );
}
