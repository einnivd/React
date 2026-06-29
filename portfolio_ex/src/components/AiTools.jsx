import { useState } from "react";
import aiTools from "../data/AiToolsData";
import "../styles/AiTools.css";
function AiTools() {
  const [activeTab, setActiveTab] = useState(aiTools[0].id);
  // console.log(activeTab);
  const current = aiTools.find((tab) => tab.id === activeTab);
  console.log(current);
  return (
    <>
      <section id="ai">
        <h2>AI 활용</h2>
        {/* 탭 메뉴 */}
        <div className="tab-list">
          {aiTools.map((tab) => (
            // console.log(tab)
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* 탭 메뉴 내용 */}
        <div className="tab-panel">
          <ul>
            {current.tools.map((tool) => (
              <li key={tool.id}>
                <strong>{tool.name}</strong>
                <p>{tool.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
export default AiTools;
