import prisma from '@/prisma/prisma';
import { IGqlContext } from '@/types';
import { cityOptions, countryOptions } from '@/utils/options';
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
  categories: string[];

  take: number;
  skip: number;

  sortBy: string;
  sortOrder: string;
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

    categories,

    take = 10,
    skip = 0,

    sortBy,
    sortOrder,
  }: FilterArgs
) => {
  try {
    const where = {
      isApproved,
      id,
      ...(dateAfter && {
        createdOn: {
          gt: new Date(dateAfter * 1000),
        },
      }),
      ...(categories && {
        category: { in: categories },
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
          //{
          //  discountedPrice: {
          //    ...(minPrice && { gte: minPrice }),
          //    ...(maxPrice && { lte: maxPrice }),
          //  },
          //},
        ],
      }),
      city,
      country,
    };
    const ads = await prisma.ad.findMany({
      where,
      ...(sortBy && { orderBy: { [sortBy]: sortOrder || 'desc' } }),
      ...(details
        ? undefined
        : {
            take,
            skip,
          }),
    });

    const result = await prisma.ad.aggregate({
      _avg: {
        price: true,
      },
      _max: {
        price: true,
      },
      _min: {
        price: true,
      },
      where: {
        manufacturer: (details as any)?.manufacturer,
        model: (details as any)?.model,
      },
    });
    console.log('Result', result);

    let filteredAds = ads;
    if (details) {
      filteredAds = ads.filter((ad) => {
        for (let field in details) {
          if (Array.isArray((details as any)[field])) {
            return (
              (details as any)[field].indexOf((ad.details as any)?.[field]) !==
              -1
            );
          } else if (
            (details as { [x: string]: string })[field] !==
            (ad.details as { [x: string]: string })?.[field]
          ) {
            return false;
          }
        }
        return true;
      });
    }

    const count = details
      ? filteredAds.length
      : await prisma.ad.count({ where });

    const data = details ? filteredAds.slice(skip, skip + take) : filteredAds;
    const moreExists = data.length === take;

    return {
      data,
      count,
      moreExists,
    };
  } catch (err) {
    console.log(err);
  }
};

export const myAds = async (
  _1: unknown,
  _2: unknown,
  { user }: IGqlContext
) => {
  const ads = await prisma.ad.findMany({ where: { submittedBy: user?.id } });
  return {
    data: ads,
  };
};

type AdFilterArgs = { category: string };
export const adFilters = async (_1: unknown, { category }: AdFilterArgs) => {
  const forms = await prisma.formFields.findMany({ where: { category } });
  const fields = forms
    .map((form) => form.fields)
    .flat()
    .filter((f: any) => f.advanceFilter);
  const categories = forms.map((form) => form.category);

  const doubleOptions: { [x: string]: string[] } = {};

  countryOptions.forEach((country) => {
    doubleOptions[country.label] = cityOptions
      .filter((city) => city.country === country.value)
      .map((city) => city.label);
  });

  const moreFilters: Prisma.JsonValue = [
    {
      name: 'categories',
      type: 'select',
      options: categories,
      label: 'Category',
    },
    {
      name: 'minPrice',
      name2: 'maxPrice',
      label: 'Price',
      type: 'minmax',
      addon: '€',
    },
    {
      type: 'doubledropdown',
      name: 'country',
      label: 'Country',
      name2: 'city',
      label2: 'City',
      doubleOptions,
    },
  ];

  return {
    filters: moreFilters.concat(fields.slice(0, 10)),
  };
};
