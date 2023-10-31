import { IGqlContext } from '@/types';
import type * as Prisma from '@prisma/client';
import { isLoggedIn } from '../../wrappers';
import prisma from '@/prisma/prisma';

export const createAd = isLoggedIn(
  async (
    _: unknown,
    {
      price,
      discountedPrice,
      country,
      city,
      location,
      description,
      details,
      photos,
      title,
      category,
    }: Prisma.Ad,
    { user }: IGqlContext
  ) => {
    if (!details) {
      throw new Error('Details are missing');
    }
    const ad = await prisma.ad.create({
      data: {
        submittedBy: user?.id as string,
        country,
        city,
        location,
        details,
        price,
        discountedPrice,
        photos,
        title,
        category,
        description,
      },
    });

    return ad;
  }
);

export const updateAd = isLoggedIn(
  async (
    _: unknown,
    {
      id,
      price,
      discountedPrice,
      country,
      city,
      location,
      details,
      photos,
      title,
      isApproved,
      category,
    }: Prisma.Ad
  ) => {
    if (details === null) {
      throw new Error('Details can not be null');
    }

    const ad = await prisma.ad.update({
      where: { id },
      data: {
        country,
        city,
        location,
        details,
        price,
        discountedPrice,
        photos,
        title,
        isApproved,
        category,
      },
    });

    return ad;
  }
);

export const deleteAd = isLoggedIn(
  async (_: unknown, { id }: { id: string }, { user }: IGqlContext) => {
    const ad = await prisma.ad.findUnique({ where: { id } });
    if (ad?.submittedBy === user?.id || user?.isAdmin) {
      return prisma.ad.delete({ where: { id } });
    } else {
      throw new Error('You didnt submit this ad');
    }
  }
);
