import { useHistory } from 'react-router'
import Input from '../../components/Input'
import { Container } from './styles'
import shoopinbag from '../../images/shopping-bag.svg'
import logo from '../../images/Mask Group.png'
import Button from '../../components/Button'
export default function Login() {
    const history = useHistory()
    return (
        <Container>
            <form>
                <h3>Login</h3>

                <Input placeholder="Seu email"/>
                <Input type="password" placeholder="Sua senha"/>
                <Button colorToChange>Logar</Button>
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <Button onClick= {()=>history.push('/signup')} colorToChange={false}>Cadastrar</Button>
            </form>

                <section className="about">
                    <div className="about__logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="about__text">
                        <div className="about__text--icon">
                            <img src={shoopinbag} alt="icon" />
                        </div>

                            <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores </span>ingredientes.</p>
                    </div>
                </section>
        </Container>
    )
}
