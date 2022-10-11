function enterMenu(){
    if (itens.style.display == 'block') {
        itens.style.display = 'none'} else { itens.style.display = 'block'
    }
}

function me(elemento){
    const txtarray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    txtarray.forEach((letra, i) => { setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}


const texto = document.querySelector('h1');
me(texto)