import { createContext, ReactNode, useEffect, useState } from "react";
import axios from 'axios'

interface FoodsAndDrinksProps {
    children: ReactNode
}

interface FoodsAndDrinksData{
    title: string;
    type: string;
    price: number;
    image: string;
}

interface FoodsAndDrinksProviderData{
    launchs:FoodsAndDrinksData[]
    getLaunchs:(launchs:string)=>void
}

export const FoodsAndDrinksContext = createContext<FoodsAndDrinksProviderData>({} as FoodsAndDrinksProviderData)

export const FoodsAndDrinksProvider = ({children}:FoodsAndDrinksProps) =>{
    const [launchs, setLaunchs] = useState<FoodsAndDrinksData[]>([] as FoodsAndDrinksData[])

    const getLaunchs = () =>{
        axios
        .get("https://api-hamburgueria2.herokuapp.com/foodsAndDrinks")
        .then(response=>setLaunchs(response.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getLaunchs()
    },[])
    return(
        <FoodsAndDrinksContext.Provider value={{launchs,getLaunchs}}>
            {children}
        </FoodsAndDrinksContext.Provider>
    )
}
