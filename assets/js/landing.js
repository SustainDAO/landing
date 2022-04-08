let button = document.querySelector("#learn-more");
button.onclick = () => {
  document.querySelector("#main").scrollIntoView({ behavior: "smooth" });
};