import "./App.css"
// cuando importamos algo de JS o JSX, no es necesario agregarle la extensión, si es algo diferente es imperativo.
import Mensaje from "./components/Mensaje"
import Contador from "./components/Contador";
// Un componente no es mas que una función
// El nombre de la funcion que representa el componente 
// 1.el nombre tiene que estar en Mayusculas
function App (){
  const titulo = "Mi primera app";
  //3. Esta función/componente Tiene que retornar un JSX
  return (
    // 4. Solamente podemos retornar un solo elemento de JSX
    <>
      <h1>{titulo}</h1>
      <section>
        <h2 className="red">Holaaaaaaaaaa</h2>
        <Contador />
        {/* Props */}
        <Mensaje propsTitulo={titulo} numero ="1"></Mensaje>
        <Mensaje />
        <Mensaje />
        {/*Siempre que deseemos poner codigo de JS dentro de JSX voy a tener que abrir {} y dentro poner una expresión*/}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quibusdam nesciunt quisquam eum, eligendi laboriosam assumenda, nostrum maiores voluptatum maxime qui distinctio rem temporibus. Rerum eaque cupiditate dolores excepturi magni. Resultado {2 + 2}
        </p>
        <div>
          <label htmlFor="idNombre">Nombre:</label>
          <input type="text" id="idNombre" />
        </div>
      </section>
      {/*Toda etiqueta ya sea de html o de un componente debe estar cerrada o con su etiqueta de cierre */}
      <hr />
      
    </>
  )
}

// 2. exportar esta función
export default App;