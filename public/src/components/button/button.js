class buttonlike extends HTMLElement(){
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        return ["message"]
    }
    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue
        this.Mount();
    }
    connectedCallback(){
        this.Mount();
    }
    Mount(){
    this.Mount();
    this.addListener();
}

addListener (){
    this.shadowRoot.querySelector("button");
    addEventListener("click",this.onButtonclicked);
}

render (){
    this.onButtonclicked = this.onButtonclicked.bind(this);
    this.shadowRoot.innerHTML = `
    <section>
        <p>${this.message}</p>
        <button>cambiar</button>
    </section>
    `
}
conButtonclicked(){
    const currentValue = this.getAtribute("message");
    this.setAttribute ("message","¡Listo!"); 
}
}

customElements.define("my-button", buttonlike);
export default buttonlike; 