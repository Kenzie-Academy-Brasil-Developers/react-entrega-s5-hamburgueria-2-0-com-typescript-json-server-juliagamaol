import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    colorToChange:boolean
    onClick?:() => void
}

const Button = ({ children, colorToChange, ...rest }:ButtonProps) => {
  return (
    <Container colorToChange={colorToChange} {...rest}>
      {children}
    </Container>
  );
};

export default Button;