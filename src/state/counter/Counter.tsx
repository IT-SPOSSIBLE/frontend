import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const [age, setAGe] = useState(0);

  useEffect(()=>{
    console.log("count", count);
    return () => {
        console.log("clean up finely")
    };
  },[count])
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
        className="mt-4 h-6 w-12 rounded-full gap-4 hover:bg-amber-300"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="mt-4 h-6 w-12 rounded-full gap-4 hover:bg-green-300"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <h1>Age: {age}</h1>
      <button
        className="mt-4 h-6 w-12 rounded-full gap-4 hover:bg-amber-300"
        onClick={() => setAGe(age + 1)}
      >
        +
      </button>
      <button
        className="mt-4 h-6 w-12 rounded-full gap-4 hover:bg-green-300"
        onClick={() => setAGe(age - 1)}
      >
        -
      </button>
    </div>
  );
};
export default Counter;
