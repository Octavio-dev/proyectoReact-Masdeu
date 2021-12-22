import React,{useState} from "react";

//semantic
import { Loader } from "semantic-ui-react";

//css
import "./Formulario.css"

//components
import MensajeCompra from "../../components/MensajeCompra/MensajeCompra";

//firebase
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"

const initialState = {
    nombre:"",
    apellido:"",
    email: "",
    contraseña:"" 
}

const Formulario = () => {

    const [usuarios, setUsuarios] = useState(initialState)
    const [idCompra, setIdCompra] = useState("")
    const [cargando, setCargando] = useState(false)

    const change = (e) => {
        const {name,value} = e.target
        setUsuarios({...usuarios, [name]:value})
    }

    const submit = async (e) => {
        setCargando(true)
        e.preventDefault()

        const docRef = await addDoc(collection(db,"compras"),{
            usuarios
        })

        setIdCompra(docRef)
        setTimeout(() => {
            setCargando(false)
        }, 1000)
    }

    return(
        <div>
            <h3 className="finalizar">completa tus datos para finalizar la compra</h3>

        <form onSubmit={submit} className="formulario">
            <input 
                placeholder="nombre" 
                name="nombre" 
                value={usuarios.nombre}
                onChange={change}
            />
            <input
                placeholder="apellido" 
                name="apellido" 
                value={usuarios.apellido}
                onChange={change}
            />
            <input 
                placeholder="Email" 
                name="email" 
                value={usuarios.email} 
                onChange={change}
            />
            <input 
                type="password"
                placeholder="contraseña" 
                name="contraseña" 
                value={usuarios.contraseña} 
                onChange={change}
            />
            <button>enviar</button>
            {cargando ?(
                <Loader active inverted/>
            ) : (
                idCompra.id && (
                    < MensajeCompra id={idCompra} values = {usuarios}/>
                )
            )}
        </form>
        </div>
    )
}

export default Formulario