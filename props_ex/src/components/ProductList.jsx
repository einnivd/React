import ProductCard from "./ProductCard";

function ProductList({ products }) {
  console.log(products);

  return (
    <>
      <div className="list">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}
export default ProductList;
