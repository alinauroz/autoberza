import { Prisma } from '@prisma/client';

export const isAdmin = async (user: Prisma.UserSelect) => {
  return user.isAdmin || user.email === process.env.ADMIN_EMAIL;
};
