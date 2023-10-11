# Prueba Full-Stack

## Instrucciones

1. Instalar docker
2. Clonar el repositorio
3. Ejecutar el comando `docker-compose up`

## Notas

- La interfaz grafica se encuentra en la carpeta `app` y en la url `http://localhost:8001/`
- El api se encuentra en la carpeta `backend` y en la url `http://localhost:8000/users/` y `http://localhost:8000/graphql/`
- El usuario de la db es `postgres` y la contraseña es `postgres` en el puerto `5432` en db `postgres`
- En el contenedor de postgres habilitar UUID primero `create extension "uuid-ossp";`
