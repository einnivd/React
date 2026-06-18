import { useState } from "react";

function Ex() {
  const [emoji, setEmoji] = useState("😃");
  //   이모지 변경 함수
  function changeEmoji() {
    // console.log("클릭");
    setEmoji("😉🤗🥰");
  }
  // 토글 이모지 변경 함수
  function toggleEmoji() {
    // 삼항 연산자
    setEmoji(emoji === "😃" ? "😎" : "😑");
  }
  // 입력창 값 출력하기
  // name이라는 상태변수를 만들고, 초기값을 빈 문자열("")로 만든다.
  const [name, setName] = useState("");
  // setName은 name 상태를 바꿀 때 사용하는 함수
  function handleChange(e){
    // console.log(e.target.value);
    
    setName(e.target.value)
  }
  return (
    <>
      <hr />
      <p>06월18일</p>
      <p>현재 기분: {emoji}</p>
      <button onClick={changeEmoji}>기분 변경</button>
      <button onClick={toggleEmoji}>토글 기분 변경</button>
      {/* 입력창 값 출력하기 */}
      <input
        style={{ display: "block", marginTop: "20px", padding: "10px" }}
        type="text"
        placeholder="이름을 입력하세요."
        // 입력창에 보이는 값은 name 상태와 같다. (양방향 바인딩)
        value={name}
        onChange={handleChange}
      ></input>
      {/* || 는 '또는'의 의미 */}
      <p>안녕하세요. <strong>{name || "..."}</strong>님! 반갑습니다.</p>
    </>
  );
}
export default Ex;
