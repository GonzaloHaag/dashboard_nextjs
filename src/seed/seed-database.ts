/** Archivo node para ejecutar mi semilla de base de datos. npm run seed */
import prisma from "../lib/prisma";
import { hashSync } from 'bcrypt';
async function main() {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
        data : [
            {
                email:'elpochomates13@gmail.com',
                password: hashSync('prueba',3),
                username:'Sofia Peralta',
                logo:'/logo_pocho.webp'
            },
            {
                email:'test@example.com',
                password: hashSync('prueba',3),
                username:'Test Example',
                logo:'/logo_test.webp'
            }
        ]
    })
    console.log('Seed ejecutado correctamente');
}
(() => {
    if(process.env.NODE_ENV === 'production') return;
    main();
})();