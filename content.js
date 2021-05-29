
let itens = document.getElementsByClassName('dropdown-item');
for (let i of itens) {
  if (i.title)
    i.innerHTML = i.title;
}
