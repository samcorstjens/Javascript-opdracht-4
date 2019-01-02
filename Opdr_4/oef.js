var paswoord = document.getElementById("password");
var confermatie = document.getElementById("confirmation");

function vergelijk() {
  if (paswoord.value == confermatie.value){
    paswoord.style.border = "3px solid green";
    confermatie.style.border = "3px solid green";

  }else{
    paswoord.style.border = "3px solid red";
    confermatie.style.border = "3px solid red";
  }
}
