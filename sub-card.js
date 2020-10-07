class SubCardComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = ` `;

        this.keywords = [];

        //Attributes the user defines
        this.subName = this.getAttribute('sub-name');
        this.keywords = this.getAttribute('keywords');
        this.banner = this.getAttribute('banner');

        keyArray= $(this.keywords).split(',');

        this.template.innerHTML = `
            <div class='card-container'>
                <div class='banner'>
                    <img src='${this.banner}' alt='${this.subName}'/>
                </div>
                <div class='content'>
                    <div class='sub-name'>${this.subName}</div>
                    <div class='key-container'>

                    </div>
                </div>
                
                <div class='button-add'></div>
            </div>
        `;

        //Add element to shadow dom
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['keywords'];
    }

    //Called anytime an attribute is changed
    attributeChangedCallback(name, oldValue, newValue) { 
        this.keywords = newValue;
    }

    set keywords(val) {
        if(val) {
            this.setAttribute('keywords', val); 
        } else {
            this.removeAttribute('keywords')
        }
    }

    get keywords() {
        return this.getAttribute('keywords');
    }
}


//Creates Element
window.customElements.define('sub-card', SubCardComponent);