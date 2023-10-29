import prisma from '@/prisma/prisma';

type FilterArgs = {
  isApproved: boolean;
  dateAfter: number;
  id: string;

  minPrice: number;
  maxPrice: number;
  city: string;
  country: string;
  category: string;
  details: unknown;
};
export const ads = async (
  _: unknown,
  {
    dateAfter,
    isApproved,
    id,
    minPrice,
    maxPrice,
    city,
    country,
    category,
  }: FilterArgs
) => {
  return prisma.ad.findMany({
    where: {
      isApproved,
      ...(dateAfter && {
        createdOn: {
          gt: new Date(dateAfter * 1000),
        },
      }),

      // more filters
      ...((minPrice || maxPrice) && {
        OR: [
          {
            price: {
              ...(minPrice && { gte: minPrice }),
              ...(maxPrice && { lte: maxPrice }),
            },
          },
          {
            discountedPrice: {
              ...(minPrice && { gte: minPrice }),
              ...(maxPrice && { lte: maxPrice }),
            },
          },
        ],
      }),
      category,
      city,
      country,
    },
  });
};
