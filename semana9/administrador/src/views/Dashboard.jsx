import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import ShowColors from "../components/ShowColors"
import { deleteProduct, getProducts } from "../services/productService"
import Swal from "sweetalert2"

export default function Dashboard() {
    const [productos, setProductos] = useState([])
    /**
     * 1. de donde vamos a obtener esos datos
     * 2. esos datos estan en el formato que necesito
     * 2.1 transformarlo
     * 3. mostrar esos datos
     */
   
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Estas seguro de eliminar el producto?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "No, cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                return deleteProduct(id);
            }else  if (result.isDismissed){
                // para detener el flujo del encadenamiento forzamos un error
                throw new Error("No se puede eliminar el producto")
            }
        }).then((rpta) => {
            console.log(rpta)
            return Swal.fire({
                icon: 'success',
                title: 'Producto Eliminado',
            })
        })
         .then(() => {
            // filtra los productos que no coincidan con el id que se quiere eliminar
            return getProducts()
         })
         .then((response) => {
            setProductos(response)
         })
         .catch((err) => {
            console.error(err)
         })
    }

    useEffect(() => {
        getProducts()
        .then((response) => {
            setProductos(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
  return (
    <>
    <div className="container p-4">
        <div className="d-flex justify-content-between py-4">
            <h1>Productos</h1>
            <Link to="/crearproducto">
                <button className="btn btn-dark">
                    Crear Producto
                </button>
            </Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.nombre}</td>
                        <td>{prod.descripcion}</td>
                        <td><ShowColors colors={prod.color} /></td>
                        <td>S/. {prod.precio}</td>
                        <td>{prod.stock}</td>
                        <td>
                            <Link 
                                to={`/producto/${prod.id}`}
                                className="btn btn-primary btn-sml me-2"
                            >
                                <i class="fa-solid fa-pen"></i>
                            </Link>
                            <button className="btn btn-danger btn.sml"
                                    onClick={()=> handleDelete(prod.id)}
                            >
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>    
    </>
  )
}
