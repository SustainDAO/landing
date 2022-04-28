window.addEventListener('DOMContentLoaded', () => {
  function copyUrl() {
    if (!window.getSelection) {
      alert("Please copy the URL from the location bar.");
      return;
    }
    const dummy = document.createElement("p");
    dummy.textContent = window.location.href;
    document.body.appendChild(dummy);
    const range = document.createRange();
    range.setStartBefore(dummy);
    range.setEndAfter(dummy);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
  
  document.addEventListener("click", (e) => {
    let btn = document.querySelector(".copy-btn");
    if (e.target === btn || e.target.parentNode === btn) {
      copyUrl();
      btn.setAttribute("data-before", "Copied!");
    } else {
      btn.setAttribute("data-before", "Copy link");
    }
  });
  let article = document.querySelector('article.content');
  const children = Array.from(article.children);
  children.forEach(el => {
    if(el.querySelectorAll('img').length > 0){
     return el.classList.add('max-w-4xl')
    }
    el.classList.add('max-w-2xl')
  })
});
