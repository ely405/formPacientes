function NewPatient (nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.allPatientData = [];
  this.createDiv =  function(){
                      var lista = document.getElementById("listPatients");
                      var container = document.createElement("FIELDSET");
                      var paragraphName = document.createElement("P");
                      var conteName = document.createTextNode("Nombre: " + this.nombre);
                      var paragraphLast = document.createElement("P");
                      var conteLast = document.createTextNode("Apellido:" + this.apellido);
                      var paragraphYearOld = document.createElement("P");
                      var conteYearOld = document.createTextNode("Edad:" + this.edad);
                      var paragraphGender = document.createElement("P");
                      var conteGender = document.createTextNode("Género:" + this.genero);
                      var paragraphCity = document.createElement("P");
                      var conteCity = document.createTextNode("Ciudad:" + this.ciudad);
                      var paragraphCountry = document.createElement("P");
                      var conteCountry = document.createTextNode("País:" + this.pais);
                      paragraphName.appendChild(conteName);
                      paragraphLast.appendChild(conteLast);
                      paragraphYearOld.appendChild(conteYearOld);
                      paragraphGender.appendChild(conteGender);
                      paragraphCity.appendChild(conteCity);
                      paragraphCountry.appendChild(conteCountry);
                      container.appendChild(paragraphName);
                      container.appendChild(paragraphLast);
                      container.appendChild(paragraphYearOld);
                      container.appendChild(paragraphGender);
                      container.appendChild(paragraphCity);
                      container.appendChild(paragraphCountry);
                      lista.appendChild(container);
                    }
}

window.addEventListener("load", function(){
  var valNom = document.getElementById("name");
  var lastName = document.getElementById("lastName");
  var edad = document.getElementById("yearOld");
  var genero = document.getElementById("selectGender");
  var ciudad = document.getElementById("city");
  var pais = document.getElementById("country");
  document.getElementById("print").addEventListener("click", function(event){
    event.preventDefault();
      var registroNew = new NewPatient(valNom.value, lastName.value, edad.value, genero.value, ciudad.value, pais.value);
      registroNew.createDiv();
      document.getElementById("formPatientData").reset();
      valNom.focus();
  })
})
