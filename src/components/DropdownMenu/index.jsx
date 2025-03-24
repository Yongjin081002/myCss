import React, { useState } from 'react'
import * as S from './indexStyle'



const DropdownMenu = () => {
    const [visibler, setVisible] = useState('hidden');
    const onClickVisible = () => {
        setVisible( visibler === 'block' ? "none" : 'block');
        console.log("1")
    }
  return (
    <div>
        <S.Box onClick={onClickVisible}>버튼</S.Box>
        <S.TextBoxWrap style={{display:visibler}}>
            <S.TextBox>a</S.TextBox>
            <S.TextBox>b</S.TextBox>
            <S.TextBox>c</S.TextBox>    
            <S.TextBox>a</S.TextBox>
            <S.TextBox>b</S.TextBox>
            <S.TextBox>c</S.TextBox>    
        </S.TextBoxWrap>
       
        
    </div>
  )
}

export default DropdownMenu
