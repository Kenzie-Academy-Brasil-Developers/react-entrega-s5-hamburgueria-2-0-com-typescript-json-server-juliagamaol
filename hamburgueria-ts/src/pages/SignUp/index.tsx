import { useHistory } from 'react-router'
import Input from '../../components/Input'
import { Container } from './styles'
import shoopinbag from '../../images/shopping-bag.svg'
import logo from '../../images/Mask Group.png'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <Container>
            <form>
                <div>
                    <h3>Cadastro</h3>
                    <Link to="/">Retornar para o login</Link>
                </div>
                <Input placeholder="Seu nome"/>
                <Input placeholder="Seu email"/>
                <Input type="password" placeholder="Sua senha"/>
                <Input type="password" placeholder="Confirme sua senha"/>
                <Button colorToChange={false}>Cadastrar</Button>
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
