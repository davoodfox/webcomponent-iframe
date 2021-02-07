fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((json) => {
    json.map((item) => {
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", `${item.url}`);
      document.querySelector(".img-container").appendChild(imgEl);
    });
  });

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
.element {
  height: fit-content;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.element img {
  width: 200px;
}
.element .img-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}
</style>
  <div class="element">
    <h1>Hello, This is a test.</h1>
    <p>we are comparing web components and iframe</p>
    <div class="img-container">
    </div>
  </div>  
    `;
  }
}

customElements.define("my-component", MyComponent);
