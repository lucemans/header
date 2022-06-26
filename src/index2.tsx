import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import workletURL from "../public/128x128.webp?url";

type Route = { name: string; url: string; emoji?: string };
const routes: Route[] = [
    {
        name: "Domains",
        url: "https://luc.domains",
        emoji: "🌐",
    },
    {
        name: "Contact",
        url: "https://luc.contact",
        emoji: "📱",
    },
    {
        name: "Computer",
        url: "https://luc.computer",
        emoji: "💻",
    },
    {
        name: "Show",
        url: "https://luc.show",
        emoji: "👨🏼‍💻",
    },
    {
        name: "Gay",
        url: "https://luc.gay",
        emoji: "💅",
    },
    {
        name: "Tools",
        url: "https://luc.tools",
        emoji: "🛠️",
    },
    {
        name: "Community",
        url: "https://luc.community",
        emoji: "👪",
    },
    {
        name: "Cool",
        url: "https://luc.cool",
        emoji: "😎",
    },
    {
        name: "Photos",
        url: "https://luc.photos",
        emoji: "📷",
    },
    {
        name: "News",
        url: "https://luc.news",
        emoji: "📰",
    },
    {
        name: "University",
        url: "https://luc.university",
        emoji: "🎓",
    },
    {
        name: "Land",
        url: "https://luc.land",
        emoji: "🗺️",
    },
    {
        name: "Church",
        url: "https://luc.church",
        emoji: "⛪",
    },
    {
        name: "Gallery",
        url: "https://luc.gallery",
        emoji: "🖼️",
    },
    {
        name: "Directory",
        url: "https://luc.directory",
        emoji: "📁",
    },
    {
        name: "Social",
        url: "https://luc.social",
        emoji: "🤝",
    },
];

@customElement("luc-wrapper")
export class Wrapper extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            min-height: 100vh;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
        * {
            font-size: 18px;
            box-sizing: border-box;
        }
        .body {
            flex: 1;
        }
        .side {
            /* border: 1px solid white; */
            width: 360px;
            overflow: hidden;
        }
        .top {
            height: 200px;
            width: 100%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
        }
        .top .top-in {
            display: flex;
            align-items: flex-end;
            width: fit-content;
            padding: 0.5rem;
            border-radius: 0.5rem;
            margin: -0.5rem;
            cursor: pointer;
            min-width: 300px;
        }
        .top .top-in img {
            width: 4rem;
            height: 4rem;
            border-radius: 2rem;
            border: 2px solid white;
        }
        .list a {
            display: flex;
            gap: 0.25em;
            align-items: center;
            padding: 0.5rem 0rem 0.5rem 2rem;
            color: white;
            text-decoration: none;
        }
        .list a:hover,
        .list a:focus {
            font-weight: bold;
            color: #121212;
            background: white;
        }
        .list a span {
            color: #888;
            font-weight: normal;
        }
        .top label {
            cursor: pointer;
            width: fit-content;
            margin-left: auto;
        }
        .top label:hover {
            color: red;
        }
        .top .user {
            height: 4rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding-left: 1rem;
        }
        .top .top-spread {
            flex-grow: 1;
        }
        .top .top-in:hover {
            background: white;
            color: #121212;
        }
        .top .user .name {
            font-weight: bolder;
        }
        .top .user .tag {
            color: #888;
        }

        .sidebar-box {
        }

        .mobile {
            display: none;
            width: 100%;
            padding: 2rem;
        }

        input {
            display: none;
        }

        .sidebar-box ~ .side .top label {
            display: none;
        }

        @media screen and (max-width: 1200px) {
            :host {
            }
            .side {
                width: 100vw;
                height: 100vh;
                position: fixed;
                background: #121212;
                display: none;
                overflow-y: auto;
                padding-bottom: 50px;
            }
            .sidebar-box:checked ~ .side {
                display: block;
            }
            .sidebar-box:checked ~ .side .top label {
                display: block;
            }
            .mobile {
                display: block;
            }
        }
    `;

    render() {
        return html`
            <div>
                <input type="checkbox" class="sidebar-box" id="sidebar" />
                <div class="side">
                    <div class="top">
                        <label for="sidebar">X</label>
                        <div class="top-spread"></div>
                        <div class="top-in">
                            <img src="${workletURL}" oncontextmenu="javascript:window.open('https://assets.luc.directory/','_blank');return false;"/>
                            <div class="user">
                                <div class="name">Luc</div>
                                <div class="tag">@lucemans</div>
                            </div>
                        </div>
                    </div>
                    <div class="list">
                        ${routes.map(
                            (route) => html`
                                <a href="${route.url}"
                                    ><div class="emoji">${route.emoji}</div>
                                    ${route.name} <span>${route.url}</span></a
                                >
                            `,
                        )}
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="mobile">
                    <label for="sidebar">🔗 Navigation</label>
                </div>
                <slot></slot>
            </div>
        `;
    }

    inc() {
        // this.count++;
    }

    dec() {
        // this.count--;
    }
}
