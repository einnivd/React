// 버튼 컴포넌트
// function Button(props) {
//   return (
//     <>
//       <button style={{backgroundColor:props.color , color:props.textColor}}>{props.text}</button>
//     </>
//   );
// }

// 구조 분해 할당 (위 코드와 화면 출력 결과는 같음)
function Button({text, color, textColor}){
    return(
        <>
        <button style={{backgroundColor:color , color:textColor}}>
            {text}
        </button>
        </>
    )
}
export default Button;
