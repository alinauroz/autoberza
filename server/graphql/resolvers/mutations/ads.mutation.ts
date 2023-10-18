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
      details,
      photos,
      title,
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
      },
    });

    return ad;
  }
);
