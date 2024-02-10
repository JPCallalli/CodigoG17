import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import swal from "sweetalert2";
import { saveProduct } from "../services/productService";
import { uploadFile } from "../services/storageService";
import SelectColors from "../components/SelectColors";
import Cargando from "../components/Cargando";
import { updateProduct } from "../services/productService";

let imagenProducto;

export default function DetailProduct() {
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        precio:0,
        imagen:"",
        color:[],
        stock:0,
        review:[]
    })

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getProductById(id)
        .then(respuesta => {
            setForm({...respuesta})
        })
        .catch(error => {
            console.log({error})
        })
    },[])

    const[estaCargando, setEstaCargando] = useState(false);

    const navigate= useNavigate();

    const changeForm = (evento) => {
        // console.log("NAME",evento.target.name)
        const copyStateForm = {
            ...form, //Spread Operator
            [evento.target.name]:evento.target.value
        }
        // console.log("COPYSTATEFORM", copyStateForm)
        setForm(copyStateForm)
    }

    const handleImage = (evento) => {
        // console.log("HANDLE IMAGE",evento.target.files)
        imagenProducto = evento.target.files[0]
    }

    const handleCreate = () => {
        setEstaCargando(true)
        // console.log({ form })
        uploadFile(imagenProducto, "Fotos")
        .then(urlImagen => {
            // console.log(respuesta)
            if(!imagenProducto){
            return updateProduct({...form})
            }
            return updateProduct({...form, imagen: urlImagen })
        })
        .then(() => {
            setEstaCargando(false)
            // alert(`Se creó el producto ${form.nombre}`)
            return swal.fire({
                icon: 'success',
                title: 'Producto Actualizado',
                text: `Se Actualizó el producto ${form.nombre}`
            })
        })
        // aqui podriamos capturar el resultado de dar clik al boton de confirmación
        .then(() => {
            // en navigate (indicamos en forma de string a que ruta dedemos ir)
            navigate("/")
        })
        .catch(error => {
            console.log(error);
        })
      }

      const handleColor = (newColor) =>{
        setForm({...form, color:[...form.color, newColor]})
      }

      if(estaCargando) {
        return <Cargando />
      }

    return (
        <main className="container p-4">
            <h2>Actualizar Producto</h2>
            <form>
                <div className="mb-3">
                    <label 
                        className="form-label" 
                        htmlFor="inputNombre">

                        Nombre Producto: 
                    </label>
                    <input 
                        type="text" 
                        placeholder="Camisa Negra"
                        id="inputNombre"
                        className="form-control"
                        value={form.nombre}
                        name="nombre"
                        onChange={(evento) =>{changeForm(evento)}}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        className="form-label" 
                        htmlFor="inputDescripcion">
                        
                        Descripción Producto: 
                    </label>
                    <input 
                        type="text" 
                        placeholder="Camisa Negra de Tela texturada"
                        id="inputDescripcion"
                        className="form-control"
                        value={form.descripcion}
                        name="descripcion"
                        onChange={(evento) =>{changeForm(evento)}}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        className="form-label" 
                        htmlFor="inputPrecio"
                    >
                        Precio producto:
                    </label>
                    <input 
                        type="number"
                        placeholder="100"
                        id="inputPrecio"
                        className="form-control"
                        value={form.precio}
                        name="precio"
                        onChange={(evento) => {changeForm(evento)}}
                    />
                </div>

                <div className="mb-3">
                    <label 
                        className="form-label" 
                        htmlFor="inputImagen"
                    >
                        Imagen a guardar
                    </label>
                    <input 
                        id="inputImagen"
                        type="file"
                        className="form-control"
                        onChange={handleImage}   
                    />
                    <p className="form-text">
                        Actualmente la imagen de este producto es: {form.imagen}
                    </p>
                </div>

                <div className="mb-3">
                    <label 
                        className="form-label" 
                        htmlFor="inputStock"
                    >
                        Stock producto:
                    </label>
                    <input 
                        type="number"
                        placeholder="150"
                        id="inputStock"
                        className="form-control"
                        value={form.stock}
                        name="stock"
                        onChange={(evento) => {changeForm(evento)}}
                    />
                </div>
                <SelectColors colors = {form.color} handleColor={handleColor} />
                <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={handleCreate}
                >
                    Guardar
                </button>
            </form>
        </main>
    )


}
