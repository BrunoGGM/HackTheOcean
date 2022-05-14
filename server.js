const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/api/users", async (req, res) => {
  const allUsers = await prisma.user.findMany({});
  res.json(allUsers);
});

app.get("/apí/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  res.json(user);
});

app.post("/api/users", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    animal_Specie: req.body.animal_Specie,
    commentary: req.body.commentary,
  };
  const message = "Usuario creado creado.";
  await prisma.user.create({ data: user });
  return res.json({ message });
});

  app.get('/animals', async (req, res) => {
    const allAnimal =  await prisma.animal.findMany({});
    res.json(allAnimal);
  });

  app.post('/animals', async (req, res) => {
    const animal = {
      name: req.body.name,
      description: req.body.description,
      description_danger: req.body.description_danger,
      img_Front_Path: req.body.img_Front_Path,
      img_back_Path: req.body.img_back_Path
     };
    const message = 'Animal creado creado.';
    await prisma.animal.create({data: animal});
    return res.json({message});
  });

   
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.use(express.static(__dirname + "/client/dist"));
