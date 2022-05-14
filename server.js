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

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
