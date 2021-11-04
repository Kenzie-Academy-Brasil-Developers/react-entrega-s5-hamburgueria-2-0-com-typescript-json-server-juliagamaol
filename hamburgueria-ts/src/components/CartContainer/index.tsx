import { AiOutlineCloseCircle } from "react-icons/ai";
import { useCart } from '../../providers/Cart'
import Launchs from "../Launchs";
import { Container, Content } from "./styles";
import Button from '../Button'

interface ICartContainer{
    showCartItems:()=>void
}
interface LaunchData{
    title: string;
    type: string;
    price: number;
    image: string;
    userId:number
    id:number
    
}
export default function CartContainer({showCartItems}:ICartContainer) {
    const{cart,removeAll} = useCart()
    
    return (
        <Container>
            {
                <Content>
                    <div className="header">
                        <div className="header__title">
                            <h3>Carrinho de compras</h3>
                        </div>
                        <AiOutlineCloseCircle style={{cursor:"pointer"}} onClick={()=>showCartItems()}/>
                    </div>

                    <div className="cart">
                        {cart.map((item,index)=>(
                            <Launchs item={item as LaunchData} key={index}/>
                        ))}
                    </div>
                    
                    {cart.length > 0 ? (
                    <div className="tot">
                        <span>Total</span>
                        <span>
                            {cart.reduce((acc,tot)=>acc + tot.price,0)
                            .toLocaleString('pt-BR',{
                                style:'currency',
                                currency:'BRL'
                            })}
                        </span>

                        <div className="removeAll">
                            <Button colorToChange={false} onClick={()=>removeAll()}>Remover todos</Button>
                        </div>
                    </div>

                    

                    ):(
                        <div className="aviso">
                            <h2>Sua sacola está vazia</h2>
                            <span>Adicione itens</span>
                        </div>
                    )}
                </Content>
            }
        </Container>
    )
}
