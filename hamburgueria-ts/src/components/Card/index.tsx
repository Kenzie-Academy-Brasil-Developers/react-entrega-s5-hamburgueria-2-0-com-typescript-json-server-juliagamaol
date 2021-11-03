import { useCart } from '../../providers/Cart'
import Button from '../Button'
import { Container } from './styles'

interface CardData{
    title: string;
    type: string;
    price: number;
    image: string;
    total:number
}

interface CardProps{
    card:CardData
}

export default function Card({card}:CardProps) {
    const {addProduct} = useCart()
    return (
        <Container>
            <div className="image">
                <img src={card.image} alt={card.title} />
            </div>

            <div className="infoOfProduct">
                <h3>{card.title}</h3>
                <p>{card.type}</p>
                <h5>{card.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</h5>
                <div>
                    <Button onClick={()=>{addProduct({...card,total:card.price})}} colorToChange>Adicionar</Button>
                </div>
            </div>
        </Container>
    )
}
