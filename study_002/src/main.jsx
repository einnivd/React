import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tabs from "./components/Tabs.jsx";
import Menu_hover from "./components/Menu_hover.jsx";
import Button from "./components/Button.jsx";
import WorkCard from "./components/WorkCard.jsx";
import Fruits from "./components/Fruits.jsx";
const fruitList = [
  { name: "사과", price: 1000 },
  { name: "바나나", price: 1500 },
  { name: "포도", price: 2000 },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Tabs></Tabs>
    <Menu_hover></Menu_hover>
    {/* Button */}
    {/* props : 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법 */}
    <Button text="로그인" color="white" textColor="black"></Button>
    <Button text="회원가입" color="black" textColor="white"></Button>
    {/* WorkCard */}
    <div className="card-content">
      <WorkCard
        title="클론 코딩"
        bg="rgb(243, 255, 190)"
        year="2026.04.05. - 04.10."
        tool="HTML, CSS, JS"
        img="/images/cherry.jpg"
      ></WorkCard>
      <WorkCard
        title="SNS광고"
        bg="rgb(226, 215, 255)"
        year="2026.04.05. - 04.10."
        tool="Photoshop"
        img="/images/heart.jpg"
      ></WorkCard>
      <WorkCard
        title="웹사이트 디자인"
        bg="rgb(255, 212, 230)"
        year="2026.04.05. - 04.10."
        tool="HTML, CSS, JS"
        img="/images/apple.jpg"
      ></WorkCard>
      <WorkCard
        title="랜딩페이지"
        bg="rgb(199, 255, 250)"
        year="2026.04.05. - 04.10."
        tool="Figma, Photoshop"
        img="/images/bear.jpg"
      ></WorkCard>
      <WorkCard
        title="랜딩페이지"
        bg="rgb(255, 230, 161)"
        year="2026.04.05. - 04.10."
        tool="Figma, Photoshop"
        img="/images/puppy.jpg"
      ></WorkCard>
    </div>
    {/* map사용 props 가져오기 */}
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      {fruitList.map((fruit, index) => (
        <Fruits key={index} name={fruit.name} price={fruit.price} />
      ))}
    </div>
  </StrictMode>,
);
