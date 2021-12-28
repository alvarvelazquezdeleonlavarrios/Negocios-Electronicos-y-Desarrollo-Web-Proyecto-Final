# NegociosWeb
Proyecto Final para la asignatura de Negocios Electrónicos y Desarrollo Web

## Manual de instrucciones

### Carpeta del proyecto (opcional)
Renombrar la carpeta que contiene este repositorio como `MaestroGamer` 
y moverla a la carpeta del servidor de AppServ:

> C:\AppServ\www\

### Acceder a la página principal del sitio web desde el navegador
Escribir en el buscador:

> 127.0.0.1/MaestroGamer/index.html

### Instalación de AppServ
Realizar la instalación con la configuración predeterminada. Verificar los campos:

- Ruta del servidor: `localhost`
- Nombre de usuario: `root`
- Contraseña: `hola1234`

### Base de datos
Una vez instalado AppServ, abrir MySQL Command Line Client para iniciar sesión
(ingresar contraseña de root) y realizar las siguientes operaciones:

##### Crear la base de datos:
`create database maestrogamer;`

##### Crear las tablas:
```
create table usuario (nombre varchar(255));
create table compra (usuario varchar(255), videojuego varchar(255), 
			precio float, cantidad int, costoTotal float,
			fecha datetime);
```
##### Insertar un nuevo usuario:
`insert into usuario values ('nombre_usuario');`

**Nota:** deben insertarse mínimo 10 usuarios en la tabla

##### Insertar una nueva compra:
Estas se realizan dentro del sitio web cuando se quiere realizar un pedido desde
la página videojuego.php

### Generar archivo con la base de datos (.sql)
Dentro del cmd de windows ubicarse en la carpeta de sitio web y teclear lo siguiente:
```
C:\AppServ\MySQL\bin\mysqldump -u root -p maestrogamer > maestrogamer.sql
Enter password: hola1234
```
