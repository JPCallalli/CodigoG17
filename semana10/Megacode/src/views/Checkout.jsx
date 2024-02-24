import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Container from "../components/Container";
import ListProducts from "../components/ListProducts";



export default function Checkout() {

    const {cart, totalCart} = useContext(CartContext);
    console.log(cart, totalCart);
    // donde tengo los datos, -> Context
    // como lso obtengo -> useContext
    // al obtenerlos los datos estan de la forma que necesito? -> yes
    // como los debo mostrar -> como una lista, pero vamos ponerlo en una lista
  return (
    <Container>
        <h1>Checkout</h1>
        <div>
            <div>
                <ListProducts products={cart} />
            </div>
        </div>
    </Container>
  )
}
