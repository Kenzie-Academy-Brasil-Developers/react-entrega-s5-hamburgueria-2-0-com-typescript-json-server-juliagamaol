import styled from "styled-components";


export const Container = styled.div`
    @media (min-width:769px){
        flex-flow: row-reverse nowrap;
        height: 100vh;
    }
    width: 100%;
    max-height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column-reverse nowrap;

    form{
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items:flex-start;
        padding: 24px;
        border: 2px solid #F5F5F5;
        box-sizing: border-box;
        box-shadow: 0px 0px 30px -20px var(--gray-0);
        border-radius: 5px;
        gap: 20px;

        div{
            width: 100%;
            display: flex;
            justify-content: space-between;

            a{
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                text-decoration-line: underline;
                color: var(--gray-300);


            }
        }

        h3{
            font-weight: bold;
            font-size: 18px;
        }

        p{
            width: 327px;
            text-align: center;
            margin: 0 auto;
            color: var(--gray-50);
            font-size: 14px;
        }
    }
    .about{
       width: 100%;
       max-width: 500px;
       height: 461px;
       display: flex;
       justify-content: center;
       align-items: flex-start;
       flex-direction: column;
       padding-left: 20px;
       
    }
    .about__logo{
        margin-left: 20px;
        margin-bottom: 30px;
    }
    .about__text{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 377px;
        height: 95px;
        border: 1px solid var(--gray-100);
        box-sizing: border-box;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        p{
            width: 261px;
            height: 66px;
            font-size: 14px;
            line-height: 22px;
            color: var(--gray-300);
            margin-left: 20px;
            span{
                font-weight: bold;
                color: black;
            }
        }
    }
    .about__text--icon{
        width: 60px;
        height: 60px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #27AE601A;
;
    }
    
   
`