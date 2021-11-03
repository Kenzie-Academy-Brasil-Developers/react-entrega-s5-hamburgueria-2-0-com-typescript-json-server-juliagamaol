import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background: var(--gray-0);

    .bar{
        width: 100%;
        height: 80px;
        max-width: 1600px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        .logo{
            width: 158px;
            cursor: pointer;
        }
    }

    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        .logout{
            cursor: pointer;
        }

        .cart{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
        }

        .cart span{
            width: 20px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--primary);
            border-radius: 7px;
            color: white;
            font-weight: 700;
            font-size: 1rem;
            position: absolute;
            top: -15px;
            left: 50px;
            left: 15px;
            
        }
    }

`
export const InputContainer = styled.div`
    border: 2px solid var(--gray-100);
    border-radius: 8px;
    width: 100%;
    max-width: 382px;
    height: 60px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: white;

    input{
       
        border: transparent;
        color: var(--gray-100);
        font-size: 16px;
        font-weight: normal;
    }

    button{
        width: 53px;
        height: 40px;
        background: var(--primary);
        border: none;
        border-radius: 8px;
    }
`