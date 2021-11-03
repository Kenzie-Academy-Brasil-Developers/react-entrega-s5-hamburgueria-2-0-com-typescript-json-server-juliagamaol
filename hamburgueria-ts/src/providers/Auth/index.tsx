import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-hot-toast";

interface AuthProviderProps{
    children:ReactNode
}

interface User{
    email:string 
    password:string
}

interface UserRegister{
    name:string
    email:string 
    password:string
}


interface AuthProviderData{
    authToken:string 
    id:string
    Logout:()=>void 
    signIn:(userData:User) => void
    signUp:(userData:UserRegister) => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)
export const AuthProvider = ({children}:AuthProviderProps) =>{
    
    const history = useHistory()
    const[authToken, setAuthToken] = useState(
        ()=>localStorage.getItem("token") || ""
    )
    const[id, setId] = useState<string>(()=>localStorage.getItem("@id") || "")
    
    const signUp = (userData:UserRegister) =>{
        axios.post("https://api-hamburgueria2.herokuapp.com/register",userData)
        .then(response=>{
            localStorage.setItem("token",response.data.accessToken)
            setAuthToken(response.data.accessToken)
            localStorage.setItem("@id",response.data.user.id)
            setId(response.data.id)
            history.push('/')
            toast.success('Conta criada com sucesso')
        })
        .catch(()=>toast.error('E-mail já cadastrado'))
    }

    const signIn = (userData:User) =>{
        axios.post("https://api-hamburgueria2.herokuapp.com/login",userData)
        .then(response=>{
            localStorage.setItem("token",response.data.accessToken)
            setAuthToken(response.data.accessToken)
            localStorage.setItem("@id",response.data.user.id)
            setId(response.data.id)
            history.push('/dashboard')
            toast.success('Bem vindo de volta')
        })
        .catch(()=>toast.error('Email ou senha inválidos'))
    }

    const Logout = () =>{
        localStorage.clear()
        setAuthToken("")
        history.push("/")
    }

    return(
        <AuthContext.Provider value={{authToken,Logout,signIn,signUp,id}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)