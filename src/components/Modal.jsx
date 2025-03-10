import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Modal({ close, content }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalBackArea onClick={close}>
      <ModalArea onClick={(e) => e.stopPropagation()}>
        <Title> Login </Title>
        <BtnClose onClick={close}> X </BtnClose>
        
        {/* Inputs de usuario y contraseña */}
          <Input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        {content}
      </ModalArea>
    </ModalBackArea>
  );
}

const started = keyframes`    
  from {opacity: 0;} 
  to {opacity: 1;}
`;

const ModalBackArea = styled.div` 
  width: 100%;
  height: 100%;
  background: #ffffff88;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;  
  z-index: 3;
`;

const ModalArea = styled.div`  
  max-width: 90%;
  max-height: 90%;
  padding: 20px;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  top: 50%;
  margin: auto;
  box-sizing: border-box;
  transform: translateY(-50%);  
  animation: ${started} 500ms normal ; 
  box-shadow: 0 0 10px 0px #000000;
`;

const Title = styled.p` 
  text-align: center;
  font-size: 18px;
  font-weight: bold;  
  margin-bottom: 15px;
`;

const BtnClose = styled.button` 
  position: absolute;
  top: 10px;
  right: 10px;
  color: #FFF;   
  background: #FF906D;     
  font-size: 18px;
  font-weight: bold;  
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border: none; 
  cursor: pointer;   
  &:hover { 
    background: #FFF;
    color: #ff757c;    
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;
