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
    width: 85%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    margin-top: 80px;
    background: white;
    transform: translate(-50%);
    border-radius: 5px;

    .cart{
        overflow: auto;
        max-height: 357px;
    }

    .header{
        max-width: 500px;
        height: 54px;
        background: var(--primary);
        color: var(--gray-0);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        height: 54px;
        font-size: 18px;
        font-weight: bold;

        .header__title{
            color: var(--gray-0);
            font-size: 18px;
            font-weight: bold;
        }
    }

    .tot{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;

        span{
            width: 55px;
            height: 24px;
            color: var(--gray-600);
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
        }

        span:nth-child(2){
            width: 64px;
            height: 24px;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
        }

        .removeAll{
            max-width: 464px;
            height: 60px;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
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