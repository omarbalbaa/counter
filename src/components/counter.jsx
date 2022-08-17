import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="text-center">
      <div class="card text-center">
        <div class="card-header fs-3">I am a Counter</div>
        <div class="card-body">
          <h1 class="card-title my-4">{count}</h1>
          <button className="btn btn-danger mx-3 px-5" onClick={countDown}>
            {" "}
            -{" "}
          </button>
          <button className="btn btn-success mx-3 px-5" onClick={countUp}>
            {" "}
            +{" "}
          </button>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </div>
  );
}
export default Counter;