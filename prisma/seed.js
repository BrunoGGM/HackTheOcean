const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const  person = await prisma.user.upsert({
      where: { name: 'juanito' },
      update: {},
      create: {
        name: 'juanito',
				email: 'hola@hotmail',
				animal_Specie: 'ballena azul',
                commentary: "Aqui disfrutando de la vida"
      },
    });

    const person1 = await prisma.user.upsert({
      where: { name: 'juanito2' },
      update: {},
      create: {
        name: 'juanito2',
             email: 'hola@hotmail',
             animal_Specie: 'ballena azul',
             commentary: "Aqui disfrutando de la vida"
      },
    });



    console.log('Create Users');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();