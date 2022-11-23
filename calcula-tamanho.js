var titulo = document.querySelector(".titulo");
titulo.textContent = "Santana Shop";

var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {

    var cliente = clientes[i];

    var tdPeso = cliente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = cliente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdTamanho = cliente.querySelector(".info-tamanho");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdTamanho.textContent = "Peso inválido";
        cliente.classList.add("cliente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdTamanho.textContent = "Altura inválida";
        cliente.classList.add("cliente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var tamanho = calculaTamanho(peso, altura);
        tdTamanho.textContent = imc;
    }
}

function calculaTamanho(peso, altura) {
    var tamanho = 0;
    tamanho = peso / (altura * altura);

    return tamanho.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}