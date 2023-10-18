import prisma from '@/prisma/prisma';

export const ads = async () => {
  return prisma.ad.findMany({});
};
