import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;

`
export const Content = styled.div`
    .title{
        max-width: 244px;

        h1{
           font-size: 1.625rem;
           span{
              color: var(--secondary);
           }
        }
    }

    div{
        display: flex;
        flex: 1;
        margin-top: 1rem;

        button + button{
            margin-left: 1rem;
        }
    }


`
