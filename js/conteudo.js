removerPaciente();

function removerPaciente(){
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.addEventListener("dblclick", function(event){
    var linhaPaciente = event.target.parentNode;
    linhaPaciente.classList.add("fadeout");

    setTimeout(function(){
      linhaPaciente.remove();
    }, 500);
  });
}

var campoFiltro = document.querySelector("#filtro-tabela");
campoFiltro.addEventListener("input", function(event){
  var conteudoFiltro = this.value;
  var pacientes = document.querySelectorAll(".paciente");

  for(let i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var expressao = new RegExp(this.value, "i");

    if(!this.value){
      paciente.classList.remove("campo-invisivel");
      continue;
    }

    if(expressao.test(paciente.textContent)){
      paciente.classList.remove("campo-invisivel");
    }else{
      paciente.classList.add("campo-invisivel");
    }
  }
});
