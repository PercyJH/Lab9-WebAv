#MICROSERVICIOS

#Primeros pasos
*Vamos a pasar la base de datos a un MICROSERVICIOS
*Separar la base de datos en un nuevo proyecto
*Este proyecto tendre su propio puerto y rutas independintes la proyecto principal

mongodb
│___index.js
│___network.js
│

*ojo mongodb es una app totalmente separada de api
index.js: Hemos creado una nueva app que corre en el puerto 3001
network.js: Sera la interfaz que expoga el resultado de lo querys

#IDEAS
*Mover los modelos a la carpeta mongodb

mongodb
│___index.js
│___network.js
│___model
│_____index.js
│_____user.js

user.js: Es el modelo de la tabla usuario
index.js: Se encarga de exportar los modelos
network.js: Podamos usar los modelos para llamar a store e invocar a los metoso correspondiente