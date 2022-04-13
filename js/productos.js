import { stockProductos } from "./data/stockProductos.js";



const cards = document.getElementById("cardsContainer");

 const renderCards = (array) => {
            cards.innerHTML = ""

            array.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('prod-card', 'm-2', 'd-flex', 'flex-column',)
                div.innerHTML += `
                            <img src="${producto.img}" class="card-img-standard my-2" alt="">
                            <div class="card-info">
                                <h5 class="card-title-standard">${producto.name}</h5>
                                <p class="card-text-standard ">${producto.desc}</p>  
                            </div>
                            <button id="${producto.id}" class="btn btn-standard m-1 mt-4 text-dark ">Realizar mi pedido</button>
                    `
        cards.appendChild(div)



    });
 }

renderCards(stockProductos)