import React, { useState } from "react";

const Counter = () => {
  // logic
  /**
   * TODO: 카운터 앱 논리 작성
   * 1. counter, setCounter라는 state를 만든다.
   * 2. counter의 초기값을 0으로 지정한다.
   * 3. counter의 값을 UI에 보여준다.
   * 4. increase함수를 만든다.
   * 5. 사용자가 +1버튼을 클릭하면 increase함수가 실행된다.
   * 6. [increase함수 정의]counter라는 state의 값이 1 증가한다.
   * 7. [increase함수 정의]counter라는 state의 값이 10 미만인 경우에만 counter의 값을 1 증가한다.
   * 8. 숫자가 +1이 되어 변경되는 것을 확인한다.
   * ---
   *
   * 감소 반복
   */

  const [counter, setCounter] = useState(0);

  const increase = () => {
    // counter의 값을 변경
    if (counter < 10) {
      setCounter(counter + 1);
      console.log("counter", counter);
    }
  };

  const decrease = () => {
    // counter의 값을 변경
    if (counter > 0) {
      // setCounter(counter - 1);
      setCounter((prev) => prev - 1);
    }
  };

  // view
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{counter}</h2>
      <button type="button" onClick={increase}>
        +1
      </button>
      <button type="button" onClick={decrease}>
        -1
      </button>
    </div>
  );
};

export default Counter;
