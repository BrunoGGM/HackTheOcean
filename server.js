const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/users', async (req, res) => {
    const allUsers =  await prisma.user.findMany({});
    res.json(allUsers);
  });

  app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await prisma.user.findUnique({where: {id: parseInt(id)}});
    res.json(user);
  });

  app.post('/users', async (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      animal_Specie: req.body.animal_Specie,
      commentary: req.body.commentary

     };
    const message = 'Usuario creado creado.';
    await prisma.user.create({data: user});
    return res.json({message});
  });

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
