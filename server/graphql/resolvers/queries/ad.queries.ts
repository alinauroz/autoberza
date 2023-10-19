import prisma from '@/prisma/prisma';

type FilterArgs = {
  isApproved: boolean;
  dateAfter: number;
};
export const ads = async (_: unknown, { dateAfter }: FilterArgs) => {
  return prisma.ad.findMany({
    where: {
      ...(dateAfter && {
        createdOn: {
          gt: new Date(dateAfter),
        },
      }),
    },
  });
};
