import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import {History} from 'history'
import toast from "react-hot-toast";

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
    Logout:(history:History)=>void 
    signIn:(userData:User, history:History) => void
    signUp:(userData:UserRegister,history:History) => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)
export const AuthProvider = ({children}:AuthProviderProps) =>{
    
    const[authToken, setAuthToken] = useState(
        ()=>localStorage.getItem("token") || ""
    )
    const[id, setId] = useState<string>(()=>localStorage.getItem("@id") || "")
    
    const signUp = (userData:UserRegister,history:History) =>{
        axios.post("https://api-hamburgueria2.herokuapp.com/register",userData)
        .then(()=>{
            toast.success("Conta criada com sucesso")
            history.push("/dashboard")
        })
        .catch(()=>{
            toast.error("Erro ao criar conta")
        })
    }

    const signIn = (userData:User,history:History) =>{
        axios.post("https://api-hamburgueria2.herokuapp.com/login",userData)
        .then(response=>{
            localStorage.setItem("token",response.data.accessToken)
            setAuthToken(response.data.accessToken)
            localStorage.setItem("@id",response.data.user.id)
            setId(response.data.user.id)
            toast.success(`Bem vindo de volta ${response.data.user.name}`)
            history.push('/dashboard')
            
        })
        .catch((err)=>toast.error("E-mail ou senha inválidos"))
    }
    
    const Logout = (history:History) =>{
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