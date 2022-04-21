const templateHeader = document.createElement("template");
templateHeader.innerHTML = `
    <style>
    :host {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav#luc-header {
        width: calc(100% - 2rem);
        max-width: 900px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
        box-sizing: border-box;
        border-bottom: 1px dotted rgb(104, 104, 104);
        margin-bottom: 1.4rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 18px;
        font-family: inherit;
    }
    nav#luc-header ul {
        display: flex;
    }
    nav#luc-header ul li {
        margin-left: 1.4rem;
        transition: 250ms;
        list-style: none;
        position: relative;
    }
    nav#luc-header ul li:hover {
        transform: scale(1.1);
    }
    nav#luc-header img {
        height: 2em;
        width: auto;
    }
    nav#luc-header ul li a {
        text-decoration: none;
    }
    nav#luc-header ul li .headertooltip {
        position: absolute;
        background: #444;
        transform: translateX(-50%);
        visibility: hidden;
        z-index: 2;
        width: fit-content;
        break-word: none;
        padding: 0.5rem;
        border: 1px solid white;
        border-radius: 0.3em;
        top: 100%;
        margin-top: 0.5rem;
    }
    nav#luc-header ul li:hover .headertooltip, nav#luc-header ul li:focus-within .headertooltip {
        visibility: visible;
    }
    </style>
    <nav id="luc-header">
        <a href="/">
            <img src="https://header.luc.computer/public/500x500.webp" alt="Home"/>
        </a>
        <div style="flex: 1;"></div>
        <ul>
            <li>
                <a href="https://luc.computer/" aria-describedby="linkcomputer">💻</a>
                <div id="linkcomputer" hidden role="tooltip" class="headertooltip">
                    Article Collection
                </div>
            </li>
            <li>
                <a href="https://luc.show/" aria-describedby="linkshow">👨🏼‍💻</a>
                <div id="linkshow" hidden role="tooltip" class="headertooltip">
                    Presentations and Slides
                </div>
            </li>
            <li>
                <a href="https://luc.contact/" aria-describedby="linkcontact">📟</a>
                <div id="linkcontact" hidden role="tooltip" class="headertooltip">
                    Contact
                </div>
            </li>
        </ul>
    </nav>
`;

const templateFooter = document.createElement("template");
templateFooter.innerHTML = `
    <style>
    :host {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav#luc-footer {
        width: calc(100% - 2rem);
        max-width: 900px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5rem;
        box-sizing: border-box;
        margin-bottom: 1.4rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 18px;
        color: white;
    }
    nav#luc-footer a {
        color: inherit;
        text-decoration: none;
    }
    nav#luc-footer ul {
        display: flex;
    }
    nav#luc-footer ul li {
        margin-left: 1.4rem;
        transition: 250ms;
        list-style: none;
        position: relative;
        opacity: 0.8;
    }
    nav#luc-footer ul li:hover {
        transform: scale(1.1);
        opacity: 1;
    }
    nav#luc-footer img {
        height: 2em;
        width: auto;
        border-radius: 2em;
    }
    nav#luc-footer a#luc-footer-id {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    nav#luc-footer a#luc-footer-id:hover img {
        transform: scale(1.1) rotate(10deg);
        border-radius: 0.5em;
    }
    nav#luc-footer a#luc-footer-id span {
        opacity: 0.8;
    }
    nav#luc-footer a#luc-footer-id:hover span {
        transform: scale(1.1);
        font-weight: bolder;
        opacity: 1;
    }
    </style>
    <nav id="luc-footer">
        <a href="/" id="luc-footer-id">
            <img src="https://header.luc.computer/public/500x500.webp" alt="Home"/>
            <span>Lucemans</span>
        </a>
        <ul>
            <li>
                <a href="https://luc.computer/" aria-describedby="linkcomputer">luc.computer</a>
            </li>
            <li>
                <a href="https://luc.show/" aria-describedby="linkshow">luc.show</a>
            </li>
            <li>
                <a href="https://luc.contact/" aria-describedby="linkcontact">luc.contact</a>
            </li>
        </ul>
    </nav>
`;

class LucHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(templateHeader.content.cloneNode(true));
      }
}

class LucFooter extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
    }
}

customElements.define("luc-header", LucHeader);
customElements.define("luc-footer", LucFooter);