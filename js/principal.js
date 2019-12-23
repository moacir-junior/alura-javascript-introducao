function calcularImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function carregarInfoIMC() {
    var pacientes = document.querySelectorAll(".paciente");

    for (let i = 0; i < pacientes.length; i++) {
        var peso = pacientes[i].querySelector(".info-peso").textContent;
        var altura = pacientes[i].querySelector(".info-altura").textContent;
        var imc = calcularImc(peso, altura);

        var pesoValido = true;
        var alturaValida = true;

        if (!validarPeso(peso)){
            pacientes[i].querySelector(".info-imc").textContent = "Peso inválido";
            pesoValido = false;
        }

        if (!validarAltura(altura)){
            pacientes[i].querySelector(".info-imc").textContent = "Altura inválida";
            alturaValida = false;
        }

        if(pesoValido && alturaValida)
            pacientes[i].querySelector(".info-imc").textContent = `${imc}`;
        else
            pacientes[i].classList.add("paciente-invalido");
    }
}

function validarAltura(altura){
  return altura > 0 && altura < 3;
}

function validarPeso(peso){
  return peso > 0 && peso < 1000;
}

function validarPaciente(paciente){
  var erros = Array();

  if(!validarAltura(paciente.altura)){
    erros.push("Altura inválida");
  }

  if(!validarPeso(paciente.peso)){
    erros.push("Peso inválido");
  }

  return erros;
}


carregarInfoIMC();
