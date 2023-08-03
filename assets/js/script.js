//-------Cria a Estrutura da Janela Modal para Imagens-------\\

/*
<figure class="image-modal" style="display: grid;">
    <span class="image-modal-close">&times;</span>
    <img class="image-modal-content">
    <figcaption class="image-modal-caption"></figcaption>
</figure>
*/

function createElement(element, classList=false, content=false) {
    x = document.createElement(element);
    if (classList) x.classList.add(classList);
    if (content)   x.innerHTML = content;
    return x;
}

const main = document.getElementsByTagName("main")[0];

const imageModal = createElement("figure", "image-modal");
const close = createElement("span", "image-modal-close", "&times;");
const img01 = createElement("img", "image-modal-content");
const caption = createElement("figcaption", "image-modal-caption");

imageModal.appendChild(close);
imageModal.appendChild(img01);
imageModal.appendChild(caption);

//-------Cria a Estrutura da Janela Modal para Imagens-------\\



//-------Define uma Janela Modal para Imagens-------\\

const figureImageEquilibrium = document.getElementById("image-equilibrium");

figureImageEquilibrium.onclick = function(){
    main.appendChild(imageModal);
    configImageModal("./assets/images/image-equilibrium.jpg", "Equilibrium #3429");
}


function configImageModal(img, figcaption="") {
    imageModal.style = "display: grid;";
    img01.src = img;
    caption.innerHTML = figcaption;
}

close.onclick = function(){
    main.removeChild(imageModal);
}

//-------Define uma Janela Modal para Imagens-------\\