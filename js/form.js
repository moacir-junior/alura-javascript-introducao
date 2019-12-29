function adicionarPaciente(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obterPaciente(form);

    var mensagemErro = document.querySelector("#mensagem-erro");
    var erros = validarPaciente(paciente);

    if(erros.length){
      exibirErros(erros);
      return;
    }
    mensagemErro.textContent = "";
    exibirPaciente(paciente);
}

function obterPaciente(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(peso, altura)
  }

  return paciente;
}

function exibirPaciente(paciente){
  var trPaciente = document.createElement("tr");

  var campos = [
    paciente.nome,
    paciente.peso,
    paciente.altura,
    paciente.gordura,
    paciente.imc
  ];

  for(let i = 0; i < campos.length; i++){
      var campo = document.createElement("td");
      campo.textContent = campos[i];
      trPaciente.appendChild(campo);
  }

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(trPaciente);
}

function exibirErros(erros){
  var listaErros = document.querySelector("#mensagem-erro");
  listaErros.innerHTML = "";

  erros.forEach(function(erro){
    var itemErro = document.createElement("li");
    itemErro.textContent = erro;
    listaErros.appendChild(itemErro);
  })
}
