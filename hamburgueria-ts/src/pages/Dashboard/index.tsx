import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Bar from '../../components/Bar'
import Card from '../../components/Card'
import CartContainer from '../../components/CartContainer'
import { FoodsAndDrinksContext } from '../../providers/FoodsAndDrinks'
import { Container } from './styles'

export default function Dashboard() {
    const {launchs} = useContext(FoodsAndDrinksContext)
    const [showCart,setShowCart] = useState(false)

    const showCartItems = () =>{
        setShowCart(!showCart)
    }
    return (
        <div>
            <Bar showCartItems={showCartItems}/>
            <Container>
                {launchs.map((card,index)=>{
                    return <Card key={index} card={card as any}/>
                })}
            </Container>
            {showCart && <CartContainer showCartItems={showCartItems}/>}
        </div>
    )
}
