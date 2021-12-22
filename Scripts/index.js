var nombre, precio, imagen;

function seleccionarVideojuego(indice) {
	
	switch(indice) {
		/** Juegos destacados **/
		case 1:
			nombre = "Forza Horizon 5";
			precio = 1499;
			imagen = "Imágenes/Forza Horizon 5.jpg";
			break;

		case 2:
			nombre = "FIFA 22";
			precio = 1499;
			imagen = "Imágenes/FIFA 22.jpg";
			break;

		case 3:
			nombre = "Mario Kart 8 Deluxe";
			precio = 1099;
			imagen = "Imágenes/Mario Kart 8 Deluxe.jpg";
			break;

		case 4:
			nombre = "Marvel's Spider-Man: Miles Morales";
			precio = 1299;
			imagen = "Imágenes/Spider-Man Miles Morales.jpg";
			break;

		case 5:
			nombre = "Super Smash Bros. Ultimate";
			precio = 1099;
			imagen = "Imágenes/Super Smash Bros Ultimate.jpg";
			break;

		/** Próximos lanzamientos **/
		case 6:
			nombre = "Halo Infinite";
			precio = 1499;
			imagen = "Imágenes/Halo Infinite.jpg";
			break;

		case 7:
			nombre = "Battlefield 2042";
			precio = 1359;
			imagen = "Imágenes/Battlefield 2042.jpg";
			break;

		case 8:
			nombre = "Five Nights at Freddy's: Security Breach";
			precio = 850;
			imagen = "Imágenes/Five Nights at Freddy's Security Breach.jpg";
			break;

		case 9:
			nombre = "Metroid Dread";
			precio = 1299;
			imagen = "Imágenes/Metroid Dread.jpg";
			break;

		case 10:
			nombre = "Blue Reflection: Second Light";
			precio = 1799;
			imagen = "Imágenes/Blue Reflection Second Light.jpg";
			break;

		default:
			nombre = "???";
			precio = 0;
			break;
	}

	sessionStorage.setItem("nombreVideojuego", nombre);
	sessionStorage.setItem("precioVideojuego", precio);
	sessionStorage.setItem("imagenVideojuego", imagen);
}