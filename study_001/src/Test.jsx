import { useState } from "react";

function Test() {
  function hello() {
    alert("안녕하세요✨");
  }
  // 함수에 매개변수 전달
  function greet(name) {
    alert(`${name}님, 환영합니다.`);
  }
  // useState함수
  const [count, setCount] = useState(0);
  //   const [name, setName] = useState("이예빈");
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  //   좋아요 버튼 카운트
  const [like, setLike] = useState(0);
  function plusLike() {
    setLike(like + 1);
  }
  //   배열 출력
  const menus = ["HTML", "CSS", "JS", "REACT"];
  // 함수가 값을 반환하는 경우
  function getName() {
    return "이예빈";
  }
  return (
    <>
      {/* 함수가 값을 반환하는 경우 */}
      <h1>{getName()}</h1>
      {/* 함수에 매개변수 전달 */}
      <h2>리액트 기본 함수</h2>
      <button onClick={hello}>클릭</button>
      <h2>인사하기</h2>
      <button onClick={() => greet("쿠로미")}>인사하기</button>
      <button onClick={() => greet("시나모롤")}>인사하기</button>
      {/* useState함수 */}
      <h2>{count}</h2>
      <button onClick={increase}>+1 증가</button>
      <button onClick={decrease}>-1 감소</button>
      {/* 좋아요 버튼 클릭시 카운트 */}
      <p>좋아요 : {like}</p>
      <button onClick={plusLike}>LIKE🧡</button>
      {/* 배열 출력 */}
      <ul>
        {/* key={index} 리액트가 각 항목을 구별하기 위한 이름표 */}
        {menus.map((menu, index) => {
          // console.log(menu, index);
          return <li key={index}>{menu}</li>;
        })}
      </ul>

      {/* 배열출력 - 아래와 같이 써도 똑같음 */}
      {/* <ul>
        {menus.map((menu, index) => (
          <li key={index}>{menu}</li>
        ))}
      </ul> */}
    </>
  );
}
export default Test;
