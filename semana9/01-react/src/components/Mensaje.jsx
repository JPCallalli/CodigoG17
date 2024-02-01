// Ya no es obligarorio en importar React en c/ componente
// En algunas versiones de libreiras como react Native es necesario
// import React from "react";
const Mensaje = (props) => {
    console.log("PROPS: ",props);
    return(
        // estas llaves de html que aparentan ser vacias
        // se conocen como un Fragment
        <>
            <p>
                Mensaje : Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum commodi dolor consequatur sit, non possimus veritatis quos ut molestiae eos saepe dolore soluta dolorum officia. Unde aut sapiente quae?
            </p>
        </>
    )
}

export default Mensaje;