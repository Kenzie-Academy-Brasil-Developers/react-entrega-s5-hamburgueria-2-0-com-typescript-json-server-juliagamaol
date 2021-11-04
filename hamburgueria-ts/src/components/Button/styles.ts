import styled from "styled-components";

interface ContainerProps{
    colorToChange:boolean
}

export const Container = styled.button<ContainerProps>`
    width: 100%;
    max-width: 452px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    background: ${(props)=>props.colorToChange? 'var(--primary)' : 'var(--gray-0)'};
    color: ${(props)=>props.colorToChange? 'var(--gray-0)' : 'var(--gray-50)'};
    border: none;
    :hover{
        background: ${(props)=>props.colorToChange? "#2ecc71": "var(--gray-100)"};
        transform: scale(0.95);
        transition: all 0.5s;
    }
`