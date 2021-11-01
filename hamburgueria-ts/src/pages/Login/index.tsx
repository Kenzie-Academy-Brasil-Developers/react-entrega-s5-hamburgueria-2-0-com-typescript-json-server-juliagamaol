import { useHistory } from 'react-router'
import { Background, Container,Form } from './styles'
export default function Login() {
    const history = useHistory()
    return (
        <Container>
            <Form>
                <Background />
                <form>
                    <div className="login">
                        <h3>Login</h3>
                    </div>

                    <Input 
                    register={register}
                    name="email"
                    label="E-mail"
                    placeholder="Digite seu email"
                    error={errors.email?.message }
                    />
                    <Input 
                    register={register}
                    name="email"
                    label="E-mail"
                    placeholder="Digite seu email"
                    error={errors.email?.message }
                    />
                    <Button type="submit">Logar</Button>
                    <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                    <Button onClick={()=>history.push('/signup')}>Cadastrar</Button>
                </form>
            </Form>
        </Container>
    )
}
