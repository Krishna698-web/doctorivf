class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h2>hello</h2>`;
  }
}

customElements.define("nav-bar", Navbar);
