import styled from "styled-components";
import login from '../../images/Login.svg'

export const Container = styled.div`
    @media (min-width:768px){
        display: flex;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column-reverse nowrap;

`
export const Background = styled.div`
    @media (min-width:1100px){
        background: url(${login}) no-repeat, var(--gray-0);
        background-size: contain;
    }

`
export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    height: 461px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    border-radius: 5px;

    .login{
        text-align: left;
        width: 52px;
        width: 100%;
    }
    p{
       max-width:327px;
       text-align: center;
       color: var(--gray-50);
       font-size: 14px;

    }
`
