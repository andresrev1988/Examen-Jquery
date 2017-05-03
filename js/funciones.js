function calcularPromedio() {
	try {  
		var estudiante;
		var totalPromedio = 0.0;
    	for (var i = 0; i < localStorage.length; i++) {
	   	    var clave = localStorage.key(i);        	
	   	    estudiante = $.parseJSON(localStorage.getItem(clave));			
	   	    var nota = estudiante.nota;				   	    
	   	    totalPromedio += Number.parseFloat(nota);  	   	                      
    	}
    	totalPromedio=totalPromedio/i;  
    	alert("El promedio es:"+parseFloat(totalPromedio).toFixed(2));  	        	 	    	       	
    } catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}
function calcularMayor() {
	try {  
		var mayor;		
		var indice = 0;
    	for (var i = 0; i < localStorage.length; i++) {
	   	    var clave = localStorage.key(i);        	
	   	    var clave1 = localStorage.key(indice);
	   	    var estudiante = $.parseJSON(localStorage.getItem(clave));			
	   	    var estudiante1 = $.parseJSON(localStorage.getItem(clave1));
	   	    var nota = Number.parseFloat(estudiante.nota);
	   	    var nota1 = Number.parseFloat(estudiante1.nota);
	   	    if(nota>=nota1){
	   	    	indice=i;
	   	    	mayor=estudiante.nombre;
	   	    }				   	    	   	     
    	}    	
    	alert("El estudiante con mayor nota es:"+mayor);  	        	 	    	       	
    } catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}
function calcularMenor() {
	try {  
		var menor;		
		var indice = 0;
    	for (var i = 0; i < localStorage.length; i++) {
	   	    var clave = localStorage.key(i);        	
	   	    var clave1 = localStorage.key(indice);
	   	    var estudiante = $.parseJSON(localStorage.getItem(clave));			
	   	    var estudiante1 = $.parseJSON(localStorage.getItem(clave1));
	   	    var nota = Number.parseFloat(estudiante.nota);
	   	    var nota1 = Number.parseFloat(estudiante1.nota);
	   	    if(nota<nota1){
	   	    	indice=i;
	   	    	menor=estudiante.nombre;
	   	    }				   	    	   	     
    	}    	
    	alert("El estudiante con menor nota es:"+menor);  	        	 	    	       	
    } catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}
///FUNCIONES LOCALSTORAGE
function agregar(){
		var codigo = $("#codigos").val();
        var nombre = $("#nombres").val();
        var nota = $("#notas").val();  
        var num= Number.parseFloat(nota);                 
 		var estudiante = {
                codigo: codigo,
                nombre: nombre,
                nota: num
            };         
        localStorage.setItem(codigo, JSON.stringify(estudiante));   
        contador = localStorage.length + 1;
        listarEstudiantes(); 
        limpiar();       
}
//LISTAR Estudiantes
function listarEstudiantes(){
		var tabla = "";        		
        tabla += '<table border="1">';
        tabla += '<tr>';
        tabla += '<th>CODIGO</th>';
        tabla += ' <th>NOMBRE</th>';
        tabla += '<th>NOTA</th>';
        tabla += '<th>EDITAR</th>';
        tabla += '<th>ELIMINAR</th>';
        tabla += '</tr>';
        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);            
            var estudiante = $.parseJSON(localStorage.getItem(clave));
            tabla += '<tr>';
            tabla += '<td>' + estudiante.codigo + '</td>';
            tabla += '<td>' + estudiante.nombre + '</td>';
            tabla += '<td>' + estudiante.nota + '</td>';
            tabla += '<td><button onclick="editarEstudiante(\'' + estudiante.codigo + '\');">Editar</button></td>';
            tabla += '<td><button onclick="eliminaEstudiante(\'' + estudiante.codigo + '\');">Eliminar</button></td>';
            tabla += '</tr>';
        }
        tabla += '</table>';               
        $("#tabla").html(tabla);
}
//FUNCION LIMPIAR
function limpiar(){
	$("#codigos").val("");
	$("#nombres").val("");
	$("#notas").val(""); 
}
//EDITAR
function editarEstudiante(codigo) {
    var estudiante;
    for (var i = 0; i < localStorage.length; i++) {
   	    var clave = localStorage.key(i);
        if (clave == codigo) {
			estudiante = $.parseJSON(localStorage.getItem(clave));
			$("#codigos").val(estudiante.codigo);
            $("#nombres").val(estudiante.nombre);
            $("#notas").val(estudiante.nota);
        }
    }
}

//BORRA
function eliminaEstudiante(codigo) {
        localStorage.removeItem(codigo);
        listarEstudiantes();
}

//READY FUNCTION
$(document).ready(function(){
	console.log( "document loaded");
	$("#add").click(function(){                       	
		var r = confirm("Esta seguro que desea agregar este estudiante?");        
		if (r == true) {            
            agregar();    
            var txt = "Agregado con Exito!";                                
        }                     
    });           
	$("#promedio").click(function(){                       	   
            calcularPromedio();           
    });       
    $("#mayor").click(function(){                       	   
            calcularMayor();           
    });       
    $("#menor").click(function(){                       	   
            calcularMenor();           
    });       
});