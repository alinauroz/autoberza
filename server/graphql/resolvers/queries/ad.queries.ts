import prisma from '@/prisma/prisma';
import { IGqlContext } from '@/types';
import { Prisma } from '@prisma/client';

type FilterArgs = {
  isApproved: boolean;
  dateAfter: number;
  id: string;

  minPrice: number;
  maxPrice: number;
  city: string;
  country: string;
  category: string;
  details: Prisma.JsonFilter;
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
    details,
  }: FilterArgs
) => {
  const ads = await prisma.ad.findMany({
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

  let filteredAds = ads;
  if (details) {
    filteredAds = ads.filter((ad) => {
      for (let field in details) {
        if (
          (details as { [x: string]: string })[field] !==
          (ad.details as { [x: string]: string })[field]
        ) {
          return false;
        }
      }
      return true;
    });
  }

  return {
    data: filteredAds,
  };
};

export const myAds = async (
  _1: unknown,
  _2: unknown,
  { user }: IGqlContext
) => {
  return prisma.ad.findMany({ where: { submittedBy: user?.id } });
};
