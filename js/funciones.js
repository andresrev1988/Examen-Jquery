function calcularPromedio(json) {
	try {   	
    	var totalPromedio = 0.0;
    	for (var i = 0; i < json.length; i++) {
	        totalPromedio += json[i].nota;
    	}    	
    	totalPromedio=totalPromedio/i;  
    	alert(parseFloat(totalPromedio).toFixed(2));  	        
    } catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}

function calcularMayor(json) {
	try {
    	var out = "Estudiante con Mayor Nota: ";    
    	var indice=0;
    	for (var i = 0; i < json.length; i++) {      		    		   	
    		if( json[i].nota >= json[indice].nota){    			
    			indice=i;    			
			}	
		}									
        alert(out+json[indice].nombre);
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}  	    		    
}       


function calcularMenor(json) {
	try {
    	var out = "Estudiante con Menor Nota: ";    
    	var indice=0;
    	for (var i = 0; i < json.length; i++) {      		    		   	
    		if( json[i].nota <= json[indice].nota){    			
    			indice=i;    			
			}	
		}									
		alert(out+json[indice].nombre);
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}  	   	    
}

function leerJSON(json) {	
	try {			
		for (var i = 0; i < json.length; i++) {
			addrow(json[i].codigo,json[i].nombre,json[i].nota);	
		}		
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}

function addrow(celda1,celda2,celda3) {
	try {							
    		var table = document.getElementById("Tabla");    		
    		var row = table.insertRow(0);
    		var cell1 = row.insertCell(0);
    		var cell2 = row.insertCell(1);
    		var cell3 = row.insertCell(2);
    		cell1.innerHTML = celda1;
    		cell2.innerHTML = celda2;
    		cell3.innerHTML = celda3;
    	} catch (error) {
			alert("Existe un Error" + " - " + error.message);
	}
}
function addJSON(json,codigo_var,nombre_var,nota_var) {	
	try {	
		json.push({codigo:""+codigo_var,nombre:nombre_var,nota:nota_var});						
		return json;
	} catch (error) {
		alert("Existe un Error" + " - " + error.message);
	}
}

function agregar(){      
        var c = document.getElementById("codigos");
        var no = document.getElementById("nombres");
        var n = document.getElementById("notas");        
        var num= Number.parseFloat(n.value);        
        notas_curso=addJSON(notas_curso,c.value,no.value.toUpperCase(),num);
        leerJSON(notas_curso);
}	