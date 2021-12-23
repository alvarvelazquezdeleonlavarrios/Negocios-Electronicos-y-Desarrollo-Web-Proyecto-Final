var nombre, precio, imagen, desarrollador, plataforma, cantidad = 1, trailer, pista, soundtrack;

function cargarVideojuego() {
	nombre = sessionStorage.getItem("nombreVideojuego");
	precio = sessionStorage.getItem("precioVideojuego");
	imagen = sessionStorage.getItem("imagenVideojuego");
	desarrollador = sessionStorage.getItem("desarrolladorVideojuego");
	plataforma = sessionStorage.getItem("plataformaVideojuego");
	trailer = sessionStorage.getItem("trailerVideojuego");
	pista = sessionStorage.getItem("pista");
	soundtrack = sessionStorage.getItem("soundtrack");

	document.getElementById("nombre").value = nombre;
	document.getElementById("precio").value = precio;
	document.getElementById("imagen").src = imagen;
	document.getElementById("desarrollador").value = desarrollador;
	document.getElementById("plataforma").value = plataforma;
	document.getElementById("trailer").src = trailer;
	document.getElementById("pista").value = pista;
	document.getElementById("soundtrack").src = soundtrack;

	var audio = document.getElementById("audio");
	audio.load(); // Carga el nuevo archivo de audio seleccionado
}

function obtenerCantidad(){
	cantidad = document.getElementById("cantidad").value;

	if (cantidad <= 0){
		cantidad = 1;
		document.getElementById("cantidad").value = cantidad;
	}
}

function aumntarCantidad(){
	cantidad++;
	document.getElementById("cantidad").value = cantidad;
}

function disminuirCantidad(){
	if (cantidad > 1){
		cantidad--;
		document.getElementById("cantidad").value = cantidad;
	}
}

var plataforma;

function seleccionarPlataforma(indice){

	switch (indice){
		// Xbox
		case 1:
			plataforma = 1;
			break;

		// PlayStation
		case 2:
			plataforma = 2;
			break;

		// Nintendo
		case 3:
			plataforma = 3;
			break;

		default:
			plataforma = 0;
			break;
	}

	sessionStorage.setItem("plataforma", plataforma);
}
