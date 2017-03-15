function NewPatient (nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
}

function createDiv(NewPatient){
  var lista = document.getElementById("listPatients");

    patientDataPrint.forEach(function(elem){
      var containerPatient = document.createElement("FIELDSET");
      containerPatient.setAttribute("class", "aPatient");
      for(var prop in elem){
        var paragraph = document.createElement("P");
        var paragraphContent = document.createTextNode(prop +": " + elem[prop]);
        paragraph.appendChild(paragraphContent);
        containerPatient.appendChild(paragraph);
      }
      lista.appendChild(containerPatient);
    })
}

var allPatientData = [];
var patientDataPrint = [];

window.addEventListener("load", function(){
  var valNom = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var edad = document.getElementById("yearOld");
  var genero = document.getElementById("selectGender");
  var ciudad = document.getElementById("city");
  var pais = document.getElementById("country");

  document.getElementById("formPatientData").addEventListener("submit", function(event){
    event.preventDefault();
  })

  document.getElementById("print").addEventListener("click", function(){
    var newRegister = new NewPatient(valNom.value, lastName.value, edad.value, genero.value, ciudad.value, pais.value);
    allPatientData.push(newRegister);
    patientDataPrint.push(newRegister);
    createDiv(newRegister);
    document.getElementById("formPatientData").reset();
    valNom.focus();
    patientDataPrint.shift();
  })
})
