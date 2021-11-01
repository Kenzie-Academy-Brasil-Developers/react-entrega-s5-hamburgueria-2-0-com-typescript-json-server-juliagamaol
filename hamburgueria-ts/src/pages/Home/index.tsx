import { FiShoppingBag } from "react-icons/fi";
import { useHistory } from 'react-router'
import { Container, Content } from "./styles";

export default function Home() {
    const history = useHistory()
    return (
        <Container>
            <Content>
                <div className="title">
                    <h1>Burguer <span>Kenzie</span></h1>
                </div>
                <section className="info">
                    <div className="icone">
                        <FiShoppingBag/>
                    </div>

                    <div className="text">
                        <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong>ingredientes.</p>
                    </div>
                </section>

                <div>
                    <Button onClick={()=>history.push('/login')}>Logar</Button>
                    <Button onClick={()=>history.push('/signup')}>Cadastrar</Button>
                </div>
            </Content>
        </Container>
    )
}
