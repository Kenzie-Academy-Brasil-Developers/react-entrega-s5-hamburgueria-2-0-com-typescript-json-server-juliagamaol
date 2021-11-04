import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    margin: 5px;
    
    .product{
        display: flex;
        gap: 20px;
    }

    .product__image{
        width: 82px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--gray-100);
        border-radius: 5px;
        img{
            width: 55px;
            height: 53.49px;
        }
    }
    
    

`
/* color: var(--gray-600);
font-size: 18px;
font-weight: bold;*/