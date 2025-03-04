import React, { useState } from 'react'
import * as S from './indexStyle'



const DropdownMenu = () => {
    const [visible, setVisible] = useState('hidden');
    const onClickVisible = () => {
        setVisible( visible === 'visible' ? "hidden" : 'visible')
    }
  return (
    <div>
        <S.Box onClick={onClickVisible}>버튼</S.Box>
        <S.TextBoxWrap style={{visibility:visible}}>
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
