import { useState } from "react";
import "./App.css";

import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  // console.log(search);
  // 검색 기능
  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
);
console.log(filterProducts);
  return (
    <>
      <div className="container">
        <h1 className="title">상품 목록</h1>
        <div className="top-area">
          {/* 입력창 */}
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></SearchBox>
          {/* 버튼 */}
          <Button text="초기화" onClick={()=>setSearch("")}/>
        </div>
        {/* 상품 카드 */}
        <ProductList products={filterProducts} />
      </div>
    </>
  );
}
export default App;
