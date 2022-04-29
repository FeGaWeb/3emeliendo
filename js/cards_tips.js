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