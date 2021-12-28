var nombre, precio, imagen;
var plataforma, indV;

function cargarTabla(){
	plataforma = sessionStorage.getItem("plataforma");

	switch(plataforma) {
		// Xbox
		case '1':
			document.getElementById("nombrePlataforma").value = "Xbox";

			cargarVideojuego(1,1);
			cargarVideojuego(2,6);
			cargarVideojuego(3,7);
			cargarVideojuego(4,0);
			break;

		// PlayStation
		case '2':
			document.getElementById("nombrePlataforma").value = "PlayStation";

			cargarVideojuego(1,2);
			cargarVideojuego(2,4);
			cargarVideojuego(3,8);
			cargarVideojuego(4,0);
			break;

		// Nintendo
		case '3':
			document.getElementById("nombrePlataforma").value = "Nintendo";

			cargarVideojuego(1,3);
			cargarVideojuego(2,5);
			cargarVideojuego(3,9);
			cargarVideojuego(4,10);
			break;

		default:
			break;
	}
}

function cargarVideojuego(numero, indice){
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
			imagen = "";
			break;
	}

	switch(numero) {
		// Renglón 1
		case 1:
			document.getElementById("imgV1").src = imagen;
			document.getElementById("nombreV1").value = nombre;
			document.getElementById("precioV1").value = precio;

			sessionStorage.setItem("idV1", indice);
			break;

		// Renglón 2
		case 2:
			document.getElementById("imgV2").src = imagen;
			document.getElementById("nombreV2").value = nombre;
			document.getElementById("precioV2").value = precio;

			sessionStorage.setItem("idV2", indice);
			break;

		// Renglón 3
		case 3:
			document.getElementById("imgV3").src = imagen;
			document.getElementById("nombreV3").value = nombre;
			document.getElementById("precioV3").value = precio;

			sessionStorage.setItem("idV3", indice);
			break;

		// Renglón 4
		case 4:
			document.getElementById("imgV4").src = imagen;
			document.getElementById("nombreV4").value = nombre;
			document.getElementById("precioV4").value = precio;

			sessionStorage.setItem("idV4", indice);
			break;

		default:
			break;
	}

}

function seleccionarVideojuego(numero){
	switch(numero) {
		// Renglón 1
		case 1:
			indV = sessionStorage.getItem("idV1");
			break;

		// Renglón 2
		case 2:
			indV = sessionStorage.getItem("idV2");
			break;

		// Renglón 3
		case 3:
			indV = sessionStorage.getItem("idV3");
			break;

		// Renglón 4
		case 4:
			indV = sessionStorage.getItem("idV4");
			break;

		default:
			break;
	}

	switch(indV) {
		/** Juegos destacados **/
		case '1':
			nombre = "Forza Horizon 5";
			precio = 1499;
			imagen = "Imágenes/Forza Horizon 5.jpg";
			desarrollador = "Xbox Game Studios, Playground Games";
			plataforma = "Xbox One, Xbox Series X|S";
			trailer = "https://www.youtube.com/embed/FYH9n37B7Yw";

			pista = "Pista no disponible";
			soundtrack = "";
			break;

		case '2':
			nombre = "FIFA 22";
			precio = 1499;
			imagen = "Imágenes/FIFA 22.jpg";
			desarrollador = "Electronic Arts";
			plataforma = "PlayStation 4, PlayStation 5";
			trailer = "https://www.youtube.com/embed/o1igaMv46SY";

			pista = "Pista no disponible";
			soundtrack = "";
			break;

		case '3':
			nombre = "Mario Kart 8 Deluxe";
			precio = 1099;
			imagen = "Imágenes/Mario Kart 8 Deluxe.jpg";
			desarrollador = "Nintendo";
			plataforma = "Nintendo Switch";
			trailer = "https://www.youtube.com/embed/tKlRN2YpxRE";

			pista = "Mario Kart 8 Deluxe OST - Start Screen";
			soundtrack = "Audios/Mario Kart 8 Deluxe OST - Start Screen.ogg";
			break;

		case '4':
			nombre = "Marvels Spider-Man: Miles Morales";
			precio = 1299;
			imagen = "Imágenes/Spider-Man Miles Morales.jpg";
			desarrollador = "Sony Interactive Entertainment, Insomniac Games";
			plataforma = "PlayStation 4, PlayStation 5";
			trailer = "https://www.youtube.com/embed/NTunTURbyUU";

			pista = "Marvel's Spider-Man Miles Morales OST - New York's Only Spider-Man";
			soundtrack = "Audios/Marvel's Spider-Man Miles Morales OST - New York's Only Spider-Man.ogg";
			break;

		case '5':
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
		case '6':
			nombre = "Halo Infinite";
			precio = 1499;
			imagen = "Imágenes/Halo Infinite.jpg";
			desarrollador = "Xbox Game Studios, 343 Industries";
			plataforma = "Xbox One, Xbox Series X|S";
			trailer = "https://www.youtube.com/embed/PyMlV5_HRWk";

			pista = "Halo Infinite OST - The Road";
			soundtrack = "Audios/Halo Infinite OST - The Road.ogg";
			break;

		case '7':
			nombre = "Battlefield 2042";
			precio = 1359;
			imagen = "Imágenes/Battlefield 2042.jpg";
			desarrollador = "Electronic Arts, DICE";
			plataforma = "Xbox One, Xbox Series X|S";
			trailer = "https://www.youtube.com/embed/YWnFTdkrLq0";

			pista = "Battlefield 2042 OST - Battlefield 2042";
			soundtrack = "Audios/Battlefield 2042 OST - Battlefield 2042.ogg";
			break;

		case '8':
			nombre = "Five Nights at Freddys: Security Breach";
			precio = 850;
			imagen = "Imágenes/Five Nights at Freddy's Security Breach.jpg";
			desarrollador = "Steel Wool Studios, Scottgames";
			plataforma = "PlayStation 4, PlayStation 5";
			trailer = "https://www.youtube.com/embed/BJ3cLVRWPFU";

			pista = "Pista no disponible";
			soundtrack = "";
			break;

		case '9':
			nombre = "Metroid Dread";
			precio = 1299;
			imagen = "Imágenes/Metroid Dread.jpg";
			desarrollador = "Nintendo, MercurySteam";
			plataforma = "Nintendo Switch";
			trailer = "https://www.youtube.com/embed/V_XnbTayTH4";

			pista = "Metroid Dread OST - Title Theme";
			soundtrack = "Audios/Metroid Dread OST - Title Theme.ogg";
			break;

		case '10':
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
