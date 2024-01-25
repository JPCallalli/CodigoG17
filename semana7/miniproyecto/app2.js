let platosPeruanos = [
    {
      id: 1,
      nombre: 'Ceviche',
      descripcion: 'Pescado fresco marinado en limón con cebolla, ají y cilantro.',
      precio: 25.99,
      imagen: 'ceviche.jpg'
    },
    {
      id: 2,
      nombre: 'Lomo Saltado',
      descripcion: 'Trozos de carne salteados con cebolla, tomate, ají y acompañados de papas fritas.',
      precio: 30.50,
      imagen: 'lomo_saltado.jpg'
    },
    {
      id: 3,
      nombre: 'Aji de Gallina',
      descripcion: 'Pollo deshilachado en una salsa cremosa de ají amarillo, servido con arroz y papas.',
      precio: 22.75,
      imagen: 'aji_de_gallina.jpg'
    },
    {
      id: 4,
      nombre: 'Anticuchos',
      descripcion: 'Brochetas de corazón de res marinadas en ají panca y acompañadas de papa y choclo.',
      precio: 18.90,
      imagen: 'anticuchos.jpg'
    },
    {
      id: 5,
      nombre: 'Rocoto Relleno',
      descripcion: 'Rocoto relleno con carne molida, papas y queso gratinado.',
      precio: 28.75,
      imagen: 'rocoto_relleno.jpg'
    },
    {
      id: 6,
      nombre: 'Seco de Cordero',
      descripcion: 'Estofado de cordero con cilantro, acompañado de frejoles y arroz.',
      precio: 35.25,
      imagen: 'seco_de_cordero.jpg'
    },
    {
      id: 7,
      nombre: 'Tiradito',
      descripcion: 'Pescado cortado en tiras finas con salsa de ají amarillo y limón.',
      precio: 26.50,
      imagen: 'tiradito.jpg'
    },
    {
      id: 8,
      nombre: 'Tacu Tacu',
      descripcion: 'Arroz y frijoles mezclados y luego fritos, acompañados de salsa criolla y carne.',
      precio: 20.99,
      imagen: 'tacu_tacu.jpg'
    },
    {
      id: 9,
      nombre: 'Papa a la Huancaína',
      descripcion: 'Papas cocidas en rodajas con salsa de queso, ají amarillo y lechuga.',
      precio: 16.80,
      imagen: 'papa_a_la_huancaina.jpg'
    },
    {
      id: 10,
      nombre: 'Chaufa de Mariscos',
      descripcion: 'Arroz frito con mariscos, verduras y salsa de soja al estilo chino-peruano.',
      precio: 32.00,
      imagen: 'chaufa_de_mariscos.jpg'
    },
    {
      id: 11,
      nombre: 'Arroz con Pollo',
      descripcion: 'Arroz cocido con pollo en una deliciosa salsa de ají amarillo y cerveza.',
      precio: 24.50,
      imagen: 'arroz_con_pollo.jpg'
    },
    {
      id: 12,
      nombre: 'Mazamorra Morada',
      descripcion: 'Postre peruano a base de maíz morado, frutas y camote.',
      precio: 12.75,
      imagen: 'mazamorra_morada.jpg'
    },
    {
      id: 13,
      nombre: 'Chupe de Camarones',
      descripcion: 'Sopa espesa con camarones, papa, huevo, arroz y leche.',
      precio: 29.90,
      imagen: 'chupe_de_camarones.jpg'
    },
    {
      id: 14,
      nombre: 'Parihuela',
      descripcion: 'Sopa de pescado y mariscos con verduras, cilantro y yuca.',
      precio: 34.25,
      imagen: 'parihuela.jpg'
    },
    {
      id: 15,
      nombre: 'Causa Limeña',
      descripcion: 'Capas de puré de papa amarilla con ají, rellenas de pollo, atún o mariscos.',
      precio: 19.50,
      imagen: 'causa_limena.jpg'
    },
    {
      id: 16,
      nombre: 'Picarones',
      descripcion: 'Rosquillas de masa de zapallo y camote, fritas y bañadas en miel de chancaca.',
      precio: 14.80,
      imagen: 'picarones.jpg'
    },
    {
      id: 17,
      nombre: 'Butifarra',
      descripcion: 'Sandwich de jamón de cerdo ahumado con salsa criolla en pan francés.',
      precio: 15.25,
      imagen: 'butifarra.jpg'
    },
    {
      id: 18,
      nombre: 'Humitas',
      descripcion: 'Masa de maíz rellena de carne, envuelta en hojas de maíz y cocida al vapor.',
      precio: 17.50,
      imagen: 'humitas.jpg'
    },
    {
      id: 19,
      nombre: 'Tamal',
      descripcion: 'Masa de maíz rellena de carne, envuelta en hojas de plátano y cocida al vapor.',
      precio: 16.90,
      imagen: 'tamal.jpg'
    },
    {
      id: 20,
      nombre: 'Helado de Lucuma',
      descripcion: 'Helado hecho con la fruta peruana llamada lucuma, con un sabor único y delicioso.',
      precio: 12.50,
      imagen: 'helado_de_lucuma.jpg'
    },
  ];

  let platosSection = document.getElementById("platos");
  let boletaSection = document.getElementById("boleta");

  let carritoCompras = [];
 
 function encontrarPlato(id){
  let idNumber = parseInt(id);
  let platoEncontrado = platosPeruanos.find(function(plato){
    return plato.id === idNumber;
  })
  return platoEncontrado;
 }
 
  function modificarCarrito(plato, operacion){
    let platoExiste = carritoCompras.findIndex(function(item){
      return item.id === plato.id;
    })

    if(platoExiste === -1){
      plato.cantidad = 1;
      carritoCompras.push(plato);
    }else{
      if(operacion === "incrementar"){  
        carritoCompras[platoExiste].cantidad++;
      }
      if(operacion === "disminuir"){  
        if(carritoCompras[platoExiste].cantidad === 0){
          return;
        }
        carritoCompras[platoExiste].cantidad--;
      }
    }
    crearBoleta(carritoCompras);
  }

  function crearCartasComida(listaPlatos){
    let arrCartas =[];
    for(let plato of listaPlatos){
        let cartaComida = document.createElement("div");
        cartaComida.classList.add("col-lg-3");
        cartaComida.classList.add("col-12");
        cartaComida.innerHTML=`
        <div class="card mb-3">
            <img src="https://picsum.photos/300" class="card-img-top" alt="${plato.nombre}">
            <div class="card-body">
              <h5 class="card-title">${plato.nombre}</h5>
              <p class="card-text">${plato.descripcion}</p>
              <p class="fs-6">S/ ${plato.precio}</p>
              <button class="btn btn-primary" data-id="${plato.id}">Ordenar</button>
          </div>
      </div>
        `;
        let btnOrdenar = cartaComida.querySelector("[data-id]");
        btnOrdenar.addEventListener("click", function(evento){
          let platoObtenido = encontrarPlato(evento.target.dataset.id);
          modificarCarrito(platoObtenido, "incrementar");
          console.table(carritoCompras);
        })

        arrCartas.push(cartaComida);
    }
    return arrCartas;
  }

 

  function crearBoleta (carrito){
    boletaSection.innerHTML = "";
    carrito.forEach(function(plato){
      let platoBoleta = document.createElement("div");
      platoBoleta.classList.add("d-flex");
      platoBoleta.classList.add("p-3");
      platoBoleta.classList.add("border");
      platoBoleta.classList.add("round");
      platoBoleta.classList.add("mb-3");
      platoBoleta.innerHTML = `
        <img src="https://picsum.photos/300" class="w-25 rounded me-3" alt="${plato.nombre}" />
        <div>
          <h5 class="text-primary fw-bold">${plato.nombre}</h5>
          <p>S/ ${plato.precio}</p>
          <div>
            <button class="btn btn-primary btn-sm" data-operacion="disminuir"> - </button>
            <span>${plato.cantidad}</span>
            <button class="btn btn-primary btn-sm" data-operacion="incrementar"> + </button>
          </div>
        </div>
      `;
      let btnDisminuir = platoBoleta.querySelector("[data-operacion='disminuir']");
      btnDisminuir.addEventListener("click", function(){
        modificarCarrito(plato, "disminuir");
      })
      let btnIncrementar = platoBoleta.querySelector("[data-operacion='incrementar']");
      btnIncrementar.addEventListener("click", function(){
        modificarCarrito(plato, "incrementar");
      })
      boletaSection.appendChild(platoBoleta);
    });
     
    let resumenBoleta = document.createElement("div");
    let total = carrito.reduce(function(acum, item){
      return acum + (item.precio * item.cantidad)
    },0);
    resumenBoleta.innerHTML=`
    <table class="table table-dark table-striped">
      <tbody>
        <tr>
          <td>IGV:</td>
          <td>S/ ${(total * 0.18).toFixed(2)}</td>
        </tr>
        <tr>
        <td>TOTAL:</td>
        <td>S/ ${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    `;
    boletaSection.appendChild(resumenBoleta);
  }

  let platosCreados = crearCartasComida(platosPeruanos);
  platosCreados.forEach(function(carta){
    platosSection.appendChild(carta);
  })

