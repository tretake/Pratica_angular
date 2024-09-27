class cardnews extends HTMLElement{
    constructor(){

        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {

        const componentRoot =document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","left_card");
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","right_card");

        

        const credito = document.createElement("span");
        credito.textContent = "By " + this.getAttribute("autor");
        
        const titulo = document.createElement("h1");
        titulo.textContent = this.getAttribute("titulo");
        
        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(credito);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(paragrafo);


        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("img");

        cardRight.appendChild(imagem);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.card{
    width: 80%;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    -webkit-box-shadow: 4px 4px 13px 11px rgba(0,0,0,0.75);
-moz-box-shadow: 4px 4px 13px 11px rgba(0,0,0,0.75);
box-shadow: 4px 4px 13px 11px rgba(0,0,0,0.75);

}

.left_card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.left_card > a{
    margin-top: 15px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
}
.left_card > p{
    color: gray;
}
.left_card > span{
    font-weight: 400;
}`; 
        return style;
}
}

customElements.define('card-news',cardnews);