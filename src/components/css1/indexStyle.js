import styled,{ keyframes} from "styled-components";



export const FirstText = styled.h1`
    color:black;
    border: 1px solid;
    background-color:yellow;


`
export const SecText = styled(FirstText)`
    border:none;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25%{
    background-color:skyblue;
  }
  50%{
    background-color:red;
    margin-left:800px;
  }
  75%{
    width:300px;
    height:300px;
    margin-left:1000px;
  }
  100% {
    transform: rotate(360deg);
  }
`;


// BoxWrap 스타일 컴포넌트에 애니메이션 적용
export const BoxWrap = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid;
  animation: ${rotate} 2s linear infinite; /* 5초 동안 회전, 무한 반복 */

  h1 {
    color: red;
  }

  h2 {
    color: blue;
  }
`;




