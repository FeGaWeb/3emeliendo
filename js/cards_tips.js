let productosGenerales=[

    {
        id:"Golfeado",
        title:"Golfeados",
        img:"../img/Golfeados/golfeado.png",
        descripcion:"El golfeado es un postre característico de Venezuela, tiene forma cuadrada o circular, se puede parecer al caparazón de un caracol por la forma en la que es cortado, tiene como base: <br> Masa dulce con anís en pepitas.<br> Relleno de papelón (chancaca), queso, anís y azúcar. <br> Es un postre que tamaño individual, se entrega en su presentación por cantidad sobre un papel antiadherente, en bolsa de celofán o cajas y en su presentación individual en bolsas de celofán.",
    },

    {
        id:"Pan de Jamón",
        title:"Pan de Jamón",
        img:"../img/Pan_de_Jamón/pan_de_jamon.jpg",
        descripcion:"El pan de jamón es un pan de 40 cm de largo, aproximadamente, tiene como base: <br><br> 400 g de masa salada.<br>300 g de jamón.<br>100 g de tocino.<br>25 g de pasas.<br>25 g de aceitunas.<br><br>Barnizado con un toque de papelón derretido por dentro y huevo batido con azúcar por fuera, es entregado encima de un papel antiadherente dentro de una bolsa de papel celofán, puede encontrarse también en calidad de roll.",
    },

    {
        id:"Pan 3eme",
        title:"Pan 3eme",
        img:"../img/Pan/pan.jpg",
        descripcion:"El golfeado es un postre característico de Venezuela, tiene forma cuadrada o circular, se puede parecer al caparazón de un caracol por la forma en la que es cortado, tiene como base: <br> Masa dulce con anís en pepitas.<br> Relleno de papelón (chancaca), queso, anís y azúcar. <br> Es un postre que tamaño individual, se entrega en su presentación por cantidad sobre un papel antiadherente, en bolsa de celofán o cajas y en su presentación individual en bolsas de celofán.",
    },

    {
        id:"Cachitos",
        title:"Cachitos",
        img:"../img/Cachitos/cachito_card.webp",
        descripcion:"El cachito es un pan tamaño individual, que tiene como base:<br><br> 100 g de una masa semi dulce.<br>50 g de relleno<br><br>Los rellenos pueden variar, en la actualidad contamos con:<br><br>Jamón y tocino.<br>Jamón, tocino y queso crema.<br>Jamón, tocino y queso edam. <br>Chocolate.<br> <br> Se entregan sobre un papel antiadherente dentro de una bolsa de celofán. ",
    },

    {
        id:"Pan de guayaba",
        title:"Pan de guayaba",
        img:"../img/Pan_de_guayaba/pan-de-guayaba.webp",
        descripcion:"El pan de guayaba es un pan dulce que viene relleno de una mermelada de guayaba el cual mide 40 cm aproximadamente, tiene como base:<br><br> 400 g de masa dulce. <br> 300 g de mermelada de guayaba.<br><br> Tiene presentación con queso la cual tendría una base de:<br><br> 400 g de masa dulce. <br> 150 g de queso fresco. <br> 150 g de mermelada de guayaba.<br><br> Este producto también lo podemos encontrar en calidad de roll, su presentación y entrega en este caso es igual a la del golfeado y en el respectivo caso del grande, sobre papel antiadherente en una bolsa de celofán.",
    },

    {
        id:"Donas",
        title:"Donas",
        img:"../img/Donas/dona_blanca.webp",
        descripcion:"Las donas son postres tamaño individual, que puede tener diferentes formas, circulares en su mayoría con un circulo en el medio, éstas pueden ser con diferentes toppings, tiene como base:<br><br> Una masa dulce.<br> Topping de chocolate.<br> Extra de gotas o lluvia de chocolate. ",
    },

]


function renderProductos(arrayProductos) {
    
    const cardsContenedora = document.getElementById("tips")
    cardsContenedora.innerHTML = ''
    
    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` 
         <div class="card_tips--item">

                <div class="card-tips--img">
                    <img src="${elementoDelArray.img}" alt="">
                </div>

                <div class="card-tips--description">
                    <h3>${elementoDelArray.title}</h3>
                    <p>
                        ${elementoDelArray.descripcion}
                    </p>

                </div>
            </div>`;
    });
}

renderProductos(productosGenerales)