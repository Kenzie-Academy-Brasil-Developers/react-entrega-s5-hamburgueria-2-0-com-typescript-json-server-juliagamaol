import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }
    :root{
        --primary: #27AE60;
        /* --primary-50: #93D7AF; */
        --secondary: #EB5757;
        --gray-600: #333333;
        --gray-300: #828282;
        --gray-100: #E0E0E0;
        --gray-50: #999999;
        --gray-6: #F2F2F2;
        --gray-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;
    }
    
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;