<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="Estilos/videojuego.css">
	<title> MaestroGamer.com </title>
</head>
<meta charset="UTF-8"> <!-- Corrige errores de caracteres con acentos -->

<body onload="cargarVideojuego()">

<div class="contenedorPrincipal">
	<!-- Cabecera de la página -->
	<div class="contenedorPrincipalCabecera">
		
		<div class="contenedorCabecera">
			<div class="logoPaginaWeb">
				Integrantes <br>
				- Flores Gómez Jessica Victoria <br>
				- Ramírez Martínez Humberto <br>
				- Velázquez de León Lavarrios Alvar
			</div>

			<div class="opcionXbox"> <a href="plataforma.html" class="link" onclick="seleccionarPlataforma(1)"> Xbox </a>  </div>
			<div class="opcionPlayStation"> <a href="plataforma.html" class="link" onclick="seleccionarPlataforma(2)"> PlayStation </a> </div>
			<div class="opcionNintendo"> <a href="plataforma.html" class="link" onclick="seleccionarPlataforma(3)"> Nintendo </a> </div>
			<div class="opcionInicio"> <a href="index.html" class="link"> Inicio </a> </div>
		</div>
	</div>

	<!-- Información del videojuego -->
	<div class="contenedorPrincipalInformacionVideojuego">
		<form name="Pedido" action="pedido.php" method="post">	<!-- Solicitud SQL mediante PHP a la base de datos -->
		<br>

		<h3 style="text-align: center;"> Usuario: </h3>

		<!-- Lee de la base de datos cada uno de los usuarios -->
		<select name="usuario" class="selectorUsuario" id="usuario">
			<?php
			// Conexión a la base de datos
			$bd_conexion = mysqli_connect("localhost", "root", "hola1234", "maestrogamer");  # Usuario, contraseña y base de datos

			if (mysqli_connect_errno()) {
			  echo "Error al intentar conectarse a la base de datos <br>";
			  exit();
			}

			// Consulta a la base de datos
			$resultado = mysqli_query($bd_conexion, "SELECT * FROM usuario");

			while($renglon = mysqli_fetch_array($resultado)){
				echo "<option >" . $renglon['nombre'] . "</option>";
			}

			// Cierre de sesión
			$resultado->free_result();
			mysqli_close($bd_conexion);
		?>
		</select>

		<div class="contenedorInformacionVideojuego">
			<div class="imagenVideojuego"> <img id="imagen" src=""> </div>

			<div class="nombreVideojuego">
				<input type="text" name="nombreVideojuego" id="nombre" readonly> <br>
			</div>

			<div class="precioVideojuego">
				<label> Precio: $</label><input type="number" name="precioVideojuego" id="precio" readonly> <label> MXN </label>
			</div>

			<div class="desarrolladorVideojuego">
				<label> Desarrollador(es): </label><input type="text" name="desarrolladorVideojuego" id="desarrollador" readonly>
			</div>

			<div class="plataformaVideojuego">
				<label> Plataforma(s): </label><input type="text" name="plataformaVideojuego" id="plataforma" readonly>
			</div>

			<div class="cantidadVideojuego">
				<label> Cantidad </label> <br>
				<input type="button" class="botonDecremento" value="-" onclick="disminuirCantidad()">
				<input type="number" class="campoCantidad" name="cantidadVideojuego" id="cantidad" onchange="obtenerCantidad()">
				<input type="button" class="botonIncremento" value="+" onclick="aumntarCantidad()">
			</div>

			<div class="compra">
				<input type="submit" class="botonCompra" value="Comprar">
			</div>
		</div>
		</form>
	</div>

	<div class="contenedorPrincipalTrailerVideojuego">
		<div class="contenedorTrailerVideojuego">
			<h2> Trailer </h2> <br>
			<iframe id="trailer" src=""> </iframe>	<!-- Ventana para el video de YouTube -->
			<br>

			<h2> Soundtrack (preview) </h2> <br>
			<output id="pista"> </output> <br>
			<audio id="audio" controls>
				<source id="soundtrack" src=""> </source>
			</audio>
		</div>
	</div>

</div>
<br>

<script type=text/javascript src="Scripts/videojuego.js"> </script>
</body>
</html>