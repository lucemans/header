const template = document.createElement("template");
template.innerHTML = `
    <style>
    nav#luc-header {
        width: 100vw;
        max-width: 900px;
        flex: 1;
        background: #111;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        box-sizing: border-box;
        border-bottom: 1px dotted rgb(104, 104, 104);
        margin-bottom: 1.4rem;
    }
    nav#luc-header ul {
        display: flex;
    }
    nav#luc-header ul li {
        margin-left: 1.4rem;
        transition: 250ms;
        list-style: none;
    }
    nav#luc-header ul li:hover {
        transform: scale(1.1);
    }
    nav#luc-header img {
        height: 2em;
        width: auto;
    }
    </style>
    <nav id="luc-header">
        <a href="/">
            <img src="https://avatars.githubusercontent.com/u/10339043?v=4" alt="Logo"/>
        </a>
        <div style="flex: 1;"></div>
        <ul>
            <li><a href="https://luc.computer/">💻</a></li>
            <li><a href="https://luc.show/">👨🏼‍💻</a></li>
            <li><a href="https://luc.contact/">📟</a></li>
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