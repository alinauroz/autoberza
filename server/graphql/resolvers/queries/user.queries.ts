import prisma from '@/prisma/prisma';
import { IGqlContext } from '@/types';
import { Prisma } from '@prisma/client';

export const user = (_: unknown, args: unknown, { user }: IGqlContext) => {
  return user;
};

export const users = (_: unknown, { isAdmin }: Prisma.UserWhereInput) => {
  return prisma.user.findMany({ where: { isAdmin } });
};
