const idade = document.getElementById('idade');
const resultado = document.getElementById('resultado')

function idadear() {
    const valor = Number(idade.value).toFixed(0);

    if (valor < 16) {
        resultado.textContent = 'Não pode ainda D:';
    } else if (valor < 18) {
        resultado.textContent = 'Pode mas não precisa :D';
    } else {
        resultado.textContent = 'Não só pode como deve >:D';
    }
}
idade.addEventListener('input', idadear);