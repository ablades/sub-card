class SubCardComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = ` `;

        //Attributes the user defines
        this.subName = this.getAttribute('sub-name');
        this.keywords = this.getAttribute('keywords');
        this.banner = this.getAttribute('banner');


        this.template.innerHTML = `
            <div class='card-container'>
                <div class='banner'>
                    <img src='${this.banner}' alt='${this.subName}'/>
                </div>
                <div></div>
                
                <div class='button-add'></div>
            </div>
        `;

        //Add element to shadow dom
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}


//Creates Element
window.customElements.define('sub-card', SubCardComponent);