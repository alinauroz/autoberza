import prisma from '@/prisma/prisma';
import translateFields from '@/server/utils/translateFields';
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

export const homepageAds = async () => {
  const forms = await prisma.formFields.findMany({});

  const getAds = async (category: any) => {
    let promoted: any = await prisma.ad.findMany({
      where: {
        subscriptionEndDate: {
          gte: new Date(),
        },
        isApproved: true,
        category,
      },
    });
    const ids = promoted.map((p: any) => p.id);
    promoted.forEach((p: any) => {
      p.isPromoted = true;
    });
    if (promoted.length < 20) {
      const moreAds = await prisma.ad.findMany({
        where: {
          category,
          isApproved: true,
          id: { not: { in: ids } },
        },
      });
      promoted = promoted.concat(moreAds);
    }
    return promoted;
  };

  const adsPromises = forms.map(async (f) => {
    const ads = await getAds(f.category);
    return {
      name: f.category,
      ads,
    };
  });

  const data = await Promise.all(adsPromises);
  return data;
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
    const where: any = {
      sold: { not: true },
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
        ],
      }),
      city,
      country,
    };

    let promoted: any = [];
    if (skip === 0 && typeof id === 'undefined') {
      const promotedResponse = await prisma.ad.findMany({
        where: {
          ...where,
          subscriptionEndDate: { gte: new Date() },
        },
        take: 4,
      });
      promoted = promotedResponse.map((p) => ({
        ...p,
        isPromoted: true,
      }));

      where.id = { not: { in: promoted.map((p: any) => p.id) } };
    }

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

    let filteredAds = ads;
    if (details) {
      filteredAds = ads.filter((ad) => {
        for (let field in details) {
          if (
            (details as any).minKm &&
            typeof (ad.details as any)?.mileage !== 'undefined'
          ) {
            return (
              parseInt((ad.details as any)?.mileage) >= (details as any).minKm
            );
          } else if (
            (details as any).maxKm &&
            typeof (ad.details as any)?.mileage !== 'undefined'
          ) {
            return (
              parseInt((ad.details as any)?.mileage) <= (details as any).maxKm
            );
          } else if (Array.isArray((details as any)[field])) {
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
        manufacturer:
          (details as any)?.manufactures || filteredAds[0]?.manufacturer,
        model: (details as any)?.model || filteredAds[0]?.model,
      },
    });

    const count =
      (details ? filteredAds.length : await prisma.ad.count({ where })) +
      promoted.length;

    const data = promoted.concat(
      details ? filteredAds.slice(skip, skip + take) : filteredAds
    );
    const moreExists = data.length - promoted.length === take;

    return {
      data,
      count,
      moreExists,
      avg: parseInt((result._avg?.price || 0) + ''),
      max: parseInt((result._max?.price || 0) + ''),
      min: parseInt((result._min?.price || 0) + ''),
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
export const adFilters = async (
  _1: unknown,
  { category }: AdFilterArgs,
  { locale }: IGqlContext
) => {
  let forms = await prisma.formFields.findMany({});
  let fields = forms
    .filter((f) => (category ? f.category === category : true))
    .map((form) => form.fields)
    .flat()
    .filter((f: any) => f.advanceFilter);

  const fieldNameSet = new Set();

  fields = fields.filter((field: any) => {
    if (fieldNameSet.has(field.name)) {
      return false;
    }
    fieldNameSet.add(field.name);
    return true;
  });

  if (locale === 'mr') {
    translateFields(fields);
  }

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
      label: locale === 'en' ? 'Category' : 'Kategorija',
    },
    {
      name: 'minPrice',
      name2: 'maxPrice',
      label: locale === 'en' ? 'Price' : 'Cijena',
      type: 'minmax',
      addon: '€',
    },
    {
      type: 'doubledropdown',
      name: 'country',
      label: locale === 'en' ? 'Country' : 'Država',
      name2: 'city',
      label2: locale === 'en' ? 'City' : 'Grad',
      doubleOptions,
    },
  ];

  return {
    filters: moreFilters.concat(fields.slice(0, 20)),
  };
};
