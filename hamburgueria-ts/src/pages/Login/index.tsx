import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from 'react-router'
import Input from '../../components/Input'
import { Container } from './styles'
import shoopinbag from '../../images/shopping-bag.svg'
import logo from '../../images/Mask Group.png'
import Button from '../../components/Button'
import { useAuth } from '../../providers/Auth'


interface UserData{
    email:string
    password:string 
}

export default function Login() {
    const{signIn} = useAuth()
    const history = useHistory()
    const schema = yup.object().shape({
        email:yup.string().required('Campo Obrigatório').email('E-mail inválido'),
        password:yup.string().required('Campo Obrigatório').min(8,'Mínimo 8 caracteres')
    })
    const{register,handleSubmit,formState:{errors}} = useForm<UserData>({
        resolver:yupResolver(schema)
    })
    const handleClick = (userData: UserData) => {
        signIn(userData,history);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(handleClick)}>
                <h3>Login</h3>

                <Input 
                register={register}
                name="email"
                placeholder="Seu email"
                error={errors.email?.message}/>
                
                <Input
                register={register}
                name="password" 
                type="password" 
                placeholder="Sua senha"
                error={errors.password?.message}/>
                <Button  colorToChange>Logar</Button>
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <Button type="submit" onClick= {()=>history.push('/signup')} colorToChange={false}>Cadastrar</Button>
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
