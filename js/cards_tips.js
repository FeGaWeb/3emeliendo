let productosGenerales = [

    {
        id: "Golfeado",
        title: "Golfeados",
        img: "../img/Golfeados/golfeado.png",
        descripcion: "Si tuviéramos que definir al golfeado, te diríamos que consiste en una masa suave y gomosa presentada con forma de caracol, saturada de papelón con dos tipos de queso y anís. ¡¿Muy antojable, no?!. El golfeado es primo lejano de los bollos de Chelsea y los roles de canela, pero aún mejor, porque combina esos sabores dulces.<br><br>Según la tradición popular el nombre de “golfiao” o “golfeado” nació hace más de un siglo en la hacienda cafetera “El Hoyo de las Tapias”, que surtía de café a Caracas. Al café le nace una semilla en forma de caracol y a ésta los campesinos la llamaban “golfiao”. Deducen que alguien, al ver este pastel, le dijo a la señora María Duarte “deme eso que parece un golfiao”.<br><br>https://www.latiendavenezolana.com<br><br>",
    },

    {
        id: "Pan de Jamón",
        title: "Pan de Jamón",
        img: "../img/Pan_de_Jamón/pan_de_jamon.jpg",
        descripcion: "Desde hace un siglo, el pan de jamón no puede faltar en la mesa navideña de una familia venezolana. Y ahora, cuando casi tres millones de venezolanos están fuera de su país, este plato se ha convertido en una comida que los conecta con su tierra. Especialmente en esta época del año en la que muchos estarán lejos de casa por primera vez. <br><br> ¿De dónde viene el pan de jamón? Según el periodista gastronómico venezolano Miro Popié, autor de El nuevo libro del pan de jamón, la receta se inventó en 1905 en la panadería Ramella, en Caracas.<br><br>https://migravenezuela.com/web/articulo/pan-de-jamon-receta-del-plato-tipico-de-la-navidad-venezolana/808  <br><br>",
    },

    {
        id: "Pan 3eme",
        title: "Pan 3eme",
        img: "../img/Pan/pan.jpg",
        descripcion: "El golfeado es un postre característico de Venezuela, tiene forma cuadrada o circular, se puede parecer al caparazón de un caracol por la forma en la que es cortado, tiene como base: <br><br> Masa dulce con anís en pepitas.<br> Relleno de papelón (chancaca), queso, anís y azúcar. <br><br> Es un postre que tamaño individual, se entrega en su presentación por cantidad sobre un papel antiadherente, en bolsa de celofán o cajas y en su presentación individual en bolsas de celofán.",
    },

    {
        id: "Cachitos",
        title: "Cachitos",
        img: "../img/Cachitos/cachito_card.webp",
        descripcion: "No existe un registro que defina cuál es el verdadero origen del Cachito de Jamón. La versión más difundida es la del hecho de que fue producto de la invención de inmigrantes portugueses en la Venezuela de principios del siglo XX, cuando el país suramericano era uno de los principales puntos de llegada para españoles, portugueses e italiano.<br><br>El cachito a pesar de que han pasado muchos años desde su creación este es el típico desayuno que no pasa de moda. Y muchos venezolanos que han emigrado a distintas latitudes buscan este clásico en cualquier lugar donde residan.<br><br>https://www.la-cachiterie.com/historia-del-cachito-de-jamon/ <br><br>",
    },

    {
        id: "Pan de guayaba",
        title: "Pan de guayaba",
        img: "../img/Pan_de_guayaba/pan-de-guayaba.webp",
        descripcion: "En la actualidad no se conoce a ciencia cierta la época en la que se comenzó a vender el pan de guayaba en la región andina venezolana, sin embargo, este mismo migró y también se le puede conseguir en diferentes partes del país. <br><br>El Pan de guayaba es considerado un pan dulce típico de la región andina de Venezuela. Consiste en un pan relleno con pulpa de guayaba y azúcar. Puede venir de distintas formas: empanadas, pan enrollado, corona o de diferentes formas provenientes de la creatividad de quien las hace. <br><br>https://comidasvenezolanas.com/pan-de-guayaba/ <br><br>",
    },

    {
        id: "Donas",
        title: "Donas",
        img: "../img/Donas/dona_blanca.webp",
        descripcion: "Las donas son postres tamaño individual, que puede tener diferentes formas, circulares en su mayoría con un circulo en el medio, éstas pueden ser con diferentes toppings, tiene como base:<br><br> Una masa dulce.<br> Topping de chocolate.<br> Extra de gotas o lluvia de chocolate. ",
    },

]


function renderProductos(arrayProductos) {

    const cardsContenedora = document.getElementById("tips")
    cardsContenedora.innerHTML = ''

    arrayProductos.forEach(elementoDelArray => {
        cardsContenedora.innerHTML += ` 
        <div class="card">
            <img src="${elementoDelArray.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${elementoDelArray.title}</h3>
          <p class="card-text">${elementoDelArray.descripcion}</p>
        </div>
      </div>
        `;
    });
}

renderProductos(productosGenerales)



//<div class="card_tips--item">
//
//<div class="card-tips--img">
//<img src="${elementoDelArray.img}" alt="">
//</div>
//
//<div class="card-tips--description">
//<h3>${elementoDelArray.title}</h3>
//<p>
//${elementoDelArray.descripcion}
//</p>
//
//</div>
//</div>