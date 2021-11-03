
import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { FoodsAndDrinksProvider } from "./FoodsAndDrinks";

interface props {
  children: ReactNode;
}

const Providers = ({ children }: props) => {
  return (
    <AuthProvider>
      <FoodsAndDrinksProvider>
        <CartProvider>{children}</CartProvider>
      </FoodsAndDrinksProvider>
    </AuthProvider>
  );
};

export default Providers;
