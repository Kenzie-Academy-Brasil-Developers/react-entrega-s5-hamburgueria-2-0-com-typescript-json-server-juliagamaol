import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(51, 51, 51, 0.5);
    position: absolute;
    left: 0;
    top: 0;

`

export const Content = styled.div`
    width: 70%;
    max-width: 500px;
    min-height: 158px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    margin-top: 10%;
    background: white;
    transform: translate(-50%);
    border-radius: 5px;
    overflow: hidden;

    .header{
        background: var(--primary);
        color: var(--gray-0);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        height: 54px;
        font-size: 18px;
        font-weight: bold;
    }
    .tot{
        width: 90%;
        max-width: 454px;
        border-top: 3px solid var(--gray-100);
        height: 59px;
        display: flex;
        justify-content: space-betweens;
        align-items:center;
    }
    .aviso{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 158px;
        gap: 15px;

        h2{
            font-size: 18px;
            font-weight: bold;
        }
        span{
            font-size: 14px;
            color: var(--gray-300);
        }
    }
`