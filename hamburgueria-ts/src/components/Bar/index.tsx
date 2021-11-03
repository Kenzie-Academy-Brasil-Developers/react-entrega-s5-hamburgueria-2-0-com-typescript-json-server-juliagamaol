import logo from '../../images/Mask Group.png'
import search from '../../images/search.svg'
import carrinho from '../../images/carrinho.svg'
import sair from '../../images/sair.svg'

import { Container } from './styles'
import { useHistory } from 'react-router'
import { useCart } from '../../providers/Cart'

interface IBar{
    showCartItems:()=>void
}

export default function Bar({showCartItems}:IBar) {
    const history =useHistory()
    const{cart} = useCart()
    return (
        <Container>
            <div className="bar">
                <img className="logo" src={logo} alt="burguerkenzie" />

                <nav>
                    <div className="cart">
                        <span>{cart.length}</span>
                        <img src={carrinho} alt="carrinho" onClick={()=>showCartItems()}/>
                    </div>
                    <div className="logout">
                        
                    </div>
                    <img className="logout" src={sair} alt="sair" onClick={()=>history.push('/')}/>
                </nav>
            </div>
        </Container>
    )
}
