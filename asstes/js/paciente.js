
function editButton(span, object, paragraph){
  console.log(paragraph[0].childNodes[1]);
  if(event.target.firstChild.nodeValue === "Editar datos"){
    event.target.innerText = "Guardar datos";
    for (var i = 0; i < paragraph.length; i++) {
      var textEdit = paragraph[i].childNodes[1].innerHTML;
      console.log(textEdit);
      var inputEditText = document.createElement("INPUT");
      inputEditText.value = textEdit;
      console.log(inputEditText.value);
      paragraph[i].replaceChild(inputEditText, paragraph[i].childNodes[1]);
    }

    // for (var i = 0; i < paragraph.length; i++) {
    //   var inputEditText = document.createElement("INPUT");
    //   var textEdit=[];
    //   for (var element in object) {
    //     textEdit.push(object[element]);
    //     inputEditText.value = textEdit[i];
    //   }
    //   paragraph[i].appendChild(inputEditText);
    //   paragraph[i].removeChild(paragraph[i].childNodes[1]);
    //   // console.log(inputEditText.value);
    //   // docFrag.appendChild(inputEditText);
    //   console.log(inputEditText);
    // }
  }else if(event.target.firstChild.nodeValue === "Guardar datos"){
    event.target.innerHTML = "Editar datos";
    for (var i = 0; i < paragraph.length; i++) {
      var textNewSpan = paragraph[i].childNodes[1].value;
      console.log(textNewSpan);
      var newSpan = document.createElement("SPAN");
      newSpan.innerHTML = textNewSpan;
      console.log(newSpan.innerHTML);
      paragraph[i].replaceChild(newSpan, paragraph[i].childNodes[1]);
    }
    console.log(object);
    console.log(object.nombre);
    // for (var prop in object) {
    //   console.log(object[prop] = textNewSpan);
    // }
  }
}

window.addEventListener("load", function(){
  var spanName = document.getElementById("patientName");
  var spanLastName = document.getElementById("patientLastName");
  var spanYearOld = document.getElementById("patientYearOld");
  var spanGender = document.getElementById("patientGender");
  var spanCity = document.getElementById("patientCity");
  var spanCountry = document.getElementById("patientCountry");
  var allSpanData = document.getElementsByClassName("dataSpan");
  var paragraphList = document.getElementsByTagName("P");
  console.log(allSpanData);
  console.log(paragraphList);
  var patientObject = JSON.parse(localStorage.getItem("paciente"));
  console.log(patientObject);
  spanName.innerText = patientObject.nombre;
  spanLastName.innerText = patientObject.apellido;
  spanYearOld.innerText = patientObject.edad;
  spanGender.innerText = patientObject.genero;
  spanCity.innerText = patientObject.ciudad;
  spanCountry.innerText = patientObject.pais;
  console.log(spanName.value);
  console.log(spanName.innerHTML);
  console.log(spanName.innerText);

  document.getElementById("btnReturn").addEventListener("click", function(){
    window.location = "index.html";
  });

  document.getElementById("dataPatientEdit").addEventListener("click", function(){
    editButton(allSpanData, patientObject, paragraphList)
  });
});
