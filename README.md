# HackTheOcean
Repositorio para el hackathon "HACK THE OCEAN" de LauchX 

# Ejecutar el proyecto

En la carpeta raiz crear un archivo llamado .env con lo siguiente dentro DATABASE_URL="postgresql://postgres:root@localhost:5432/ocean?schema=public" y ejecuta

    npx prisma generate

En la carpeta raiz ejecutar:

    npm install @vue/cli-service -g
    npm install
    node server.js

Después

    cd client
    npm install 
    npm run watch
