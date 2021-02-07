fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((json) => {
    json.map((item) => {
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", `${item.url}`);
      document.querySelector(".img-container").appendChild(imgEl);
    });
  });

var element = document.createElement("div");
element.innerHTML = `
<h1>Hello, This is a test.</h1>
<p>we are comparing web components and iframe</p>
<div class="img-container">
</div>
`;
element.className = "element";
document.getElementById("id").appendChild(element);
