import { useState } from "react";
import PropsEx from "./components/PropsEx";

function App() {
  const [color, setColor] = useState();
  function handleChange(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <section>
        <h1>좋아하는 색 선택</h1>
        <PropsEx name="이예빈"></PropsEx>
        <select
          onChange={handleChange}
          value={color}
          style={{ padding: "10px", marginTop: "20px" }}
        >
          <option value="purple">보라</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="orange">주황</option>
          <option value="pink">분홍</option>
          <option value="silver">은색</option>
          <option value="black">검정</option>
          <option value="skyblue">하늘</option>
        </select>
        <p style={{ marginTop: "20px" }}>
          당신이 선택한 색은 <strong style={{ backgroundColor: color , padding:"10px" , color:"#fff"}}>{color}</strong>
        </p>
      </section>
    </>
  );
}
export default App;
