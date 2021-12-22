import React,{useState} from "react";

//semantic
import { Loader } from "semantic-ui-react";

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

    const [values, setValues] = useState(initialState)
    const [idCompra, setIdCompra] = useState("")
    const [cargando, setCargando] = useState(false)

    const change = (e) => {
        const {name,value} = e.target
        setValues({...values, [name]:value})
    }

    const submit = async (e) => {
        setCargando(true)
        e.preventDefault()

        const docRef = await addDoc(collection(db,"compras"),{
            values,
        })
        setIdCompra(docRef)
        setTimeout(() => {
            setCargando(false)
        }, 1000)
    }

    return(
        <form onSubmit={submit}>
            <input 
                placeholder="nombre" 
                name="nombre" 
                value={values.nombre}
                onChange={change}
            />
            <input
                placeholder="apellido" 
                name="apellido" 
                value={values.apellido}
                onChange={change}
            />
            <input 
                placeholder="Email" 
                name="email" 
                value={values.email} 
                onChange={change}
            />
            <input 
                type="password"
                placeholder="contraseña" 
                name="contraseña" 
                value={values.contraseña} 
                onChange={change}
            />
            <button>enviar</button>
            {cargando ?(
                <Loader active inverted/>
            ) : (
                idCompra.id && (
                    < MensajeCompra id={idCompra} values = {values}/>
                )
            )}
        </form>
    )
}

export default Formulario