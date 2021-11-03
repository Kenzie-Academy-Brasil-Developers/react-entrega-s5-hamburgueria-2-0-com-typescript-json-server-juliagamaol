import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from 'react-router'
import Input from '../../components/Input'
import { Container } from './styles'
import shoopinbag from '../../images/shopping-bag.svg'
import logo from '../../images/Mask Group.png'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/Auth'

interface UserData{
    name:string
    email:string 
    password:string
    confirmPassword:string 
}

export default function SignUp() {
    const{signUp} = useAuth()
    const schema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("Email inválido"),
        password: yup
        .string()
        .required("Senha obrigatória")
        .min(8, "A senha deve ter pelo menos 8 caracteres"),
        
    });

    const{register,handleSubmit,formState:{errors}} = useForm<UserData>({
        resolver:yupResolver(schema)
    })
    const handleClick = (userData: UserData) => {
        signUp(userData);
    };
    return (
        <Container>
            <form onSubmit={handleSubmit(handleClick)}>
                <div>
                    <h3>Cadastro</h3>
                    <Link to="/">Retornar para o login</Link>
                </div>
                <Input 
                register={register}
                name="name"
                placeholder="Seu nome"
                error={errors.name?.message}
                />
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
                <Input 
                register={register}
                name="confirmPassword"
                type="password" placeholder="Confirme sua senha"
                error={errors.confirmPassword?.message}/>
                <Button type="submit" colorToChange={false}>Cadastrar</Button>
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
