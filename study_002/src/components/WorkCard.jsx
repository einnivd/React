function WorkCard({ title, year, tool, bg, img }) {
  return (
    <>
      <div className="card" style={{ backgroundColor: bg }}>
        <div className="img-box">
          <img src={img} alt={title}></img>
        </div>
        <h2>{title}</h2>
        <p>제작 기간 : {year}</p>
        <p>사용 툴 : {tool}</p>
      </div>
    </>
  );
}
export default WorkCard;
