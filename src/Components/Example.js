const template = document.createElement("template");
template.innerHTML = `<h1>Hello there, I'm a reusable component`;

class Example extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Example;
