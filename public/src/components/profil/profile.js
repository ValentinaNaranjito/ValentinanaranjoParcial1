class myprofile extends HTMLElement {
static get observeAttributes () {
    return []
}
    static get observedAttributes (){
        
        return ["name", "specie", "gender", "house", "year of birth"]
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'}); 
    }
    
    connectedCallback(){
    this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML =
        `
        <section>
        <h1> ${this.name}</h1>
        <p> ${this.specie}</p>
        <p> ${this.gender}</p>
        <p> ${this.house}</p>
        <p> ${this.yearofbirth}</p> 
        <link rel="stylesheet" href="./src/components/profile/profile.css">
        </section> 
        `
    }
}

customElements.define("my-profile", myprofile);
export default myprofile;