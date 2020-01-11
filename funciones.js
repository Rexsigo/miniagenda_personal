function validar(formu)
{
	var struser = formu.user.value;
	var strpass = formu.pass.value;
	if(strpass.length == 0 || struser.length == 0)
		alert("Debe llenar todos los campos");
	else if(struser != "Sergio" && strpass != "qwerty" || strpass != "qwerty" || struser != "Sergio")
		alert("Nombre de usuario o clave incorrecta");
	else if(struser == "Sergio" && strpass == "qwerty")
		window.location.href="agenda.html";
	return false;
}
var i = 0;
var j = 0;
Agenda = new Array();
Agenda[0] = new Array(4);
Agenda[0][0] = "Sergio";
Agenda[0][1] = "sergioalberto1234@hotmail.com";
Agenda[0][2] = "78156243";
Agenda[0][3] = "Ninguna";
function iniciar(formu){
	formu.nombre.value = Agenda[0][0];
	formu.email.value = Agenda[0][1];
	formu.telefono.value = Agenda[0][2];
	formu.notas.value = Agenda[0][3];
}
function nuevo(formu){
	var lmtype = formu.elements;
	var xfinal = lmtype.length;
	for(var x= 0; x < xfinal; x++) {
		if(lmtype[x].type == "text")
			lmtype[x].value = "";
	}
}
function guardar(formu){
	i++;
	Agenda[i] = new Array(4);
	Agenda[i][0] = formu.nombre.value;
	Agenda[i][1] = formu.email.value;
	Agenda[i][2] = formu.telefono.value;
	Agenda[i][3] = formu.notas.value;
	alert("Guardado!");
	nuevo(formu);
	j = i;
}
function recorrer(formu, strname){
	var NameCmp = strname;
	var MaxPosition = Agenda.length - 1;
	if(NameCmp == "Primero")
		j = 0;
	else if(NameCmp == "Anterior" && j > 0)
		j--;
	else if(NameCmp == "Siguiente" && j < MaxPosition)
		j++;
	else if(NameCmp == "Ultimo")
		j = MaxPosition;
	formu.nombre.value = Agenda[j][0];
	formu.email.value = Agenda[j][1];
	formu.telefono.value = Agenda[j][2];
	formu.notas.value = Agenda[j][3];
}
function borrar(formu){
	if(i > -1 && confirm("Se borrara este registro")){
		var y = 0;
		var MaxPosition = Agenda.length - 1;
		for(y = j; y < MaxPosition; y++){
			Agenda[y][0] = Agenda[y+1][0];
			Agenda[y][1] = Agenda[y+1][1];
			Agenda[y][2] = Agenda[y+1][2];
			Agenda[y][3] = Agenda[y+1][3];
		}
		Agenda.splice(MaxPosition,1);
		if(i > -1){
			i--;
			if (i > 0) 
				recorrer(formu,"Anterior");
			else
				nuevo(formu);
		}
	}
	else
		alert("Sin Registros");
}
function buscar(formu){
	var person = prompt("Introduzca el nombre a buscar");
	if(person != null){
		var MaxPosition = Agenda.length;
		for (var x = 0; x < MaxPosition; x++){
			if(person == Agenda[x][0]){
				formu.nombre.value = Agenda[x][0];
				formu.email.value = Agenda[x][1];
				formu.telefono.value = Agenda[x][2];
				formu.notas.value = Agenda[x][3];
				j = x;
				return;
			}
		}
		alert("No se encontro el elemento");
	}
}