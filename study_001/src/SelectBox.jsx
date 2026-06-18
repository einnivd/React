import { useState } from "react";

function SelectBox() {
  const [fruit, setFruit] = useState("");
  const [agree, setAgree] = useState(false); // 체크 여부 저장

  function handleChange(e) {
    setFruit(e.target.value);
  }

  // 동의하기 체크박스
  function handleCheckbox(e) {
    setAgree(e.target.checked);
  }

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#ddd", marginBottom: "10px" }}>
        <select onChange={handleChange} value={fruit}>
          <option value="">과일 선택</option>
          <option value="토마토">토마토</option>
          <option value="딸기">딸기</option>
          <option value="망고">망고</option>
          <option value="블루베리">블루베리</option>
        </select>
        <h3>선택한 과일 : {fruit}</h3>
      </div>
      
      <div style={{ padding: "20px", backgroundColor: "#ddd" }}>
        <label>
          <input type="checkbox" checked={agree} onChange={handleCheckbox} />
          약관에 동의합니다.
        </label>
        <p>{agree ? "✅동의 완료!" : "❎동의하지 않았습니다."}</p>
      </div>
    </>
  );
}

export default SelectBox;
