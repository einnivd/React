function ProductCard({ product, onSelect }) {
  const { title, price, category, image } = product;
  return (
    <>
      <div className="card" onClick={() => onSelect(product)}>
        <img src={image} alt={title}></img>
        <div className="card-content">
          <h3>{title}</h3>
          <p className="price">{price.toLocaleString()}원</p>
          <span className="category">{category}</span>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
