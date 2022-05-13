let tipsAccordion = [

    {
        id:1,
        title: "¿Cómo mantengo mi pan por largo tiempo?",
        text: "Lo primero que debemos saber es que el proceso del pan más allá de el añejo es La Fermentación y estas cosas son totalmente diferente. Explico brevemente, cuando un pan se compra en la panadería tiene dos factores, el primero es el tiempo con el que se hizo y el segundo es la cantidad de levadura que se usó para hacer el pan.<br><br>El tiempo va a influir en la dureza del pan, por eso hay panes que aunque nosotros los compremos el día anterior, al día siguiente están súper duros. Por ese tiempo que tienen de haberse hecho. Ahora; La Fermentación es un proceso normal que ocurre, ya que la levadura es un microbio sano que ayuda al proceso de levado del pan, pero este no muere al momento en que se cocina, por el contrario, sigue su proceso de fermentación y aquí nos encontramos con dos cosas: Un pan súper ácido y un pan con manchas blancas, sí estas manchas blancas es moho, pero, no se me preocupen para esto siempre hay solución.",
    },

    {
        id:2,
        title:"¿Cómo queremos evitar que tu pan se dañe, te daremos unos cuantos pasos para evitar esto?",
        text: "Lo primero que debemos saber es que el proceso del pan más allá de el añejo es La Fermentación y estas cosas son totalmente diferente. Explico brevemente, cuando un pan se compra en la panadería tiene dos factores, el primero es el tiempo con el que se hizo y el segundo es la cantidad de levadura que se usó para hacer el pan.<br><br>El tiempo va a influir en la dureza del pan, por eso hay panes que aunque nosotros los compremos el día anterior, al día siguiente están súper duros. Por ese tiempo que tienen de haberse hecho. Ahora; La Fermentación es un proceso normal que ocurre, ya que la levadura es un microbio sano que ayuda al proceso de levado del pan, pero este no muere al momento en que se cocina, por el contrario, sigue su proceso de fermentación y aquí nos encontramos con dos cosas: Un pan súper ácido y un pan con manchas blancas, sí estas manchas blancas es moho, pero, no se me preocupen para esto siempre hay solución.",
    }


]


function renderAcordeon(arrayProductos) {

    const accordionContainer = document.getElementById("consejos")
    accordionContainer.innerHTML = ''

    arrayProductos.forEach(elementoDelArray => {
        accordionContainer.innerHTML += ` 
        <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ${elementoDelArray.title}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body text_acordion">
                            <p>
                                ${elementoDelArray.text}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ${elementoDelArray.title}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body text_acordion">
                            <p>
                                ${elementoDelArray.text}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>`;
    });
}

renderAcordeon(tipsAccordion)