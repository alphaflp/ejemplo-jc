function comprobar_email(){
    var email=document.getElementById("email");
    var eval=email.value;
    if (eval != /^ *@* $/){
        alert("El email introducido es invalido");
        email.style.backgroundColor="red";
    }
}
function comprobar_name(){
var name=document.getElementById("name");
    var nval=name.value;
    if (nval.length<3){
        alert('El nombre introducido es invalido');
        name.style.backgroundColor="red";
    }
}