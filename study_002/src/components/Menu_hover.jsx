import { useState } from "react";
import "../App.css";
function Menu_hover() {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <>
      <section>
        <ul className="gnb">
            {/* onMouseEnter={()=>setActiveMenu(0)} 호버했을 때 active*/}
            {/* onMouseLeave={()=>setActiveMenu(null)} 마우스 호버 해제 시 비활성화*/}
          <li onMouseEnter={()=>setActiveMenu(0)} onMouseLeave={()=>setActiveMenu(null)}>메뉴1
            {activeMenu === 0 && (
                <ul className="sub">
                    <li>회사소개</li>
                    <li>연혁</li>
                    <li>오시는 길</li>
                </ul>
            )}
          </li>
          <li onMouseEnter={()=>setActiveMenu(1)} onMouseLeave={()=>setActiveMenu(null)}>메뉴2
             {activeMenu === 1 && (
                <ul className="sub">
                    <li>신제품</li>
                    <li>인기상품</li>
                    <li>이벤트 상품</li>
                </ul>
            )}
          </li>
          <li onMouseEnter={()=>setActiveMenu(2)} onMouseLeave={()=>setActiveMenu(null)}>메뉴3
             {activeMenu === 2 && (
                <ul className="sub">
                    <li>공지사항</li>
                    <li>FAQ</li>
                    <li>문의하기</li>
                </ul>
            )}
          </li>
          <li onMouseEnter={()=>setActiveMenu(3)} onMouseLeave={()=>setActiveMenu(null)}>메뉴4
            {activeMenu === 3 && (
                <ul className="sub">
                    <li>갤러리</li>
                    <li>영상</li>
                    <li>포트폴리오</li>
                </ul>
            )}
          </li>
          <li onMouseEnter={()=>setActiveMenu(4)} onMouseLeave={()=>setActiveMenu(null)}>메뉴5
             {activeMenu === 4 && (
                <ul className="sub">
                    <li>마이페이지</li>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            )}
          </li>
        </ul>
      </section>
    </>
  );
}
export default Menu_hover;
