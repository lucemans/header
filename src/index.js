const template = document.createElement("template");
template.innerHTML = `
    <style>
    :host {
        width: 100%;
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

class LucHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
}

customElements.define("luc-header", LucHeader)