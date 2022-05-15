const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const person = await prisma.user.upsert({
      where: { name: "juanito" },
      update: {},
      create: {
        name: "juanito",
        email: "hola@hotmail",
        animal_Specie: "ballena azul",
        commentary: "Aqui disfrutando de la vida",
      },
    });

    const person1 = await prisma.user.upsert({
      where: { name: "juanito2" },
      update: {},
      create: {
        name: "juanito2",
        email: "hola@hotmail",
        animal_Specie: "ballena azul",
        commentary: "Aqui disfrutando de la vida",
      },
    });

    const animal = await prisma.animal.upsert({
      where: { name: "La ballena azul" },
      update: {},
      create: {
        name: "La ballena azul",
        description:
          "A pesar de ser el animal más grande del mundo, es uno de los que también se encuentra en peligro de extinción. Solo quedan unos pocos ejemplares de ballena azul en el Golfo de California y sur de Chile.",
        description_danger: "La pesca del hombre",
        img_front_path: "./img/ballena.jpg",
        img_back_path: "./img/ballena.jpg",
      },
    });

    console.log("Create Users y Animal");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
