<!-- PROYECTO -->
<br />
<div align="center">
  <a href="https://google.cl">
    <img src="https://i.imgur.com/PcEE9Go.png" alt="Logo" >
  </a>

  <h3 align="center">Vuelta al menu en 365 platos - Maestros Solucionadores.</h3>

  <p align="center">
    Aplicación de delivery "Vuelta al menu en 365 platos".
  </p>
</div>

# Backend - Aplicacion de delivery "Vuelta al menu en 365 platos"

Esta aplicación es un proyecto para el ramo de "Desarrollo de soluciones móviles" del 1°Semestre 2024. 


## Tecnologías Utilizadas 🖥️
- [Node](https://nodejs.org/en/download/current)
- Express
- [MySQL Workbench](https://dev.mysql.com/downloads/installer/)
- Sequelize

Como extra, el [Nodemon](https://www.npmjs.com/package/nodemon) para verificar errores a detalles en consola.

## Instalacion inicial 💿
El proyecto esta hecho en base a [NODE.JS](https://nodejs.org/en), es necesario instalar este entorno de programación.


Instalar Nodemon de manera global:
```bash
npm install -g nodemon
```


### Pasos de Ejecución
    1. Copiar el archivo `.env.example` y nombrarlo como `.env`.
    2. Ejecutar el comando `npm install` para instalar las dependencias del proyecto.
    3. Configurar las variables de entorno del archivo `.env`.
    4. Ejecutar el proyecto de manera local con el comando `nodemon app`.
    5. ¡Disfruta del APIRest!


Abrir el proyecto en el Visual Studio Code o su editor favorito. Abre una nueva consola.
Debemos copiar el archivo .env para poder establecer la conexión con nuestra base de datos.
```bash
copy .env.example .env
```

Ejecuta el siguiente comando para poder instalar las dependencias en el proyecto.
```bash
npm install
```

Cambiamos los siguientes parámetros en el .env con las variables de entorno de la base de datos:
```bash
PORT = El puerto donde va a correr el servidor.
DB_PORT = Depende del puerto asignado por usted en la configuración de su base de datos(default: 3306)
DB_DATABASE = Aquí va el nombre de la base de datos creada en nuestro administrador de base de datos preferido (Ej: MySQL Workbench).
DB_USERNAME = El nombre de usuario que utiliza para 
DB_PASSWORD = Es la contraseña que nosotros asignamos en la instalación, en caso de utilizar Xampp, Laragon, etc... Este campo se debe dejar vacío.
```
Para obtener el "SECRET_OR_PRIVATE_KEY", puede copiar cualquiera de este generador de contraseñas hexadecimales:
[Generador Contraseñas](https://codepen.io/EightArmsHQ/pen/mrXXKj)

Ahora levantamos el proyecto con el comando:
```bash
nodemon src/app
```
Si no puede utilizar ese comando, utilice este:
```bash
node src/app
```

## Base de datos 📈

El Query inicial de instalacion de la base de datos, se encuentran dentro de de la carpeta database.


### Execute Migrations:
```bash
sequelize db:migrate
# o utilizar
npx sequelize db:migrate
```

### Revert All Migrations:
```bash
sequelize db:migrate:undo:all
# o utilizar
npx sequelize db:migrate:undo:all
```


### Execute Seeders:
```bash
sequelize db:seed:all
# o utilizar
npx sequelize db:seed:all
```

### Revert All Seeders:
```bash
sequelize db:seed:undo:all
# o utilizar
npx sequelize db:seed:undo:all
```

## Versionado 📌

Usamos [GitHub](https://github.com/Jose-LocoPepe/Backend-App-Delivery) para el versionado.

## Autores ✒️

###### José Bautista

###### Fernando Valenzuela

###### Nicolas Mardones

###### Joel Huilca

###### Marcelo Soto


## Licencia 📄

Este proyecto está bajo la Licencia de &copy; Maestros Solucionadores.
