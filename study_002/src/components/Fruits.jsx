function Fruits({name, price}) {
  return (
    <>
      <div className="fruit">
        <h3>과일 정보</h3>
        <p>이름 : {name}</p>
        <p>가격 : {price}</p>
      </div>
    </>
  );
}
export default Fruits;
