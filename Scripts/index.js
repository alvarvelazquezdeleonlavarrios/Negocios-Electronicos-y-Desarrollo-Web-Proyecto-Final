var nombre, precio, imagen, desarrollador, plataforma, trailer, pista, soundtrack;

function seleccionarVideojuego(indice) {
	
	switch(indice) {
		/** Juegos destacados **/
		case 1:
			nombre = "Forza Horizon 5";
			precio = 1499;
			imagen = "Imágenes/Forza Horizon 5.jpg";
			desarrollador = "Xbox Game Studios, Playground Games";
			plataforma = "Xbox One, Xbox Series X|S";
			trailer = "https://www.youtube.com/embed/FYH9n37B7Yw";

			pista = "Pista no disponible";
			break;

		case 2:
			nombre = "FIFA 22";
			precio = 1499;
			imagen = "Imágenes/FIFA 22.jpg";
			desarrollador = "Electronic Arts";
			plataforma = "PlayStation 4, PlayStation 5";
			trailer = "https://www.youtube.com/embed/o1igaMv46SY";

			pista = "Pista no disponible";
			break;

		case 3:
			nombre = "Mario Kart 8 Deluxe";
			precio = 1099;
			imagen = "Imágenes/Mario Kart 8 Deluxe.jpg";
			desarrollador = "Nintendo";
			plataforma = "Nintendo Switch";
			trailer = "https://www.youtube.com/embed/tKlRN2YpxRE";

			pista = "Mario Kart 8 Deluxe OST - Start Screen";
			soundtrack = "Audios/Mario Kart 8 Deluxe OST - Start Screen.ogg";
			break;

		case 4:
			nombre = "Marvel's Spider-Man: Miles Morales";
			precio = 1299;
			imagen = "Imágenes/Spider-Man Miles Morales.jpg";
			desarrollador = "Sony Interactive Entertainment, Insomniac Games";
			plataforma = "PlayStation 4, PlayStation 5";
			trailer = "https://www.youtube.com/embed/NTunTURbyUU";

			pista = "Marvel's Spider-Man Miles Morales OST - New York's Only Spider-Man";
			soundtrack = "Audios/Marvel's Spider-Man Miles Morales OST - New York's Only Spider-Man.ogg";
			break;

		case 5:
			nombre = "Super Smash Bros. Ultimate";
			precio = 1099;
			imagen = "Imágenes/Super Smash Bros Ultimate.jpg";
			desarrollador = "Nintendo, BANDAI NAMCO Studios";
			plataforma = "Nintendo Switch";
			trailer = "https://www.youtube.com/embed/hkTzHcHTcME";

			pista = "Super Smash Bros Ultimate OST - Menu";
			soundtrack = "Audios/Super Smash Bros Ultimate OST - Menu.ogg";
			break;

		/** Próximos lanzamientos **/
		case 6:
			nombre = "Halo Infinite";
			precio = 1499;
			imagen = "Imágenes/Halo Infinite.jpg";
			desarrollador = "Xbox Game Studios, 343 Industries";
			plataforma = "Xbox One, Xbox Series X|S";
			trailer = "https://www.youtube.com/embed/PyMlV5_HRWk";

			pista = "Halo Infinite OST - The Road";
			soundtrack = "Audios/Halo Infinite OST - The Road.ogg";
			break;

		case 7:
			nombre = "Battlefield 2042";
			precio = 1359;
			imagen = "Imágenes/Battlefield 2042.jpg";
			desarrollador = "Electronic Arts, DICE";
			plataforma = "Xbox One, Xbox Series X|S";
			trailer = "https://www.youtube.com/embed/YWnFTdkrLq0";

			pista = "Battlefield 2042 OST - Battlefield 2042";
			soundtrack = "Audios/Battlefield 2042 OST - Battlefield 2042.ogg";
			break;

		case 8:
			nombre = "Five Nights at Freddy's: Security Breach";
			precio = 850;
			imagen = "Imágenes/Five Nights at Freddy's Security Breach.jpg";
			desarrollador = "Steel Wool Studios, Scottgames";
			plataforma = "PlayStation 4, PlayStation 5";
			trailer = "https://www.youtube.com/embed/BJ3cLVRWPFU";

			pista = "Pista no disponible";
			break;

		case 9:
			nombre = "Metroid Dread";
			precio = 1299;
			imagen = "Imágenes/Metroid Dread.jpg";
			desarrollador = "Nintendo, MercurySteam";
			plataforma = "Nintendo Switch";
			trailer = "https://www.youtube.com/embed/V_XnbTayTH4";

			pista = "Metroid Dread OST - Title Theme";
			soundtrack = "Audios/Metroid Dread OST - Title Theme.ogg";
			break;

		case 10:
			nombre = "Blue Reflection: Second Light";
			precio = 1799;
			imagen = "Imágenes/Blue Reflection Second Light.jpg";
			desarrollador = "Koei Tecmo, Gust";
			plataforma = "Nintendo Switch";
			trailer = "https://www.youtube.com/embed/yYwBFVWOdZ4";

			pista = "Blue Reflection Second Light OST - TIE";
			soundtrack = "Audios/Blue Reflection Second Light OST - TIE.ogg";
			break;

		default:
			nombre = "???";
			precio = 0;
			break;
	}

	sessionStorage.setItem("nombreVideojuego", nombre);
	sessionStorage.setItem("precioVideojuego", precio);
	sessionStorage.setItem("imagenVideojuego", imagen);
	sessionStorage.setItem("desarrolladorVideojuego", desarrollador);
	sessionStorage.setItem("plataformaVideojuego", plataforma);
	sessionStorage.setItem("trailerVideojuego", trailer);

	sessionStorage.setItem("pista", pista);
	sessionStorage.setItem("soundtrack", soundtrack);
}