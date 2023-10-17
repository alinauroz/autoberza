import prisma from '@/prisma/prisma';

export const forms = () => {
  return prisma.formFields.findMany({});
};
