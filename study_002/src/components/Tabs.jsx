import { useState } from "react";
import "../App.css";

function Tabs() {
  // 탭 내용 더미데이터
  const contents = [
    "🍓 딸기 탭 내용입니다.",
    "🍋 레몬 탭 내용입니다.",
    "🥭 망고 탭 내용입니다.",
    "🍑 복숭아 탭 내용입니다.",
  ];
  const [activeTab, setActiveTab] = useState(0);
  //   버튼 클릭시 함수
  console.log(activeTab);

  return (
    <>
      <section className="tab-wrap">
        {/* 탭 버튼 */}
        <div className="tab-menu">
          <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? "active" : ""}>🍓</button>
          <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>🍋</button>
          <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : ""}>🥭</button>
          <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? "active" : ""}>🍑</button>
        </div>
        {/* 탭 내용 */}
        <div className="tab-content">
          {/* <h2>{contents}</h2> */}
          <h2>{contents[activeTab]}</h2>
        </div>
      </section>
    </>
  );
}
export default Tabs;
