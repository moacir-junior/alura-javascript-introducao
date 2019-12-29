function buscarPacientes(){
  var request = new XMLHttpRequest();
  request.open("GET", "http://api-pacientes.herokuapp.com/pacie11111ntes");
  request.send();
  request.addEventListener("load", function() {

    if(request.status == 200){
      var pacientes = JSON.parse(request.responseText);

      pacientes.forEach(function(paciente){
        exibirPaciente(paciente);
      });
    }else{
      exibirErros(Array("Erro ao buscar pacientes."));
    }
  });
}
