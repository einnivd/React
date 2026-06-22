import Button from "./Button";

function PropsEx(props) {
  return (
    <>
      <h1>{props.name}님! 반갑습니다.</h1>
      <Button text="hello" color="violet"/>
    </>
  );
}
export default PropsEx;
