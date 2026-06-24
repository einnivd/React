import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProductList({ products }) {
  // console.log(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="list">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            // 카드를 클릭했을 때 product가 담긴다.
            // selectedProduct = product
            onSelect={setSelectedProduct}
            // title={item.title}
            // price={item.price}
            // category={item.category}
            // image={item.image}
          />
        ))}
      </div>
      {/* 선택된 상품이 있을 때만 모달창 보여주기 */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
export default ProductList;
