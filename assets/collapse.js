var btn = document.querySelector("#show");
var list = document.querySelector("#list-minuman");
btn.addEventListener("click", function () {
    if (list.style.maxHeight) {
        list.style.maxHeight = null;
    } else {
        list.style.maxHeight = list.scrollHeight + "px";
    }
})