// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const userOne = await prisma.user.upsert({
    where: { username: 'sbarkaat' },
    update: {},
    create: {
      username: 'sbarkaat',
      password: 'password123',      
    },
  });

  const userTwo = await prisma.user.upsert({
    where: { username: 'nsajid' },
    update: {},
    create: {
      username: 'nsajid',
      password: 'password123'
    },
  });

  console.log({ userOne: userOne, userTwo: userTwo });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });