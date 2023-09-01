import * as components from "./components/indexpadre.js" 
import data from "./data.js"
class Appcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
       
    }

    render(){
        data.forEach((user)=>{
            this.shadowRoot.innerHTML += `  
            <my-profile name="${user.name}" specie="${user.specie}" gender="${user.gender}" house= "${user.house}" year of birth= "${user.yearofbirth}"></my-profile>
            <my-button message = "Cambia de nombre"></my-button>
            `
        })
    }
}

customElements.define("app-container", Appcontainer);