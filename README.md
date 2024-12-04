# Development

## Pasos para levantar la app en desarrollo 

1. Clonar el repositorio 
2. Renombrar archivo .env.template por .env
3. Reemplazar variables de entorno
4. Instalar dependencias 
```
npm install
```
5. Correr las migraciones de Prisma
```
npx prisma migrate dev
```
6. Ejecutar el seed de la database 
```
npm run seed
```
7. Correr el proyecto 
```
npm run dev
```