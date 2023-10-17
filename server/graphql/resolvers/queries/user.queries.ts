import prisma from '@/prisma/prisma';
import { IGqlContext } from '@/types';

export const user = (_: unknown, args: unknown, { user }: IGqlContext) => {
  return user;
};

export const users = () => {
  return prisma.user.findMany({});
};
