import "./App.css";
import { atom, Provider, useAtom } from "jotai";
import { FC } from "react";

const counter = atom(0);

const App: FC = () => {
  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter((prev) => prev + 1);
  return (
    <Provider>
      <h1 className="text-3xl font-bold">{count}</h1>
      <button onClick={onClick} className="text-3xl m-2">
        Click
      </button>
    </Provider>
  );
};

export default App;
