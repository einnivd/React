import { useState } from "react";

function Name() {
  const [inputName, setInputName] = useState(""); // 입력창에 쓰는 값
  const [saveName, setSaveName] = useState(""); // 저장된 이름
  function handleChange(e) {
    setInputName(e.target.value);
  }
//   저장 버튼 클릭시
function handleSave(){
    setSaveName(inputName)
    console.log("click");
    
    setInputName("")
}
  return (
    <>
      <h1>이름 저장하기</h1>
      <input
        type="text"
        placeholder="이름을 입력하세요."
        value={inputName}
        onChange={handleChange}
      ></input>
      {/* 입력값 저장버튼 */}
      <button onClick={handleSave}>저장</button>
      {/* 저장값 출력 */}
      <p>{saveName ? `안녕하세요, ${saveName}님!` : "입력된 이름이 없습니다."}</p>
    </>
  );
}
export default Name;
