const prisma = require("../prisma");
const seed = async () => {
 // TODO: Create 10 players

 const createPlayers = async () => {
  const players = [
    {
      name: "Charlie",
      breed: "French BullDog",
      status: "field",
    },
    {
      name: "Mackie",
      breed: "Lab",
      status: "bench",
    },
    {
      name: "Luna",
      breed: "Toy Poodle",
      status: "field",
    },
    {
      name: "Mr. Worldwide",
      breed: "Pitbull",
      status: "field",
    },
    {
      name: "Kiara",
      breed: "Golden Retriever",
      status: "bench",
    },
    
  ];
  await prisma.player.createMany({ data: players });
 };

  await createPlayers();

};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });