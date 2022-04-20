import { stockProductos } from "./data/stockProductos.js";



const cards = document.getElementById("cardsContainer");

 const renderCards = (array) => {
            cards.innerHTML = ""

            array.forEach((producto) => {
                const div = document.createElement('div')
                div.classList.add('prod-card-container', 'm-2', 'd-flex', 'flex-column',)
                div.innerHTML += `
                                    <div class="prod-card" style="background-image: url(${producto.img});">
                                        <div class="card-info">
                                            <h5 class="card-title-standard text-light">${producto.name}</h5>
                                            <p class="card-text-standard text-light">${producto.desc}</p>  
                                        </div>
                    
                                    </div>
                                    <a href=${producto.whatsappBtn}>
                                        <button id="${producto.id}" class="btn btn-standard m-1 mt-4 text-dark ">
                                            Realizar mi pedido
                                        </button>
                                    </a>
                                    
                    `
        cards.appendChild(div)



    });
 }

renderCards(stockProductos)