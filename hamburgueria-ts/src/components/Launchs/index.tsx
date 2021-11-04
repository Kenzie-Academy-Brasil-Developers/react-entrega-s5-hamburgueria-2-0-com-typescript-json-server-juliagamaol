import React from 'react'
import { useCart } from '../../providers/Cart'
import trash from  '../../images/trash.svg'
import { Container } from './styles'
interface LaunchData{
    title: string;
    type: string;
    price: number;
    image: string;
    userId:number
    id:number
    
}

interface ILaunchs{
    item:LaunchData
}

export default function Launchs({item}:ILaunchs) {
    const{deleteProduct} = useCart()
    const{image,title,id} = item
    const handleRemove = (productId:number) =>{
        deleteProduct(productId)
    }
   
    return (
        <Container>
            <div className="product">
                <div className="product__image">
                    <img src={image} alt={title} />
                </div>

                <div className="product__description">
                    <h3>{title}</h3>
                    <div className="trash">
                        <img src={trash} alt="lixeira" onClick={()=>handleRemove(id)} style={{cursor:"pointer"}}/>
                    </div>

                </div>
            </div>

        </Container>
    )
}
