function copyUrl() {
    if (!window.getSelection) {
      alert('Please copy the URL from the location bar.');
      return;
    }
    const dummy = document.createElement('p');
    dummy.textContent = window.location.href;
    document.body.appendChild(dummy);
    const range = document.createRange();
    range.setStartBefore(dummy);
    range.setEndAfter(dummy);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

document.querySelector('.copy-btn').onclick = () => {
    copyUrl();
}