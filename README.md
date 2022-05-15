<p align="center">
  <img src="/docs/img/header.jpg">
</p>

# HackTheOcean
Repositorio para el hackathon "HACK THE OCEAN" de LauchX 

# PETrackers

 * launchx02730@innovaccion.mx -> Alejandro Gutiérrez

 * launchx06383@innovaccion.mx -> Bruno Gómez

 * launchx08406@innovaccion.mx -> César Guadalupe Meza

 * launchx00446@innovaccion.mx -> Miriam Alicia Márquez

 * launchx10170@innovaccion.mx -> Yishaell Ramírez Vallejo

## Problemática

Extinción o falta de cuidado de las especies marinas.

## Ver video relacionado con la problemática

<p align="center">
  <img src="https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png" width="350" title="Bromita, sorry.">
</p>

## Solución 

Creación de página web interactiva para crear conciencia en las personas con el desplegue de información e iniciativas de votación para salvarlas.

## Servicios utilizados

 - Azure Blob Storage
 - Azure App Service 
 - Azure Database for PostgreSQL

Deploy en Azure por Bruno

## Ejecutar el proyecto

En la carpeta raiz crear un archivo llamado .env con lo siguiente dentro DATABASE_URL="postgresql://postgres:root@localhost:5432/ocean?schema=public"

En la carpeta raiz ejecutar:

    npm install @vue/cli-service -g
    npm install
    npx prisma generate
    node server.js

Después

    cd client
    npm install 
    npm run watch
    
