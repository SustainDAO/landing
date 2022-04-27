let btn = document.querySelector('.copy-btn')
btn.click = () => {
    navigator.clipboard.writeText(window.location.href)
}