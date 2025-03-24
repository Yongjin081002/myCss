import styled,{ keyframes} from "styled-components";
import i from './index';

const fadeIn = keyframes`
from {
    width:100px;
    height:80px;
} to{
    width:500px;
    height:400px;
}
`

const textAni = keyframes`
    from{
        font-size:10px;
    } to{
        font-size:50px;
    }
`

export const Box = styled.button`
    width:100px;
    height:50px;
`

export const TextBox = styled.div`
    font-size:50px;
    animation: ${textAni} 1s ease-in;
`

export const TextBoxWrap = styled.div`
    width:500px;
    height:400px;
    animation: 1s ease-in;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    animation: ${(props) => (props.isOpen ? fadeIn : "none")} 0.3s ease-out;
`