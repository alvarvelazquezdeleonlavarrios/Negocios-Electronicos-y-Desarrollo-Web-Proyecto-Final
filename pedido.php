<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="Estilos/pedido.css">
  <title> MaestroGamer.com </title>
</head>
<meta charset="UTF-8"> <!-- Corrige errores de caracteres con acentos -->

<body>

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

  <!-- Cuerpo de la página -->
  <div class="contenedorPrincipalCuerpo">

    <h1>Solicitud: Compra de Videojuego</h1>

    <!-- Código en PHP y SQL -->
    <?php
    $usuario = $_POST[usuario];
    $videojuego = $_POST[nombreVideojuego];
    $precio = $_POST[precioVideojuego];
    $cantidad = $_POST[cantidadVideojuego];
    $costoTotal = $precio * $cantidad;

    // Conexión a la base de datos
    $bd_conexion = mysqli_connect("localhost", "root", "hola1234", "maestrogamer");  # Usuario, contraseña y base de datos

    if (mysqli_connect_errno()) {
      echo "Error al intentar conectarse a la base de datos <br>";
      exit();
    }

    // Inserción a la base de datos
    date_default_timezone_set('America/Mexico_City');
    $fecha = date("Y-m-d H:i:s"); 
    $resultado = mysqli_query($bd_conexion, "INSERT INTO compra (usuario, videojuego, precio, cantidad, costoTotal, fecha) VALUES ('$usuario', '$videojuego', '$precio', '$cantidad', '$costoTotal', '$fecha')");

    // Recibo generado producto de la inserción
    echo "<br> <h2>Recibo generado</h2>";
    echo "Usuario: $usuario <br>";
    echo "Producto: $videojuego <br>";
    echo "Precio: $precio (MXN) <br>";
    echo "Cantidad: $cantidad <br>";
    echo "<span> Costo total: </span>" . $costoTotal . " (MXN) <br><br>";

    // Revisar compras anteriores realizadas por el usuario actual
    $resultado = mysqli_query($bd_conexion, "SELECT * FROM compra where usuario='$usuario'");

    echo "<br> <span> Compras realizadas por el usuario " . $usuario . ": </span> <br><br>";
    ?>

    <div class="contenedorTabla">
      <table border="1">
        <!-- Nombres de columnas -->
        <tr>
          <th> Usuario </th>
          <th> Producto </th>
          <th> Precio (MXN) </th>
          <th> Cantidad </th>
          <th> Costo Total (MXN) </th>
          <th> Fecha </th>
        </tr>

        <?php
        while($renglon = mysqli_fetch_array($resultado)){
            echo "<tr>";
            echo "<th>" . $renglon['usuario'] . "</th>" ;
            echo "<th>" . $renglon['videojuego'] . "</th>" ;
            echo "<th>" . $renglon['precio'] . "</th>" ;
            echo "<th>" . $renglon['cantidad'] . "</th>" ;
            echo "<th>" . $renglon['costoTotal'] . "</th>" ;
            echo "<th>" . $renglon['fecha'] . "</th>" ;
            echo "</tr>";
        }
        ?>
      </table>
    </div>
    
    <?php
    // Cierre de sesión
    $resultado->free_result();
    mysqli_close($bd_conexion);
    ?>
  </div>

</div>
<br>

<script type=text/javascript src="Scripts/videojuego.js"> </script>
</body>
</html>