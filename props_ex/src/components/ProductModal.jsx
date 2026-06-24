function ProductModal({product , onClose}) {
    const { title, price, category, image } = product;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={onClose}>X</button>
          <img src={image} alt={title}/>
          <div className="modal-content">
            <span className="category">{category}</span>
            <h1>{title}</h1>
            <p className="price">{price}원</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductModal;
