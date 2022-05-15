# HackTheOcean
Repositorio para el hackathon "HACK THE OCEAN" de LauchX 

# PETrackers

* Bruno 
* Alejandro
* Yishaell
* Miriam
* César

## Problemática

Extinción o falta de cuidado de las especies marinas.

## Solución 

Creación de página web interactiva para crear conciencia en las personas con el desplegue de información e iniciativas de votación para salvarlas.

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
