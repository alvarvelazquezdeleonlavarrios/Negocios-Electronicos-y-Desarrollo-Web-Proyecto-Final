var nombre, precio, imagen;

function cargarVideojuego() {
	nombre = sessionStorage.getItem("nombreVideojuego");
	precio = sessionStorage.getItem("precioVideojuego");
	imagen = sessionStorage.getItem("imagenVideojuego");

	document.getElementById("nombre").value = nombre;
	document.getElementById("precio").value = precio;
	document.getElementById("imagen").src = imagen;
}