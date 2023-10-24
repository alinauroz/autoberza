import prisma from '@/prisma/prisma';

type FilterArgs = {
  isApproved: boolean;
  dateAfter: number;
  id: string;
};
export const ads = async (
  _: unknown,
  { dateAfter, isApproved, id }: FilterArgs
) => {
  return prisma.ad.findMany({
    where: {
      isApproved,
      ...(dateAfter && {
        createdOn: {
          gt: new Date(dateAfter * 1000),
        },
      }),
    },
  });
};
