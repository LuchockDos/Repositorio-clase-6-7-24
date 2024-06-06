const lista = document.getElementById('miLista');

for(let i = 0; i < 5; i++){
    const nuevoElemento = document.createElement('li');

    nuevoElemento.textContent = `Elemento ${i}`;

    lista.appendChild(nuevoElemento);
}