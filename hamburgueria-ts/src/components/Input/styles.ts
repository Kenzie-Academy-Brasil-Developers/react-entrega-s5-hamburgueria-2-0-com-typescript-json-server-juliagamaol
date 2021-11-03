import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 452px;
    height: 60px;
    border: 2px solid #333333;
    border-radius: 8px;
    background: var(--gray-0);
    display: flex;
    justify-content: flex-start;
    align-items: center;

  input {
    background: none;
    border: transparent;
    border-radius: 5px;
    height: 20px;
    padding: 5px;
    width: 50%;
    margin-left: 10px;
    outline: none;
    color: var(--gray-600);
    
  }

`