import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 346px;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--gray-100);
    border-radius: 5px;
    overflow: hidden;

   .image{
       width: 100%;
       height: 40%;
       display: flex;
       align-items: center;
       justify-content: center;
       background: var(--gray-0);

       img{
           max-width: 150px;
       }
   }
   .infoOfProduct{
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 15px;
      
   }
   h3{
       font-size: 24px;
   }
   p{
       font-size: 12px;
       color: var(--gray-300);
   }
   h5{
       font-size: 14px;
       font-weight: 600;
       color: var(--primary);
   }
   .button{
       width: 106px;
       height: 40px;
   }
`