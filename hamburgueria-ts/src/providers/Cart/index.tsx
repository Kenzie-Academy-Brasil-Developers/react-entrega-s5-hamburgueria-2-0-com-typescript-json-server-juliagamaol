
import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import {useAuth} from '../Auth/index'
interface CartProviderProps{
    children:ReactNode
}

interface Product {
    title: string;
    type: string;
    price: number;
    image: string;
    userId:number
    id:number;
}

interface CartProviderData{
    getCart: ()=>void
    cart:Product[]
    addProduct: (product:Product) => void
    deleteProduct: (productId:number) => void
}

const CartContext = createContext<CartProviderData>({} as CartProviderData)

export const CartProvider = ({children}:CartProviderProps) =>{
    const{authToken,id} = useAuth()
    const[cart, setCart] = useState<Product[]>([])

    const getCart = () =>{
        axios
            .get("https://api-hamburgueria2.herokuapp.com/cart",{
                headers:{
                    Authorization: `Bearer ${authToken}`
                }
            })
            .then((response)=>{
                setCart(response.data)
            })
            .catch(err=>console.log(err))

    }

    const addProduct = (product:Product) =>{
        const newLanch = {
            "title": product.title,
            "type": product.type,
            "price": product.price,
            "image":product.image,
            "userId":id,
        }
        axios.post("https://api-hamburgueria2.herokuapp.com/cart",newLanch,{
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response=>setCart([...cart,response.data]))
        
        .catch(err=>console.log(err))
        console.log(cart)
    }

    const deleteProduct = (productId:number) =>{
        axios.delete(`https://api-hamburgueria2.herokuapp.com/cart/${productId}`,{
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response=>setCart([]))
        .catch(err=>console.log(err))
    }

    return(
        <CartContext.Provider value={{cart, addProduct,deleteProduct,getCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)