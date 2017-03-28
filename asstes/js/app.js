function NewPatient (nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
}

function validateLetters(event){
  var arrInputLetter = [];
  var keyCode = event.keyCode;
  (keyCode >= 97 && keyCode <= 122 || keyCode >= 65 && keyCode <= 90 || keyCode == 39 || keyCode == 32)? event:(event.preventDefault(), this.nextElementSibling.innerText = "*Sólo ingrese letras*");
}

function validateOnlyNumber(event){
  var keyCode = event.keyCode;
  (keyCode >= 48 && keyCode <= 57 && event.target.value.length < 2)? event: (event.preventDefault(), event.target.nextElementSibling.innerText = "*Sólo ingresa números*");
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

function lostFocus(event){
  console.log(event.target);
  event.target.nextElementSibling.innerText = (event.target.value.trim().length == 0 || event.target == null)? "*Campo obligatorio*": "";
  if(event.target.getAttribute("type") == "text"){
    arrInputLetter = event.target.value.split(" ");
    var mapingArr = arrInputLetter.map((element) => (element.charAt(0).toUpperCase() + element.substring(1, element.length).toLowerCase()));
    event.target.value = mapingArr.toString().replace(",", " ");
    console.log(event.target.value);
  }
}

function validateFormContent(formInputs){
  var completeForm = document.getElementById("spnCompleteForm");
  var form = document.getElementById("formPatientData");

  if(formInputs.nombre.trim().length == 0 || formInputs.apellido.trim().length == 0 || formInputs.edad.trim().length == 0 || formInputs.genero == "" || formInputs.pais.trim().length == 0 || formInputs.ciudad.trim().length == 0){
    completeForm.innerHTML = "Completa todos los campos";
  }else{
    completeForm.innerHTML = "";
    //createDiv(formInputs);
    console.log(formInputs);
    localStorage.setItem("paciente", JSON.stringify(formInputs));
    form.reset();
    window.location.assign("paciente.html");
  }
}


window.addEventListener("load", function(){
  var valNom = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var edad = document.getElementById("yearOld");
  var genero = document.getElementById("selectGender");
  var ciudad = document.getElementById("city");
  var pais = document.getElementById("country");
  var registry = document.getElementsByClassName("registryInput");
  console.log(registry[0].nextElementSibling);

  document.getElementById("formPatientData").addEventListener("submit", function(event){
    event.preventDefault();
  })

  valNom.addEventListener("keypress", validateLetters);
  lastName.addEventListener("keypress", validateLetters);
  edad.addEventListener("keypress", validateOnlyNumber);
  ciudad.addEventListener("keypress", validateLetters);
  pais.addEventListener("keypress", validateLetters);


  for(var i = 0; i < registry.length; i++){
    registry[i].addEventListener("blur",lostFocus);
  }

  document.getElementById("print").addEventListener("click", function(){
    var newRegister = new NewPatient(valNom.value, lastName.value, edad.value, genero.value, ciudad.value, pais.value);
    console.log(newRegister);
    validateFormContent(newRegister);
    valNom.focus();
  })
})
