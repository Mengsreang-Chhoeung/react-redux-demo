import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount
} from "../../features/counter/counterSlice";
import "./index.css";

const Counter: React.FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<any>(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={() => dispatch(decrementByAmount(addValue))}>Minus Amount</button>
      </div>

      <div style={{ margin: '30px 0px' }}>
      <button onClick={() => resetAll()}>Reset All</button>
      </div>
    </section>
  );
};

export default Counter;
